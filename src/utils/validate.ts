export const checkValidData = (name: string | null, email: string, password: string) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return 'Email ID is not valid';
  if (!isPasswordValid) return 'Password is not valid';
  if (name !== null) {
    const isNameValid = /^[A-Za-z\s]+$/.test(name);
    if (!isNameValid) return 'Name is not valid';
  }

  return null;
};
