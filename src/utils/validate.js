export const checkValidateData = (email, password, FirstName, LastName) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
  const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)/.test(FirstName, LastName);

  if (!isEmailValid) return "Please enter a valid email";
  if (!isPasswordValid) return "Please enter a strong password";
  if (!isNameValid) return "Please enter a valid name";

  return null;
};
