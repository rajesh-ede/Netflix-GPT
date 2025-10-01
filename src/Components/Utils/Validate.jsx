// Utils/Validate.js
export const Validate = (name, email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPasswordValid = password.length >= 6;
  const isNameValid = /^[a-zA-Z0-9_]{3,20}$/.test(name);

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password must be at least 6 characters";
  if (!isNameValid) return "Username is not valid";

  return null;
};






// export const Validate=(email, password,name)=>{
//     const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
//     const isPasswordValid = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(password);
//     const isNameValid = /^[a-zA-Z0-9_]{3,20}$/.test(name);




//     if(!isEmailValid) return "Email ID is not valid";
//     if(!isPasswordValid) return "Password is not valid";
//     if(!isNameValid) return "username is not valid";

//     return null;
// }