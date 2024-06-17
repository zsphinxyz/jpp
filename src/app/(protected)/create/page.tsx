import { auth } from "@/auth";
import JobPostForm from "./jobPostForm";
import { redirect } from "next/navigation";

export default async function page() {
    const session = await auth();
    const role = session?.user.role

    if (role != 'employer') {
        redirect('/')
    }

  return (
    <section className="">
      <JobPostForm />
    </section>
  )
}
