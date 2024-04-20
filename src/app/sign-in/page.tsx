// 'use client'

import { signIn } from "@/auth"
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc";

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { useState } from "react";
import { cn } from "@/lib/utils";


function SignIn() {

  async function loginWithGoogle() {
    'use server'
    await signIn('google')
  }

  // const [role, setRole] = useState('C')
  // console.log(role)
  
  return (
    <>
      <div className="flex items-center flex-col justify-center w-full h-[100dvh]">

        <form action={loginWithGoogle} className="min-w-32">
        {/* <form className="min-w-32"> */}

          {/* <div className="mb-3 flex gap-2 text-sm">
            <button type="button" className={cn("ring-1 p-2 hover:bg-muted transition basis1/2 ring-muted cursor-pointer text-muted-foreground", role == 'C' && 'opacity-100 bg-foreground text-background hover:bg-foreground')} onClick={() => setRole('C')}>Candidate</button>
            <button type="button" className={cn("ring-1 p-2 hover:bg-muted transition basis1/2 ring-muted cursor-pointer text-muted-foreground", role == 'E' && 'opacity-100 bg-foreground text-background hover:bg-foreground')} onClick={() => setRole('E')}>Employer</button>
          </div> */}

          <Button className="w-full">
            <FcGoogle className="mr-2" /> Login with Google
          </Button>
        </form>

          {/* <p className="text-sm text-center text-muted-foreground mt-5">You are creating an account as a {role == 'E' ? 'Employer' : 'Candidate'}.</p> */}

      </div>
    </>
  )
}

export default SignIn