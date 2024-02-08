'use client'

import React from 'react'
import { Button } from './ui/button'
import {signIn} from 'next-auth/react'

function Login() {
  return (
      <div className="flex items-center justify-center">
        <Button 
          className='bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-400 dark:hover:bg-emerald-500  transition-all font-bold'
          onClick={() => (signIn('google', {callbackUrl: 'http://localhost:3000/dashboard'})) }
        >
            Login
        </Button>
      </div>
  )
}

export default Login