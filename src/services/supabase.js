import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rmkdozmjobuodlskhrpu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJta2Rvem1qb2J1b2Rsc2tocnB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwNjk1NDcsImV4cCI6MjAzMjY0NTU0N30.yke2s8RteBRcDf5NKlMBXGu-PMxnrYl1YOHDmzkuoRY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;