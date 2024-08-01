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
import './FormsTable.css'
  

export function FormsTable({forms}) {
    let navigate = useNavigate()
    const handleRowClick = (e, status, id) => {
        if(status === "REJECTED") {
            navigate(`/report/rejected/${id}`)
        }
        else{

        }
    }

    const dummytext = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sit nobis assumenda tempora tempore consequatur temporibus. Necessitatibus unde in illo cumque dolorem sapiente odit sit, asperiores atque quia commodi velit! Repellendus similique dolor neque quis architecto laboriosam harum, ab minima, aut repellat eligendi quidem est optio ad corrupti delectus iure unde necessitatibus, at hic fugiat tempore laborum deleniti ratione? Fugit? Optio autem iure alias dicta earum? Consequatur accusantium earum aspernatur libero ducimus unde. Odio modi repellendus iure facilis. Dolorem provident libero autem minima vel, culpa error recusandae totam ratione accusantium. "

    return (
      <Table>
        <TableCaption>A list of recent incident forms.</TableCaption>
        <TableHeader>
          <TableRow className="bg-slate-800 text-white hover:bg-slate-800">
            <TableHead className="w-[10px] text-white">#</TableHead>
            <TableHead className="text-white">Title</TableHead>
            <TableHead className="hidden md:table-cell text-white">Department</TableHead>
            <TableHead className="hidden lg:table-cell text-white">Reported Date</TableHead>
            <TableHead className="hidden lg:table-cell text-white">Reported Time</TableHead>
            <TableHead className="text-white">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {forms.map((form, index) => (
            <TableRow className="alternate-colors" key={form.id} onClick={(e) => handleRowClick(e, form.status, form.id)}>
              <TableCell className="font-medium">{index+1}</TableCell>
              <TableCell>{ (form.title ? (form.title.length > 50 ? form.title.substring(0, 50) + "..." : form.title) : "No Title Available")}</TableCell>
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
  