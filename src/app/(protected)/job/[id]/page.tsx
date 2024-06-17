import { auth } from "@/auth";
import { Button } from "@/components/ui/button"
import { db } from "@/lib/firebase"
import {  doc, getDoc, setDoc } from "firebase/firestore"
import { revalidatePath } from "next/cache";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default async function Job({params}:{params: {id: string}}) {
  const session = await auth();
  const user = session?.user;
  let applied = false

    // fetch data from jobs database
  const jobDocRef = doc(db, 'jobs', params.id);
  const jobRes = (await getDoc(jobDocRef)).data()!;
  
    // fetch data from profile database
  const candidateJobRef = doc(db, 'profile', user.id);
  const profilejobRes = (await getDoc(candidateJobRef)).data()!

    // fetch data from app database
  // const appRef = doc(db, 'app', params.id);
  // const appRes = (await getDoc(candidateJobRef)).data()!

  profilejobRes.jobs.map( (i:string) => {
    if (i == params.id) {
      applied = true
    }
  })

  // appliedJobs && appliedJobs.map( (i:any) => {
  //   const [appliedJobId] = Object.keys(i)
  //   if (appliedJobId == params.id) {
  //     applied = true
  //   }
  // })


  async function applyJob() {
    'use server'

    const countRes = jobRes.count + 1
    await setDoc(doc(db, 'jobs', params.id), {count: countRes}, {merge: true});  // add one to count

    await setDoc(doc(db, 'profile', user.id), {jobs: [...profilejobRes.jobs || '', params.id] }, {merge: true});  // add this job id into profile job list

    const appValues =  {name: user.name, interview: false}
    await setDoc(doc(db, 'app', params.id), {[user.id]: appValues }, {merge: true});
  }

  revalidatePath('/')
  
  return (
    <main>
      <pre>
        {/* {
          JSON.stringify(jobRes, null, 2)
        } */}
      </pre>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">{jobRes.position}</CardTitle>
          <CardDescription>
            {jobRes.company} {' ● '}
            {jobRes.location}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h1 className="font-bold mb-1">Description</h1>
          <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quaerat animi unde, facilis quis repudiandae autem hic rem qui repellendus excepturi rerum vel placeat itaque dolorum quas pariatur, nam earum...</p>
          <h3 className="font-bold mt-3">Requirements</h3>
          <ol className="list-decimal ml-4 my-2 text-sm *:p-1">
            <li>Req 1</li>
            <li>Req 2</li>
            <li>Req 3</li>
            <li>Req 4</li>
            <li>Req 5</li>
          </ol>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <p className="w-full block text-sm text-muted-foreground text-right "> {jobRes.count} people applied</p>
          <form action={applyJob} className="w-full">
            {
              user.role != 'employer' && 
              <Button type='submit' className="w-full block" disabled={applied}>{applied ? 'Applied' : 'Apply Now'}</Button>
            }
          </form>
        </CardFooter>
      </Card>


      

    </main>
  )
}
