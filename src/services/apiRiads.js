import supabase, { supabaseUrl } from "./supabase";

export async function getRiads() {
  const { data, error } = await supabase.from("riads").select("*");

  if (error) {
    console.error(error);
    throw new Error("Riads could not be loaded");
  }

  return data;
}

export async function createEditRiad(newRiad, id) {
  const hasImagePath = newRiad.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newRiad.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newRiad.image
    : `${supabaseUrl}/storage/v1/object/public/riad-images/${imageName}`;

  // 1. Create/edit riad
  let query = supabase.from("riads");

  // A) CREATE
  if (!id) query = query.insert([{ ...newRiad, image: imagePath }]);

  // B) EDIT
  if (id) query = query.update({ ...newRiad, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Riad could not be created");
  }

  // 2. Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("riad-images")
    .upload(imageName, newRiad.image);

  // 3. Delete the riad IF there was an error uplaoding image
  if (storageError) {
    await supabase.from("riads").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Riad image could not be uploaded and the riad was not created"
    );
  }

  return data;
}

export async function deleteRiad(id) {
  const { data, error } = await supabase.from("riads").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Riad could not be deleted");
  }

  return data;
}
