import { auth } from "@/auth"
import { EmployerJobTag } from "@/components/JobTag";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGlobe } from "react-icons/fa";
import JobItem from "../explore/jobItem";
import {Separator} from '@/components/ui/separator'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

export default async function Profile() {
    const session = await auth();
    const user = session ? session.user : {}
    return (
        <>
            <div className="flex w-full h-screen max-w-7xl mx-auto">

                {/* Right Section */}
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

                    {/* Format CV */}
                    <div className="py-80 text-center bg-muted my-3">
                        TODO Markdown Editor and Viewer
                    </div>

                    {/* Posted Jobs */}
                    <div className="my-3">

                        
                        <h2 className="text-xl underline underline-offset-4 ml-1">Available Jobs</h2>
                        <div className="flex flex-col gap-2 my-3">
                            <JobItem companyName="ZJPP" tag={<EmployerJobTag tag="Hired" />} jobType="Full-time" link="" location="Thaketa, Yangon" postedAt="2 hours" salary="200,000" title="Software Developer" locationType='Remote' />
                        </div>

                        <Separator className="my-10" />

                        <h2 className="text-xl underline underline-offset-4 ml-1">Posted Jobs</h2>
                        <div className="flex flex-col gap-2 my-3">
                            <JobItem companyName="ZJPP" tag={<EmployerJobTag tag="Hired" />} jobType="Full-time" link="" location="Thaketa, Yangon" postedAt="2 hours" salary="200,000" title="Software Developer" locationType='Remote' />
                            <JobItem companyName="ZJPP" tag={<EmployerJobTag tag="Open" />} jobType="Full-time" link="" location="Thaketa, Yangon" postedAt="2 hours" salary="200,000" title="Software Developer" locationType='Remote' />
                            <JobItem companyName="ZJPP" tag={<EmployerJobTag tag="Expired" />} jobType="Full-time" link="" location="Thaketa, Yangon" postedAt="2 hours" salary="200,000" title="Software Developer" locationType='Remote' />

                            <button className="text-center text-muted-foreground hover:text-foreground transition">... Load More ...</button>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}