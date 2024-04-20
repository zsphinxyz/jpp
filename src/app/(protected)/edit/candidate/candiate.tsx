'use client'

import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { type TCandidateSchema, candidateSchema } from "@/lib/zObjects"
import Link from "next/link"
import { useForm } from "react-hook-form"
import {zodResolver} from '@hookform/resolvers/zod'
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { Select, SelectItem, SelectContent, SelectGroup, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { IoInformationCircle } from "react-icons/io5";
import Uploader from '@/components/uploader'
import UploadcareImage from '@uploadcare/nextjs-loader';
import { collection, doc, getDoc, getDocs, query, setDoc } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { useRouter } from "next/navigation"


export default function Candidate() {
  const session = useSession();
  const router = useRouter()
  // const [dbdata, setDbdata] = useState<any>()


  // async function getDataFromDb() {
  //   const docRef = doc(db, 'profile', '5WrNx81gijmQIyyrKpRb');
  //   const docSnap = await getDoc(docRef)
  //   const data = docSnap.data()
  //   console.log('Data', data)
  //   setDbdata(data)
  //   return data
  // }

  // console.log('dbdata', dbdata)
  
  const form = useForm<TCandidateSchema>({
    resolver: zodResolver(candidateSchema),
    defaultValues: {
      name: '',
      email: '',
      dob: '',
      phone: '',
      address: '',
      experience: '',
      degree: '',
      // about: '',
      // resume: undefined,
    }
  });

  async function onSubmit(values: TCandidateSchema) {
    console.log(values);
    await setDoc(doc(db, 'profile', '5WrNx81gijmQIyyrKpRb'), values, {merge: true})
    router.push('/profile')
  }


  return (
    <section>
        <Card className="shadow-sm shadow-muted w-[400px] my-5">
        <CardHeader>
          <CardTitle className="text-center text-xl font-extrabold">Candidate Profile</CardTitle>
          <CardDescription className="text-center tracking-tighter">All your data is private by default. When you apply a job, the company you applied can see your profile page.</CardDescription>
        </CardHeader>
        <CardContent> 

            {/* <Uploader /> */}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} 
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-3">

                <FormField
                  control={form.control}
                  name="dob"
                  render={({ field }) => (
                    <FormItem className="basis-1/2">
                      <FormLabel>Date of Birth</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem className="basis-1/2">
                      <FormLabel>Gender</FormLabel>

                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Select Gender' />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Gender</SelectLabel>
                            <SelectItem value='male'>Male</SelectItem>
                            <SelectItem value='female'>Female</SelectItem>
                            <SelectItem value='other'>Other</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="09 xxx xxx xxx" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="...Street, Township" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="degree"
                render={({ field }) => (
                  <FormItem className="py-3">
                    <FormLabel className="w-full flex">Degrees<span className="text-xs text-muted-foreground ml-auto text-right"><IoInformationCircle className='inline' />seperate by comma (,)</span></FormLabel>
                    <FormControl>
                      <Textarea {...field} placeholder="Degree 1, Degree 2,..." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="w-full flex">Experience <span className="text-xs text-muted-foreground ml-auto text-right"><IoInformationCircle className='inline' />seperate by comma (,)</span></FormLabel>
                    <FormControl>
                      <Textarea {...field} placeholder="Experience 1, Experience 2,..." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* <FormField
                control={form.control}
                name="about"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>About Me </FormLabel>
                    <FormControl>
                      <Textarea {...field} placeholder="Type about you in here." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              
              {/* <FormField
                control={form.control}
                name="resume"
                render={({ field }) => (
                  <FormItem onChange={field.onChange}>
                    <FormLabel>Resume <span className="text-xs text-muted-foreground">PDF file</span></FormLabel>
                    <FormControl>
                      <Input type="file" placeholder="Upload your Resume" {...fileRef} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
                              
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
