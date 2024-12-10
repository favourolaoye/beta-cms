import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const orders = [
  {
    id: 1,
    service: "Item A",
    status: "Recieved",
    date: "March 9, 2023",
    buyer: {
      name: "Leslie Alexander",
      image: "/avatar.jpg",
    },
  },
  {
    id: 2,
    service: "Item B",
    status: "Completed",
    date: "March 4, 2023",
    buyer: {
      name: "Marvin McKinney",
      image: "/avatar.jpg",
    },
  },
  // Add more orders as needed
]

export default function OrdersTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead>Services name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Buyer</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>{order.id}</TableCell>
            <TableCell className="font-medium">{order.service}</TableCell>
            <TableCell>
              <span
                className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                  order.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : order.status === "Ongoing"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {order.status}
              </span>
            </TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={order.buyer.image} />
                  <AvatarFallback>{order.buyer.name[0]}</AvatarFallback>
                </Avatar>
                {order.buyer.name}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

