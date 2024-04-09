
type candidateJobtag = {
  tag: 'Success' | 'In-Progress' | 'Rejected';
}

export function CandidateJobTag({tag}: candidateJobtag) {
  return (
    <span className={`text-xs py-1 px-2 font-medium ml-1 rounded-full ${tag == 'Success' ? 'bg-green-500/20 text-green-500' : tag == 'In-Progress' ? 'bg-yellow-500/20 text-yellow-500' : 'bg-red-500/20 text-red-500' }`}>
      {tag == 'Success' ? '🟢': tag == 'In-Progress' ? '🟡' : '🔴'}{tag}
    </span>
  )
}


type employerJobTag = {
  tag: 'Expired' | 'Open' | 'Hired'
}

export function EmployerJobTag({tag}: employerJobTag) {
  return(
    <span className={`text-xs py-1 px-2 font-medium ml-1 rounded-full ${tag == 'Hired' ? 'bg-green-500/20 text-green-500' : tag == 'Open' ? 'bg-yellow-500/20 text-yellow-500' : 'bg-red-500/20 text-red-500' }`}>
       {tag == 'Hired' ? '🟢': tag == 'Open' ? '🟡' : '🔴'}{tag}
    </span>
  )
}

export function UrgerntTag() {
  return(
    <span className={`text-xs py-1 font-medium px-2 ml-1 rounded-full text-green-500 bg-green-500/20`}>
      Urgent
    </span>
  )
}
