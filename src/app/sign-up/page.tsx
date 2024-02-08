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

function SignUp() {
  return (
    <div className="flex items-center justify-center w-full h-[100dvh]">
      <Card className="shadow-sm shadow-muted min-w-[400px]">
        <CardHeader>
          <CardTitle className="text-center text-xl font-extrabold">Sign Up</CardTitle>
          <CardDescription className="text-center">Create an account with Google or with Email.</CardDescription>
        </CardHeader>
        <CardContent>
          
          <div>
            <div className="flex items-center justify-center">
              <Button variant='outline' size="lg"> <FcGoogle className="mr-2 text-xl" /> Login with Google</Button>
            </div>
          </div>

          <div className="flex items-center">
            <Separator className="flex-1 my-5" />
            <p className="text-sm text-center px-3">Or</p>
            <Separator className="flex-1" />
          </div>

          <form>
            <div className="space-y-4">

              <div className="flex flex-col gap-2">
                <Label htmlFor="username">User Name</Label>
                <Input id="username" autoFocus name="username" placeholder="Enter User Name ..." />
              </div>


              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" placeholder="Enter Your Email ..." />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" placeholder="Enter Your Password ..." />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="cpassword">Comfirm Password</Label>
                <Input id="cpassword" name="cpassword" placeholder="Enter Your Password Again ..." />
              </div>

              <div className="flex flex-col gap-2">
                <Button asChild className="cursor-pointer mt-3">
                  <Input type='submit' name="submit" value="Create Account" />
                </Button>
              </div>

            </div>
          </form>

        </CardContent>
        <CardFooter className="text-sm text-center w-full flex justify-center">
          Already have an acount?<Link href='/sign-in' className="text-blue-500 underline ml-1">Login</Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default SignUp