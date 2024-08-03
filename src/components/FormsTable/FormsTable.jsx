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
import { Button } from "../ui/button"
import { EyeIcon, SquarePen } from "lucide-react"
import { Badge } from "../ui/badge"
  

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
          <TableRow className="bg-slate-800 dark:bg-slate-900 text-white hover:bg-slate-800 lg:text-lg font-semibold">
            <TableHead className="w-[10px] text-white">#</TableHead>
            <TableHead className="text-white">Title</TableHead>
            <TableHead className="hidden md:table-cell text-white">Department</TableHead>
            <TableHead className="hidden lg:table-cell text-white">Reported Date</TableHead>
            <TableHead className="hidden lg:table-cell text-white">Reported Time</TableHead>
            <TableHead className="hidden lg:table-cell text-white">Status</TableHead>
            <TableHead className="text-white"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {forms.map((form, index) => (
            <TableRow className="alternate-colors lg:text-lg" key={form.id}>
              <TableCell className="font-medium">{index+1}</TableCell>
              <TableCell>
                <div className="w-full flex flex-wrap justify-start">
                    <div className="block w-full">
                        { 
                            (form.title ? (form.title.length > 50 ? form.title.substring(0, 50) + "..." : form.title) : "No Title Available")
                        }
                    </div>
                    <div className="mt-2 w-full lg:hidden">
                        <Badge variant={`${form.status === "REJECTED" ? "destructive" : ""}`}>{form.status}</Badge>
                    </div>
                </div>
            </TableCell>
              <TableCell className="hidden md:table-cell">{form.department}</TableCell>
              <TableCell className="hidden lg:table-cell">{form.reported_date}</TableCell>
              <TableCell className="hidden lg:table-cell">{form.reported_time}</TableCell>
              <TableCell className="hidden lg:table-cell"><Badge variant={`${form.status === "REJECTED" ? "destructive" : ""}`} className={`w-[5.5rem] ${form.status === "REJECTED" ? "" : (form.status === "RESOLVED" ? "bg-green-500": "bg-yellow-500")}`}><div className="mx-auto">{form.status}</div> </Badge></TableCell>
              <TableCell>
                <Button 
                    className={`w-[3.0rem lg:w-[5.5rem] dark:text-white ${form.status === "REJECTED" ? "bg-yellow-500 dark:bg-yellow-500 hover:bg-yellow-600" : "dark:bg-slate-800"}`} 
                    onClick={(e) => handleRowClick(e, form.status, form.id)}
                >
                    {form.status === "REJECTED" ? (
                        <>
                            <span className="hidden md:inline">Edit</span>
                            <SquarePen className="lg:ml-2 w-5 h-5" />
                        </>
                    ) : (
                        <>
                            <span className="hidden md:inline">View</span>
                            <EyeIcon className="lg:ml-2 w-5 h-5 lg:w-20 lg:h-20" />
                        </>
                    )}
                </Button>
              </TableCell>
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