import React, { useRef, useState } from 'react';
import Header from './Header';
import { Validate } from './Utils/Validate';
import { auth } from './Utils/firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";

import { useDispatch } from 'react-redux';
import { addUser } from './Utils/userSlice';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [isSignForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    console.log("handleButtonClick called — isSignForm:", isSignForm);

    const enteredName = name.current?.value || null;
    const enteredEmail = email.current?.value || "";
    const enteredPassword = password.current?.value || "";

    console.log("Inputs:", {
      enteredName,
      enteredEmail,
      enteredPassword
    });

    // Choose validation logic based on sign-in vs sign-up
    let message;
    if (!isSignForm) {
      message = Validate(enteredName, enteredEmail, enteredPassword);
      console.log("Validate (signup) result:", message);
    } else {
      // For sign-in, skip name validation by passing null for name
      message = Validate(null, enteredEmail, enteredPassword);
      console.log("Validate (signin) result:", message);
    }

    if (message) {
      console.warn("Validation failed:", message);
      setErrorMessage(message);
      setIsLoading(false);
      return;
    }

    console.log("Validation passed, proceeding with Firebase call");
    setErrorMessage(null);
    setIsLoading(true);

    if (!isSignForm) {
      console.log("Signing up user with email:", enteredEmail);
      createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then((userCredential) => {
          console.log("createUserWithEmailAndPassword success:", userCredential);
          const user = userCredential.user;
          return updateProfile(user, {
            displayName: enteredName,
            photoURL: "https://i.pinimg.com/736x/91/86/1b/91861b749841221d52122f0c2933d8a6.jpg"
          }).then(() => {
            console.log("updateProfile success; user now:", user);
            const { uid, email, displayName, photoURL } = user;
            console.log("Dispatch addUser:", { uid, email, displayName, photoURL });
            dispatch(addUser({ uid, email, displayName, photoURL }));
            console.log("Navigating to /browse after signup");
            navigate("/browse");
          }).catch((error) => {
            console.error("updateProfile error:", error);
            setErrorMessage("Profile update error: " + error.message);
          });
        })
        .catch((error) => {
          console.error("createUserWithEmailAndPassword error:", error.code, error.message);
          setErrorMessage(`${error.code} - ${error.message}`);
        })
        .finally(() => {
          console.log("Signup finally block, isLoading -> false");
          setIsLoading(false);
        });

    } else {
      console.log("Signing in user with email:", enteredEmail);
      signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then((userCredential) => {
          console.log("signInWithEmailAndPassword success:", userCredential);
          const user = userCredential.user;
          const { uid, email, displayName, photoURL } = user;
          console.log("Dispatch addUser in signin:", { uid, email, displayName, photoURL });
          dispatch(addUser({ uid, email, displayName, photoURL }));
          console.log("Navigating to /browse after signin");
          navigate("/browse");
        })
        .catch((error) => {
          console.error("signInWithEmailAndPassword error:", error.code, error.message);
          setErrorMessage(`${error.code} - ${error.message}`);
        })
        .finally(() => {
          console.log("Signin finally block, isLoading -> false");
          setIsLoading(false);
        });
    }
  };

  const toggleSignInForm = () => {
    console.log("Toggling form, was:", isSignForm);
    setIsSignInForm(!isSignForm);
    setErrorMessage(null);
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bebd95d0-65f9-41a9-9d12-4794db63653e/web/IN-en-20250922-TRIFECTA-perspective_5e75cfb4-3797-4f17-866b-181ff91a51dd_large.jpg"
          alt="background"
        />
      </div>

      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Form submit prevented");
          }}
          className="w-3/12 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0 text-white"
        >
          <h1 className='text-xl p-4'>
            {isSignForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className='p-2 my-2 w-full bg-gray-700'
              autoComplete="name"
            />
          )}

          <input
            ref={email}
            type="email"
            placeholder="Email"
            className="p-2 my-2 w-full bg-gray-700"
            autoComplete="email"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 my-2 w-full bg-gray-700"
            autoComplete={isSignForm ? "current-password" : "new-password"}
          />

          {errorMessage && (
            <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
          )}

          <button
            className="p-4 my-6 bg-red-700 w-full rounded-lg"
            onClick={handleButtonClick}
            disabled={isLoading}
          >
            {isLoading
              ? (isSignForm ? "Signing In..." : "Signing Up...")
              : (isSignForm ? "Sign In" : "Sign Up")}
          </button>

          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;










// import React, { useRef, useState } from 'react'
// import Header from './Header'
// import { Validate } from '../Utils/Validate';
// import { auth } from '../Utils/firebaseConfig';
// import { createUserWithEmailAndPassword } from 'firebase/auth';

// const Login = () => {
//   const[isSignForm,setIsSignInForm] = useState(true);
//   const[errorMessage,setErrorMessage] = useState(null);
//   const name = useRef(null);
//   const email = useRef(null);
//   const password = useRef(null);


//   const handleButtonClick =()=>{
//       const message =  Validate(name.current.value,email.current.value,password.current.value);
//       setErrorMessage(message);
//       if(message) return;

//       if(!isSignForm){
//         createUserWithEmailAndPassword(auth, email.current.value,password.current.value) 
//           .then((userCredential) => {
//               // Signed up 
//           const user = userCredential.user;
//           console.log(user);
          
//            })
//            .catch((error) => {
//              const errorCode = error.code;
//              const errorMessage = error.message;
//               setErrorMessage(errorCode + "-" +errorMessage )
//   });
//       }else{

//       }
     
//   }
//   const toggleSignInForm =()=>{
//     setIsSignInForm(!isSignForm);
//   }
//   return (
//     <div>
//       <Header />
//       <div className='absolute'>
//         <img src="https://assets.nflxext.com/ffe/siteui/vlv3/bebd95d0-65f9-41a9-9d12-4794db63653e/web/IN-en-20250922-TRIFECTA-perspective_5e75cfb4-3797-4f17-866b-181ff91a51dd_large.jpg" alt="logo" />
//       </div>
//       <div>
//         <form onSubmit={(e)=> e.preventDefault()}className="w-3/12 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0 text-white">
//         <h1 className='text-xl p-4'>{isSignForm ? "Sign In" : "Sign Up"}</h1>
//         {!isSignForm && (
//           <input  ref={name} type="text" placeholder="Full Name "className='p-2 my-2 w-full bg-gray-700'/>
//         )}
//           <input ref={email} type="text" placeholder="Email" className="p-2 my-2 w-full bg-gray-700"/>
//             <input ref={password} type="password" placeholder="password" className="p-2 my-2 w-full bg-gray-700"/>
//              <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

//             <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignForm ? "Sign In" : "Sign Up"}</button>
//             <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
//               {isSignForm ? "New to Netflix ? Sign Up Now" :"Already registered? Sign In"}
//             </p>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login
