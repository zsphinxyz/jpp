'use client'

import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore'
import { db } from "@/lib/firebase";
import {useRouter} from 'next/navigation'

interface TUser {
  email: string,
  id: string,
  image: string,
  name: string,
  role: string
}


function Role() {
  const session = useSession();
  const user = session?.data?.user;
  // const router = useRouter();

  const userID = session?.data?.user?.id!

  // if (session.data?.user.id != 'user') {
  //   router.push('/profile')
  // }

  async function CandidateRole() {
    await setDoc(doc(db, 'users', userID), { role: 'candidate' }, { merge: true })

    await setDoc(doc(db, 'profile', userID), { name: user.name, email: user.email }, { merge: true });
  }

  async function EmployerRole() {
    await setDoc(doc(db, 'users', userID), { role: 'employer' }, { merge: true })

    await setDoc(doc(db, 'profile', userID), { name: user.name, email: user.email }, { merge: true });
  }

  return (
    <div className="flex items-center justify-center flex-col w-full h-[100dvh] gap-1">
      <h1 className="text-3xl mb-3">I am a</h1>
      <div className="space-x-3">
        <Button size="lg" onClick={CandidateRole}> <Link href={'/edit/candidate'}> Candidate</Link></Button>
        <Button size="lg" onClick={EmployerRole}> <Link href={'/edit/employer'}> Employer </Link></Button>
      </div>

    </div>
  )
}

export default Role