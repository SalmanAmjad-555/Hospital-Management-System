import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState('Sign up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const eventHandler = (event)=>{
      event.preventDefault()
  }

  return (
    <form className='min-h-[80vh] flex ltems-center'>

      <div className='flex flex-col m-auto items-start p-8 min-w-[340px] sm:min-w-[96px] border rounded-xl text-zinc-600 text-sm shadow-xl'>
        <p className='text-2xl font-semibold'>{state === 'Sign up' ? 'Create Account' : 'Login'}</p>
        <p>Please {state === 'Sign up' ? 'Sign up' : 'log in'} to book appointment</p>
          {
            state === 'Sign up' && <div className='w-full pt-4'>
          <p>FullName</p>
          <input className='border border-zinc-200 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.value) } value={name} />
        </div>
          }
        
        <div className='w-full pt-4'>
          <p>Email</p>
          <input className='border border-zinc-200 rounded w-full p-2 mt-1'  type="text" onChange={(e) => setEmail(e.target.value) } value={email} />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-200 rounded w-full p-2 mt-1'  type="text" onChange={(e) => setPassword(e.target.value) } value={password} />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base mt-2'>{state === 'Sign up' ? 'Create Account' : 'Login'}</button>
        {
          state === 'Sign up'
          ? <p>Already have an account <span onClick={() => setState('Login')} className='cursor-pointer underline text-primary'>Login</span></p>
          : <p>Create a new account? <span onClick={() => setState('Sign up')} className='cursor-pointer underline text-primary'>Click here</span> </p>
        }
      </div>

    </form>
  )
}

export default Login