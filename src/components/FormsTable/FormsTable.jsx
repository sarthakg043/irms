import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useNavigate } from "react-router-dom"
  

export function FormsTable({forms}) {
    let navigate = useNavigate()
    const handleRowClick = (e, status, id) => {
        if(status === "REJECTED") {
            navigate(`/report/rejected/${id}`)
        }
        else{

        }
    }
    
    return (
      <Table>
        <TableCaption>A list of recent incident forms.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[10px]">#</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Department</TableHead>
            <TableHead className="hidden lg:table-cell">Reported Date</TableHead>
            <TableHead className="hidden lg:table-cell">Reported Time</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {forms.map((form, index) => (
            <TableRow key={form.id} onClick={(e) => handleRowClick(e, form.status, form.id)}>
              <TableCell className="font-medium">{index+1}</TableCell>
              <TableCell>{form.title ? form.title : "Form Title"}</TableCell>
              <TableCell className="hidden md:table-cell">{form.department}</TableCell>
              <TableCell className="hidden lg:table-cell">{form.reported_date}</TableCell>
              <TableCell className="hidden lg:table-cell">{form.reported_time}</TableCell>
              <TableCell>{form.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    )
  }
  