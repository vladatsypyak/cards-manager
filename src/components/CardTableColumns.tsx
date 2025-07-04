import type {ColumnDef} from "@tanstack/react-table"
import {Card} from "@/common/types";
import {RadioGroupItem} from "@/components/ui/radio-group"
import {Button} from "@/components/ui/button";

import VisaIcon from "@/assets/icons/visa.png";
import MastercardIcon from "@/assets/icons/mastercard.png";
import AmexIcon from "@/assets/icons/amex.png";
import {ArrowUpDown} from "lucide-react";

const brandIcons = {
    visa: VisaIcon,
    mastercard: MastercardIcon,
    amex: AmexIcon,
};


export const getColumns = (handleDelete): ColumnDef<Card>[] => [
    {
        accessorKey: "brand",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Brand
                    <ArrowUpDown />
                </Button>
            )
        },
        cell: ({row}) => {
            const brand = row.getValue("brand") as string;
            const icon = brandIcons[brand];
            return <img src={icon} alt={brand} className={"h-12 w-12"}/>     },
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
