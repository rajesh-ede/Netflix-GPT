import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const[isSignForm,setIsSignInForm] = useState(true);
  const toggleSignInForm =()=>{
    setIsSignInForm(!isSignForm);
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/bebd95d0-65f9-41a9-9d12-4794db63653e/web/IN-en-20250922-TRIFECTA-perspective_5e75cfb4-3797-4f17-866b-181ff91a51dd_large.jpg" alt="logo" />
      </div>
      <div>
        <form className="w-3/12 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0 text-white">
        <h1 className='text-xl p-4'>{isSignForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignForm && (
          <input type="text" placeholder="Full Name "className='p-2 my-2 w-full bg-gray-700'/>
        )}
          <input type="text" placeholder="Email" className="p-2 my-2 w-full bg-gray-700"/>
            <input type="password" placeholder="password" className="p-2 my-2 w-full bg-gray-700"/>
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignForm ? "Sign In" : "Sign Up"}</button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
              {isSignForm ? "New to Netflix ? Sign Up Now" :"Already registered? Sign In"}
            </p>
        </form>
      </div>
    </div>
  )
}

export default Login
