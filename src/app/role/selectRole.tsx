import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
function SelectRole() {
  return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select User Role" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">Employee</SelectItem>
                <SelectItem value="dark">Candidate</SelectItem>
            </SelectContent>
        </Select>
  )
}

export default SelectRole;