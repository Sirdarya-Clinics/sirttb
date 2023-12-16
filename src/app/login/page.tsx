'use client';

import { Suspense, useEffect, useLayoutEffect, useState } from 'react';
import { redirect, useRouter } from 'next/navigation';
import AuthProvider, { useAuth } from '../../providers/AuthContext';
import Loader from '@/components/Loader';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  const { login, currentUser } = useAuth();

  const auth = useAuth();
  let router = useRouter();
  //redirect
 if(auth.currentUser){
             redirect('/backend')
          }
//redirect
   function submitHandler() {
    if (!email || !password) {
      setError('Please enter email and password');
      return;
    }
    if (true) {
       login(email, password)
      return;
    }
   
  }

  return (
    <>
    <AuthProvider>
      <Suspense fallback={<Loader />}>
        <div className="flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4">
          <h1 className="font-extrabold select-none text-2xl sm:text-4xl uppercase">
            Login
          </h1>
          {error && (
            <div className="w-full max-w-[40ch] border-rose-400 border text-center border-solid text-rose-400 py-2">
              {error}
            </div>
          )}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[40ch]"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="outline-none text-slate-900 p-2 w-full max-w-[40ch] duration-300 border-b-2 border-solid border-white focus:border-cyan-300"
          />
          <button
            onClick={submitHandler}
            className='hover:after:translate-x-full after:duration-300 hover:text-cyan-300'
          >
            SUBMIT
          </button>
          
          <h2
            className="hover:scale-110 cursor-pointer"
            onClick={() => setIsLoggingIn(!isLoggingIn)}
          >
          </h2>
          
        </div>
        
      </Suspense>
      </AuthProvider>
    </>
  );
}