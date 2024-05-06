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
import { collection, doc, getDoc, getDocFromCache, getDocs, limit, orderBy, query, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";


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
            <Image src={user?.image!} priority width={150} height={150} alt='profile' className="object-cover border-muted border-2 bg-muted" />
            <div className="flex gap-3 flex-col">
              <h1 className="text-5xl font-bold">{user?.name}
                {/* <span className="text-lg text-muted-foreground block mt-1 font-normal">{user?.email}</span> */}
              </h1>
              <div className="flex gap-1">
                {
                  !!data && data.tag && data.tag.split(',').map((i: string) => (
                    <span key={i} aria-label={i} title={i} className="text-muted-foreground bg-muted rounded-full w-fit px-2 py-1 text-sm cursor-default capitalize">{i}</span>
                  ))
                }
              </div>
            </div>
          </div>

          {/* Format CV */}
          {/* <div className="py-80 text-center bg-muted my-3">
            TODO Markdown Editor and Viewer
          </div> */}

          {
            !!data && Object.entries(data).sort().map((i: any) => {
              if (i[0] == 'name') {
                return;
              }
              return (
                <p className="flex " key={i[0]}>
                  <span className="basis-32 capitalize">{i[0]}</span>
                  <span className="basis-full">{i[1].toString()}</span>
                </p>
              )
            })
          }

          <div className="flex">

            <p className="flex bg-muted/30 py-2 border border-muted/40 px-3 my-2 rounded-sm hover:bg-muted/40 min-w-[300px] max-w-full">
              <span className=""></span>
            </p>

          </div>


        </div>

      </div>
      {
        JSON.stringify(user, null, 4)
      }
    </section>
  )
}