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

const SIGNOUTURL = '/role'

export default function Login() {
  const session = useSession();
  const user = session.data?.user

  // async function handleLogin() {
  //   signIn('google', {callbackUrl: SIGNINURL})
  // }
  
  // console.log(session.data?.user)
  return (
      <div className="flex items-center justify-center">
        {
          !user ? 
          <Button 
            className='bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-400 dark:hover:bg-emerald-500  transition-all font-bold'
          >
            <Link href='/sign-in'>
              Login
            </Link>
          </Button>
          :
            <DropDown user={user} />
        }
      </div>
  )
}


function DropDown({ user }: any) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger title={user.email} className='outline-none'>
          <Image src={user?.image!} width={32} height={32} priority alt="Profile" className='rounded-full border-2 border-foreground' />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={user.role == 'candidate' ? "/profile" : '/companyProfile'} prefetch={true} className='w-full'>Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/dashboard" prefetch={true} className='w-full'>Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href='/explore' prefetch={true} className='w-full'>Explore</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href='/edit' prefetch={true} className='w-full'>Setting</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button variant='secondary' size='sm' onClick={() => signOut({ callbackUrl: SIGNOUTURL })} className='w-full'>
              Log Out
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
