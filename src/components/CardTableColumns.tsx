import type {ColumnDef} from "@tanstack/react-table"
import {Card} from "@/common/types";
import {RadioGroupItem} from "@/components/ui/radio-group"
import {Button} from "@/components/ui/button";


export const getColumns = (handleDelete): ColumnDef<Card>[] => [
    {
        accessorKey: "brand",
        header: "Brand",
        cell: ({row}) => <p className={"font-medium"}>{row.getValue("brand")}</p>,
    },
    {
        accessorKey: "last4",
        header: "Last 4 digits"
    },
    {
        accessorKey: "isDefault",
        header: "Default",
        cell: ({row}) => {
            const card = row.original;
            return (
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value={card.id} id={`card-${card.id}`}/>
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
        cell: ({row}) => {
            const card = row.original
            return <Button
                variant={"destructive"}
                onClick={() => handleDelete(card.id)}
                className={"font-bold"}>Delete</Button>
        },

    },
]
