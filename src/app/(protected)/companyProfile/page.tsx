import { auth } from "@/auth"
import { EmployerJobTag } from "@/components/JobTag";
import Image from "next/image";
import Link from "next/link";
import JobItem from "../explore/jobItem";
import {Separator} from '@/components/ui/separator'
import { Button } from "@/components/ui/button";
import { query, orderBy, limit, collection, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function Profile() {
    const session = await auth();
    const user =  session?.user

    if (user.role != 'employer') {
        redirect('/profile')
    }

    let jobPosts:any= []

    const jobRef = collection(db, 'jobs')
    const q = query(jobRef, where('by', '==', user.id)); 
    
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach( (doc) => {
        jobPosts = [...jobPosts, {...doc.data(), jobId: doc.id}]
        // console.log(doc.id, '=>', doc.data())
    } )
    
    revalidatePath('/')

    return (
        <>
            <div className="flex w-full h-screen max-w-7xl mx-auto">

                <div className="p-3 w-full">

                    {/* Cover Photo */}
                    <div className="w-full aspect-[16/5] bg-muted -mb-20 relative">
                        <Image src='/placeholder.png' alt="Placeholder" width={240} height={240} className="w-full h-full object-cover pointer-events-none " />
                        <div className="w-full h-full bg-gradient-to-b from-transparent to-black/80 absolute inset-0 " />
                    </div>

                    <div className="flex gap-2 items-center p-3 z-10 isolate">
                        <Image src={user?.image!} width={150} height={150} alt='profile' className="object-cover border-muted border-2 bg-muted" />
                        <div className="flex gap-1 flex-col">
                            <h1 className="text-5xl font-bold">{user?.name}</h1>
                            <span className="text-lg text-muted-foreground block font-normal">{user?.email}</span>
                            <span className="text-muted-foreground bg-muted rounded-full w-fit px-2 py-1 text-sm">Company</span>
                        </div>
                    </div>

                    <div className="">
                        <p className="flex bg-muted/30 py-2 border border-muted/40 px-3 my-2 rounded-sm hover:bg-muted/40 min-w-[300px] max-w-[420px]">
                            <span className="basis-32 capitalize">Location</span>
                            <span className="grow">No.322, Saint Paul St, Bhamingham, United Kingdom</span>
                        </p>
                    </div>

                    <Button className="my-5 font-bold"><Link href='/create'>Create A Post</Link></Button>
                    
                    <section className="space-y-3">
                        {
                            jobPosts.map( (i:any) => (
                                <JobItem key={i.jobId} companyName={i.company} tag={<EmployerJobTag tag="Hired" />} jobType="Full-time" link={`job/${i.jobId}`} location={i.location} postedAt={new Date(parseInt(i.createdAt)).toDateString()} salary={i.salary} title={i.position} locationType='Remote' />
                            ))
                        }
                    </section>

                    {/* Format CV */}
                    {/* <div className="py-80 text-center bg-muted my-3">
                        TODO Markdown Editor and Viewer
                    </div> */}

                    <button className="text-center mt-3 w-full text-muted-foreground hover:text-foreground transition-colors">... Load More ...</button>
                    <Separator className="my-3" />



                </div>

            </div>
        </>
    )
}