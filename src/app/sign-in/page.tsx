import { signIn } from "@/auth"
import Login from "@/components/Login"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { FcGoogle } from "react-icons/fc";


function SignIn() {

  async function loginWithGoogle() {
    'use server'
    await signIn('google')
  }
  
  return (
    <div className="flex items-center justify-center w-full h-[100dvh]">

      <form action={loginWithGoogle}>
        <Button><FcGoogle className="mr-2"/> Login with Google</Button>
      </form>

    </div>
  )
}

export default SignIn