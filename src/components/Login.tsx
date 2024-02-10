'use client'

import { Button } from './ui/button'
import {signIn, signOut} from 'next-auth/react'
import { useSession } from 'next-auth/react'
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link';


function Login() {
  const SIGNINURL = '/profile';
  const SIGNOUTURL = '/'
  const session = useSession();
  // console.log(session)
  return (
      <div className="flex items-center justify-center">
        {
          !session || session.status == 'unauthenticated' ? 
          <Button 
            className='bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-400 dark:hover:bg-emerald-500  transition-all font-bold'
            onClick={() => (signIn('google', {callbackUrl: SIGNINURL})) }
          >
            Login
          </Button>
          :
            session.status == 'loading' ?
              <div className='w-8 h-8 bg-muted border-foreground border-2 rounded-full' />
              :
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger className='outline-none'>
                    <Image src={session.data?.user?.image!} width={32} height={32} priority alt="Profile" className='rounded-full border-2 border-foreground' />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href="/profile" className='w-full'>Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/dashboard" className='w-full'>Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>
                      <Button variant='secondary' size='sm' onClick={() => signOut({callbackUrl: SIGNOUTURL})} className='w-full'>
                        Log Out
                      </Button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>

        }
      </div>
  )
}

export default Login