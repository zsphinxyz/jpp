'use server'

import { auth } from "@/auth"
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth();
  const user = session?.user
    session?.user.role == 'candidate' ? 
    redirect('/edit/candidate') :
    redirect('/edit/employer')
  
}
