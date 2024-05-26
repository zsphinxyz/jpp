'use client'

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { db } from "@/lib/firebase"
import { employerSchema, TEmployerSchema } from "@/lib/zObjects"
import { zodResolver } from "@hookform/resolvers/zod"
import { doc, setDoc } from "firebase/firestore"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"


function Employer() {

  const session = useSession();
  const router = useRouter()

  const form = useForm<TEmployerSchema>({
    resolver: zodResolver(employerSchema),
    defaultValues: {
      name: '',
      email: '',
      location: ''
    }
  });

  async function onSubmit(values:TEmployerSchema) {
    await setDoc(doc(db, 'profile', session.data?.user?.id!), values, {merge: true});
    router.push('/companyProfile')
  }

  return (
    <section>
        <Card className="shadow-sm shadow-muted w-[400px] mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-xl font-extrabold">Employer</CardTitle>
          <CardDescription className="text-center">Enter your infos</CardDescription>
        </CardHeader>
        <CardContent>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="off" className="space-y-3">

              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Company Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Company Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='location'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Company Location" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full mt-2">Submit</Button>

            </form>
          </Form>
         
        </CardContent>
        <CardFooter className="text-sm text-center w-full flex justify-center">
          Footer
        </CardFooter>
      </Card>
    </section>
  )
}

export default Employer