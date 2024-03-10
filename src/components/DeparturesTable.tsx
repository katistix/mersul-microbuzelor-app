import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { DepartureOutput } from "mersul-microbuzelor";

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
];

type DeparturesTableProps = {
    departures: DepartureOutput[];
    className?: string;
};

export function DeparturesTable(props: DeparturesTableProps) {
    return (
        <Table className={props.className}>
            <TableHeader>
                <TableRow>
                    <TableHead className="">Ora plecare</TableHead>
                    <TableHead>Ora sosire</TableHead>
                    <TableHead>Pret</TableHead>
                    <TableHead className="text-right">Companie</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {props.departures.map((departure, i) => (
                    <TableRow key={i}>
                        <TableCell className="font-medium">
                            {departure.departure_time}
                        </TableCell>
                        <TableCell>{departure.arrival_time}</TableCell>
                        <TableCell>{departure.price}</TableCell>
                        <TableCell className="text-right">
                            {departure.company}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
