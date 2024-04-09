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


export default async function Profile() {
  const session = await auth();
  const user = session ? session.user : {}
  return (
    <section className="max-w-7xl mx-auto">
      <pre>
        {
          JSON.stringify(session, null, 2)
        }
      </pre>
      <div className="flex w-full h-screen max-w-7xl mx-auto">



        {/* Right Section */}
        <div className="w-full p-3">

          <div className="flex gap-2 items-center">
            <Image src={user?.image!} width={150} height={150} alt='profile' className="object-cover border-muted border-2 bg-muted" />
            <div className="flex gap-2 flex-col">
              <h1 className="text-5xl font-bold">{user?.name}
                <span className="text-lg text-muted-foreground block mt-1 font-normal">{user?.email}</span></h1>
              <span className="text-muted-foreground bg-muted rounded-full w-fit px-2 py-1 text-sm">Software Developer</span>
            </div>
          </div>

          {/* Format CV */}
          <div className="py-80 text-center bg-muted my-3">
            TODO Markdown Editor and Viewer
          </div>

        </div>

      </div>
    </section>
  )
}