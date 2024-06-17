import { CandidateJobTag } from "@/components/JobTag"
import Image from "next/image"
import Link from "next/link"
import JobItem from "../explore/jobItem"
import { auth } from "@/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default async function Dashboard() {

  const session = await auth();
  const user = session?.user

  const profileDocRef = doc(db, 'profile', user.id);
  const profileRes = (await getDoc(profileDocRef)).data()!;
  const appliedJobs = await profileRes.jobs

  return (
    <section className="max-w-7xl mx-auto">

      {/* Applied Jobs */}
      <div className="my-3">

        <h2 className="text-xl underline underline-offset-4 ml-1">Applied Jobs</h2>

        <div className="flex flex-col gap-2 my-3">
          {/* <JobItem companyName="Linear Co.Ltd" tag={<CandidateJobTag tag="Success" />}  jobType="Part-time" link="" location="Hlaing, Yangon" postedAt="2 days" salary="300,000" isVarified title="Full Stack Developer" locationType='Hybrid' /> */}

        {
          appliedJobs.map( async (i:string, j:number) => {

            const jobDocRef = doc(db, 'jobs', i);
            const jobRes = (await getDoc(jobDocRef)).data()!;

            return(
             <JobItem
              key={j} 
              companyName={jobRes.company} 
              tag={<CandidateJobTag tag="Success" />} 
              jobType="Part-time"
              link={`job/${i}`} 
              location={jobRes.location} 
              postedAt={jobRes.createdAt} 
              salary={jobRes.salary} 
              isVarified 
              title={jobRes.position} 
              locationType='Hybrid' 
            />
            // <p>{jobRes.by} {jobRes.company}</p>
          )})
        }

          <button className="text-center text-muted-foreground hover:text-foreground transition">...Load More...</button>
        </div>

      </div>
    </section>
  )
}
