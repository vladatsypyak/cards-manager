import type  { ColumnDef } from "@tanstack/react-table"
import {Card} from "@/common/types";
export const columns: ColumnDef<Card>[] = [
    {
        accessorKey: "brand",
        header: "Brand",
        cell: ({ row }) => <p className={"font-medium"}>{row.getValue("brand")}</p>,
    },
    {
        accessorKey: "last4",
        header: "Last 4 digits"
    },
    {
        accessorKey: "isDefault",
        header: "Default"
    },
    {
        accessorKey: "action",
        header: "Action",
        cell: ({ row }) => <button className={"font-bold"}>Delete</button>,

    },
]
