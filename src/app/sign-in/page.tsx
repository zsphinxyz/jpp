import GoogleLogin from "@/components/Login"
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

function SignIn() {
  return (
    <div className="flex items-center justify-center w-full h-[100dvh]">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-xl font-extrabold">Login</CardTitle>
          <CardDescription>Enter your email and passwords to your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="space-y-4">

              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" autoFocus name="email" placeholder="Enter your email ..." />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" placeholder="Enter Your Password ..." />
              </div>

              <div className="flex flex-col gap-2">
                <Button asChild className="cursor-pointer mt-3">
                  <Input type='submit' name="submit" value="Submit" />
                </Button>
              </div>

            </div>
          </form>

          <div>
              <div className="flex items-center my-5">
                <Separator className="flex-1 "/>
                <p className="text-sm text-center px-3">Or</p>
                <Separator  className="flex-1"/>
              </div>

              <GoogleLogin />
          </div>


        </CardContent>
        <CardFooter className="text-sm text-center w-full flex justify-center">
          Dont have an account?<Link href='/sign-up' className="text-blue-500 underline ml-1">Sign Up</Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default SignIn