import type  { ColumnDef } from "@tanstack/react-table"
import {Card} from "@/common/types";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


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
        header: "Default",
        cell: ({row})=>{
            const card = row.original;
            return (
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value={card.id} id={`card-${card.id}`} />
                    <label htmlFor={`card-${card.id}`} className="text-sm">
                        Default
                    </label>
                </div>
            );
        }
    },
    {
        accessorKey: "action",
        header: "Action",
        cell: ({ row }) => <button className={"font-bold"}>Delete</button>,

    },
]
