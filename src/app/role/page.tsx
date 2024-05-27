
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { doc, setDoc } from 'firebase/firestore'
import { db } from "@/lib/firebase";
import { auth } from "@/auth";
import { redirect } from "next/navigation";


async function Role() {
  // const session = await auth();
  // const user = session?.user;

  const session = await auth()
  const user = session?.user
  const userID = user?.id!

  if(user?.role != 'user') {
    user?.role == 'candidate' ? 
    redirect('/profile') :
    redirect('/companyProfile')
  }


  async function CandidateRole() {
    'use server'
    await setDoc(doc(db, 'users', userID), { role: 'candidate' }, { merge: true })

    await setDoc(doc(db, 'profile', userID), { name: user.name, email: user.email }, { merge: true });
  }

  async function EmployerRole() {
    'use server'
    await setDoc(doc(db, 'users', userID), { role: 'employer' }, { merge: true })

    await setDoc(doc(db, 'profile', userID), { name: user.name, email: user.email }, { merge: true });
  }

  return (
    <div className="flex items-center justify-center flex-col w-full h-dvh gap-1">
      <h1 className="text-3xl mb-3">I am a</h1>
      <div className="space-x-3">

        <form action={CandidateRole} className="inline">
          <Button size="lg" type="submit" onSubmit={CandidateRole}> <Link href={'/edit/candidate'}> Candidate </Link></Button>
        </form>

        <form action={EmployerRole} className="inline">
          <Button size="lg" type="submit" onSubmit={EmployerRole}> <Link href={'/edit/employer'}> Employer </Link></Button>
        </form>
        
      </div>
    </div>
  )
}

export default Role