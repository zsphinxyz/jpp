import { LiaMoneyBillSolid } from "react-icons/lia";
import { MdLocationPin } from "react-icons/md";
import { BiSolidBriefcase } from "react-icons/bi";
import { LuClock9 } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import { IoIosCheckmarkCircle } from "react-icons/io";

type JobItem = {
    link: string,
    img?: string,
    title: string,
    companyName: string,
    salary: string,
    jobType: string,
    location: string,
    locationType: string,
    tag?: React.ReactNode,
    postedAt: string,
    isVarified?: boolean
}

export default function JobItem({link,img,title,companyName,salary,jobType,location,locationType,tag,postedAt, isVarified}:JobItem) {
  return (
      <Link href={link} className="w-full bg-muted/50 rounded-xl border-muted border p-2 hover:bg-muted/70 flex gap-3">
        <div className="bg-white rounded-l-[10px]">
            {
             img ?
                <Image src={img} alt="placeholder" width={100} height={100} className="object-contain h-full rounded-l-xl shrink-0" /> :
                <Image src="/placeholder.png" alt="placeholder" width={100} height={100} className="object-contain h-full shrink-0" />
            }
        </div>

        <div className="">
            <h3 className="text-foreground font-bold">{title}
                {tag}
            </h3>
            <h4 className="font-medium text-sm leading-5">{companyName} {isVarified && <IoIosCheckmarkCircle className="inline text-green-500 mb-1" />}</h4>

            <p className="text-sm text-muted-foreground my-1">
                <LiaMoneyBillSolid className="inline mr-0.5" />
                <span>${salary}</span>
            </p>
            
            <p className="text-sm text-muted-foreground my-1">
                <BiSolidBriefcase className="inline mr-0.5" />
                <span>{jobType}</span>
            </p>

            <p className="text-sm text-muted-foreground my-1">
                <MdLocationPin className="inline mr-0.5" />
                <span>{location}</span>
            </p>
        </div>

        <div className="hidden sm:flex flex-col justify-between text-xs py-2 text-muted-foreground ml-auto">
             <p className="bg-muted px-1 py-0.5 w-fit rounded-md">{locationType}</p>
            <p className="">
                <LuClock9 className="inline" /> {postedAt}
            </p>
        </div>
      </Link>
  )
}
