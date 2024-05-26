'use client'

import { useForm } from "react-hook-form"
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
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { jobPostSchema, TJobPostSchema } from "@/lib/zObjects"
import { addDoc, collection, doc, setDoc } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
  

export default function Create() {

    const router = useRouter();
    const session = useSession();

    const form = useForm({
        resolver: zodResolver(jobPostSchema),
        defaultValues: {
            job: '',
            salary: '',
            location: ''
        }
    })

    async function onSubmit(values:TJobPostSchema) {
        try {
            await addDoc(collection(db, 'jobs'), {...values, by: session.data?.user.id!, createdAt: Date.now()})  
            router.push('/companyProfile')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Card className="max-w-xl mx-auto">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>

        <Form {...form}>
            <form className='space-y-3' onSubmit={form.handleSubmit(onSubmit)} autoComplete="off">

                <FormField
                    control={form.control}
                    name="job"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Job Position</FormLabel>
                            <FormControl>
                                <Input placeholder="Accountant, Office Staff ..." {...field} />
                            </FormControl>
                            {/* <FormDescription>This is your public display name.</FormDescription> */}
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="salary"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Salary Range</FormLabel>
                            <FormControl>
                                <Input placeholder="300,000 - 500,000" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                                <Input placeholder="Location" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                
                <Button type="submit" className="w-full">Submit</Button>
            </form>
        </Form>

        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>


    )
}
