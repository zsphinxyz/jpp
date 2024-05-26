import { auth } from "@/auth"
import Image from "next/image";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default async function Profile() {
  const session = await auth();
  const user = session?.user

  async function getData() {
    try {
      const docRef = doc(db, 'profile', user?.id!);
      const docRes = await getDoc(docRef)
      const data: any = docRes.data()
      return data;
      
    } catch (err) {

      await setDoc(doc(db, 'profile', user?.id!), {name: user?.name, email: user?.email}, {merge: true});

      const docRef = doc(db, 'profile', user?.id!);
      const docRes = await getDoc(docRef)
      const data: any = docRes.data()
      return data;
    }
  }
  const data = await getData();

  return (
    <section className="max-w-7xl mx-auto">

      <div className="flex w-full h-screen max-w-7xl mx-auto">

        {/* Right Section */}
        <div className="w-full p-3">

          <div className="flex gap-2 items-center">
            <Suspense fallback={'Loading...'}>
              <Image src={user?.image! || '/placeholder.png'} priority width={150} height={150} alt='profile' className="size-[150px] object-cover border-muted border-2 bg-muted" />
            </Suspense>
            <div className="flex gap-3 flex-col">
              <h1 className="text-5xl font-bold">{user?.name}
                <span className="text-lg text-muted-foreground block mt-1 font-normal">{user?.email}</span>
              </h1>
              
              <div className="flex gap-1">
                <Suspense fallback={<Skeleton className="h-2 min-w-32 max-w-full" />}>
                  {
                    data.tag ? data.tag.split(',').map((i: string) => (
                      <span key={i} aria-label={i} title={i} className="text-muted-foreground bg-muted rounded-full w-fit px-2 py-1 text-sm cursor-default capitalize">{i}</span>
                    ))
                    :
                    ''
                  }
                </Suspense>
              </div>
            </div>
          </div>

          {/* Format CV */}
          {/* <div className="py-80 text-center bg-muted my-3">
            TODO Markdown Editor and Viewer
          </div> */}

          <div className="flex flex-col gap-1 my-2">
            <Info c1="Name" c2={data.name} />
            <Info c1="Email" c2={data.email} />
            <Info c1="Gender" c2={data.gender} />
            <Info c1="Date of Birth" c2={data.dob} />
            <Info c1="Experience" c2={data.experience} />
            <Info c1="Degree" c2={data.degree} />
            <Info c1="Phone Number" c2={data.phone} />
            <Info c1="Address" c2={data.address} />
          </div>


        </div>

      </div>
      {
        JSON.stringify(user, null, 4)
      }
    </section>
  )
}

function Info({c1, c2}: {c1:string, c2:string}) {
  return(
    <div className="flex gap-5 bg-muted/30 py-2 border border-muted/40 px-3 rounded-sm hover:bg-muted/40 min-w-[300px] max-w-full">
      <p className="w-36">{c1}</p>
      <p className="">{c2 ? c2 : <span className="text-muted-foreground/50 select-none">Not provided</span> }</p>
    </div>
  )
}
