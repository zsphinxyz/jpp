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
import Link from "next/link"


function Employer() {
  return (
    <section>
        <Card className="shadow-sm shadow-muted min-w-[400px]">
        <CardHeader>
          <CardTitle className="text-center text-xl font-extrabold">Employer</CardTitle>
          <CardDescription className="text-center">Create an account with Google or with Email.</CardDescription>
        </CardHeader>
        <CardContent>
          
          <form>
            <div className="space-y-4">

              <div className="flex flex-col gap-2">
                <Label htmlFor="username">Company Name</Label>
                <Input id="username" autoFocus name="username" placeholder="Enter Company Name ..." />
              </div>


              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Company Email</Label>
                <Input id="email" name="email" placeholder="Enter Your Company Email ..." />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input type="tel" id="phone" name="phone" placeholder="Enter Your Phone Number ..." />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" name="location" placeholder="Enter Your location ..." />
              </div>

              <div className="flex flex-col gap-2">
                <Button asChild className="cursor-pointer mt-3">
                  <Input type='submit' name="submit" value="Submit" />
                </Button>
              </div>

            </div>
          </form>

        </CardContent>
        <CardFooter className="text-sm text-center w-full flex justify-center">
          Footer
        </CardFooter>
      </Card>
    </section>
  )
}

export default Employer