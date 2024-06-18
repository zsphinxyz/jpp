import { auth } from "@/auth";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import JobItem from "../explore/jobItem";
import { CandidateJobTag } from "@/components/JobTag";
import { Suspense } from "react";
import { CLIENT_RENEG_LIMIT } from "tls";


export default async function Employer() {

  const session = await auth();
  const user = session?.user

  const q = query(collection(db, 'jobs'), where('by', '==', user.id))
  const querySnapshot = await getDocs(q)
  
  let jobs:any[] = []
  querySnapshot.forEach((doc) => {
    jobs = [...jobs, {...doc.data(), id: doc.id}]
  });

  console.log(jobs)
  
  return (
    <section className="flex gap-3 flex-col p-3">
      {
        jobs.map( (data, i) => (
          <Suspense key={i} fallback={'Loading...'}>
            <JobItem
              companyName={data.company} 
              tag={<CandidateJobTag tag="Success" />} 
              jobType="Part-time"
              link={`job/${data.id}`} 
              location={data.location} 
              postedAt={data.createdAt} 
              salary={data.salary} 
              isVarified 
              title={data.position} 
              locationType='Hybrid' 
              />
          </Suspense>
        ))
      }
    </section>
  )
}
