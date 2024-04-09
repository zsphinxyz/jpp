'use client'
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { useState } from "react"


function Role() {
  const [role, setRole] = useState('');
  return (
    <div className="flex items-center justify-center flex-col w-full h-[100dvh] gap-1">
      {role}
      <h1 className="text-3xl mb-3">I am a</h1>
    <div className="space-x-3">
      <Link href={'/role/candidate'}> <Button size="lg">  Candidate</Button> </Link>
      <Link href={'/role/employer'}><Button size="lg"> Employer </Button></Link>
    </div>


    </div>
  )
}

export default Role