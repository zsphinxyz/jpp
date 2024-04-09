import { CandidateJobTag } from "@/components/JobTag"
import Image from "next/image"
import Link from "next/link"
import JobItem from "../explore/jobItem"

function Dashboard() {
  return (
    <section className="max-w-7xl mx-auto">

      {/* Applied Jobs */}
      <div className="my-3">

        <h2 className="text-xl underline underline-offset-4 ml-1">Applied Jobs</h2>

        <div className="flex flex-col gap-2 my-3">
          <JobItem companyName="Linear Co.Ltd" tag={<CandidateJobTag tag="Success" />}  jobType="Part-time" link="" location="Hlaing, Yangon" postedAt="2 days" salary="300,000" isVarified title="Full Stack Developer" locationType='Hybrid' />
          <JobItem companyName="Linear Co.Ltd" tag={<CandidateJobTag tag="In-Progress" />}  jobType="Part-time" link="" location="Hlaing, Yangon" postedAt="2 days" salary="300,000" isVarified title="Full Stack Developer" locationType='Hybrid' />
          <JobItem companyName="ZJPP" tag={<CandidateJobTag tag="Rejected" />}  jobType="Full-time" link="" location="Thaketa, Yangon" postedAt="2 hours" salary="200,000"  title="Software Developer" locationType='Remote' />


          <button className="text-center text-muted-foreground hover:text-foreground transition">...Load More...</button>
        </div>

      </div>
    </section>
  )
}

export default Dashboard