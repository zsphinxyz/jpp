
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react";
import Link from "next/link";
import { doc, setDoc } from 'firebase/firestore'
import { db } from "@/lib/firebase";
import { redirect } from "next/navigation";
import { auth } from "@/auth";


async function Role() {
  const session = await auth();
  const user = session?.user;

  const userID = user?.id!

  if (user.role != 'user') {
    redirect('/profile')
  }


  async function CandidateRole() {
    await setDoc(doc(db, 'users', userID), { role: 'candidate' }, { merge: true })

    await setDoc(doc(db, 'profile', userID), { name: user.name, email: user.email }, { merge: true });
  }

  async function EmployerRole() {
    await setDoc(doc(db, 'users', userID), { role: 'employer' }, { merge: true })

    await setDoc(doc(db, 'profile', userID), { name: user.name, email: user.email }, { merge: true });
  }

  return (
    <div className="flex items-center justify-center flex-col w-full h-dvh gap-1">
      <h1 className="text-3xl mb-3">I am a</h1>
      <div className="space-x-3">
        <Button size="lg" onClick={CandidateRole}> <Link href={'/edit/candidate'}> Candidate </Link></Button>
        <Button size="lg" onClick={EmployerRole}> <Link href={'/edit/employer'}> Employer </Link></Button>
      </div>
    </div>
  )
}

export default Role