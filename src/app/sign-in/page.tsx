import { auth, signIn } from "@/auth"
import { Button } from "@/components/ui/button"
import { db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { FcGoogle } from "react-icons/fc";

function SignIn() {

  async function loginWithGoogle() {
    'use server'
    await signIn('google')
  }

  
  return (
    <>
      <div className="flex items-center flex-col justify-center w-full h-[100dvh]">

        <form action={loginWithGoogle} className="min-w-32">
          <Button className="w-full">
            <FcGoogle className="mr-2" /> Login with Google
          </Button>
        </form>

      </div>
    </>
  )
}

export default SignIn