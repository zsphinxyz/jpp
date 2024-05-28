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

  const jobDocRef = doc(db, 'jobs', params.id);
  const docSnap = await getDoc(jobDocRef);
  
  const res = (await getDoc(jobDocRef)).data()!;
  const candidates = res.candidates || ''
  const company = res.company

  
  const candidateJobRef = doc(db, 'profile', user.id);
  const appliedJobs = (await getDoc(candidateJobRef)).data()?.appliedJobs || []

  // console.log('AppliedJobs', Object.keys(appliedJobs[0]))
  // console.log('Filter', appliedJobs.filter( i => i == 'KXdCKSTBy6zxwQ4DbyyU' ))

  appliedJobs.map( (i:any) => {
    const [appliedJobId] = Object.keys(i)
    if (appliedJobId == params.id) {
      applied = true
    }
  })


  async function applyJob() {
    'use server'

    const jobValues = { [user.id]: {name: user.name, interview: false } };
    await setDoc(doc(db, 'jobs', params.id), {candidates: [...candidates, jobValues] }, {merge: true});

    const candidateValues = {[params.id]: {name: company, interview: false}}
    await setDoc(doc(db, 'profile', user.id), {appliedJobs: [...candidates, candidateValues] }, {merge: true});

  }

  revalidatePath('/')
  
  return (
    <main>
      {/* <pre>
        {
          JSON.stringify(docSnap.data(), null, 2)
        }
      </pre> */}

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">{res.position}</CardTitle>
          <CardDescription>
            {res.company} {' ● '}
            {res.location}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h1 className="font-bold mb-1">Description</h1>
          <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quaerat animi unde, facilis quis repudiandae autem hic rem qui repellendus excepturi rerum vel placeat itaque dolorum quas pariatur, nam earum.</p>
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
          <p className="w-full block text-sm text-muted-foreground text-right "> {res.candidates ? res.candidates.length : '0'} people applied</p>
          <Button type='submit' className="w-full block" disabled={applied}>{applied ? 'Applied' : 'Apply Now'}</Button>
        </CardFooter>
      </Card>


      
      <form action={applyJob}>
      </form>

    </main>
  )
}
