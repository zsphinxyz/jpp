import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch";
import JobItem from "./jobItem";
import { EmployerJobTag, UrgerntTag } from "@/components/JobTag";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { auth } from "@/auth";

export default async function Explore() {
  const session = await auth();
  const user = session?.user

  const jobRef = collection(db, 'jobs')
  const q = query(jobRef, limit(3)); 
  let jobPosts:any[] = [];
    
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach( (doc) => {
    jobPosts = [...jobPosts, {...doc.data(), jobId: doc.id}]
    // console.log(doc.id, '=>', doc.data())
  })

  return (
    <section className="flex flex-col md:flex-row gap-3 lg:gap-5 p-3 max-w-7xl mx-auto">

      {/* Side Bar */}
      <div className="basis-1/3 border border-muted rounded-lg p-3 space-y-5">

        <Input type="search" placeholder="Search Jobs, Location or Company Name..." />

        <select name="" id="" className="w-full bg-background outline-none ring-1 ring-muted focus-within:ring-ring px-2 py-1">
          <option value="">All Location</option>
          <option value="" className="">Hlaing</option>
          <option value="" className="">Nay Pyi Taw</option>
          <option value="" className="">Hlaing</option>
          <option value="" className="">Hledan</option>
        </select>

        <select name="" id="" className="w-full bg-background outline-none ring-1 ring-muted focus-within:ring-ring px-2 py-1">
          <option value="">Any Jobs</option>
          <option value="" className="">Developer</option>
          <option value="" className="">Accountant</option>
          <option value="" className="">Engineer</option>
          <option value="" className="">Office</option>
        </select>

        <label className="select-none block"> 
          <Checkbox /> Remote Jobs
        </label>

        <label className="select-none block"> 
          <Switch /> Local
        </label>

        <Button className="w-full font-bold ">Search</Button>

      </div>

      {/* Feed */}
      <div className="basis-2/3">
        <h1 className="text-2xl font-bold mb-2">Jobs</h1>
        <div className="flex flex-col gap-3">
          {/* <JobItem companyName="ZJPP" tag={<UrgerntTag />}  jobType="Full-time" link="" location="Thaketa, Yangon" postedAt="2 hours" salary="200,000"  title="Software Developer" locationType='Remote' />
          <JobItem companyName="Linear Co.Ltd"  jobType="Part-time" link="" location="Hlaing, Yangon" postedAt="2 days" salary="300,000" isVarified title="Full Stack Developer" locationType='Hybrid' /> */}
        
        {
          jobPosts.map( (i,j):any => (
            <JobItem key={j} companyName={i.company} jobType="Full-time" link={'job/'+i.jobId} location={i.location} postedAt={new Date(parseInt(i.createdAt)).toDateString()} salary={i.salary} isVarified title={i.position} locationType='on Site' />
            
          ))
        }
          
        
        </div>
      </div>

    </section>
  )
}
