import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch";
import JobItem from "./jobItem";
import { EmployerJobTag, UrgerntTag } from "@/components/JobTag";

export default function Explore() {
  return (
    <section className="flex flex-col md:flex-row gap-3 lg:gap-5 p-3 max-w-7xl mx-auto">

      {/* Side Bar */}
      <div className="basis-1/3 border border-muted rounded-lg p-3 space-y-5">

        <Input type="search" placeholder="Search Jobs, Location or Company Name..." />

        <select name="" id="" className="w-full bg-background outline-none ring-1 ring-muted focus-within:ring-ring px-2 py-1">
          <option value="">All Location</option>
          <option value="" className="">Hlaing</option>
          <option value="" className="">Nay Pyi Taw</option>
          <option value="" className="">Hlaing</option>
          <option value="" className="">Hledan</option>
        </select>

        <select name="" id="" className="w-full bg-background outline-none ring-1 ring-muted focus-within:ring-ring px-2 py-1">
          <option value="">Any Jobs</option>
          <option value="" className="">Developer</option>
          <option value="" className="">Accountant</option>
          <option value="" className="">Engineer</option>
          <option value="" className="">Office</option>
        </select>

        <label className="select-none block"> 
          <Checkbox /> Remote Jobs
        </label>

        <label className="select-none block"> 
          <Switch /> Local
        </label>

        <Button className="w-full font-bold ">Search</Button>

      </div>

      {/* Feed */}
      <div className="basis-2/3">
        <h1 className="text-2xl font-bold mb-2">Jobs</h1>
        <div className="flex flex-col gap-3">
          <JobItem companyName="ZJPP" tag={<UrgerntTag />}  jobType="Full-time" link="" location="Thaketa, Yangon" postedAt="2 hours" salary="200,000"  title="Software Developer" locationType='Remote' />
          <JobItem companyName="Linear Co.Ltd"  jobType="Part-time" link="" location="Hlaing, Yangon" postedAt="2 days" salary="300,000" isVarified title="Full Stack Developer" locationType='Hybrid' />
        </div>
      </div>

    </section>
  )
}
