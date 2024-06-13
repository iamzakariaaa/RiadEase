import SignupForm from "../features/auth/SignupForm";
import Heading from "../components/Heading";

function NewUsers() {
  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </>
  );
}

export default NewUsers;
