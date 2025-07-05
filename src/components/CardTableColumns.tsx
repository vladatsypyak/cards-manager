import type {ColumnDef} from "@tanstack/react-table"
import {Card} from "@/common/types";
import {RadioGroupItem} from "@/components/ui/radio-group"
import {Button} from "@/components/ui/button";

import VisaIcon from "@/assets/icons/visa.png";
import MastercardIcon from "@/assets/icons/mastercard.png";
import AmexIcon from "@/assets/icons/amex.png";
import {ArrowUpDown, Trash} from "lucide-react";

const brandIcons = {
    visa: VisaIcon,
    mastercard: MastercardIcon,
    amex: AmexIcon,
};


export const getColumns = (handleDelete): ColumnDef<Card>[] => [
    {
        accessorKey: "brand",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Brand
                <ArrowUpDown />
            </Button>
        ),
        cell: ({ row }) => {
            const brand = row.getValue("brand") as string
            const icon = brandIcons[brand]
            return (
                <div className="pl-3">
                    <img src={icon} alt={brand} className="w-12 h-12" />
                </div>
            )
        },
    },
    {
        accessorKey: "last4",
        header: () => <div className="w-[100px] text-center">Last 4 digits</div>,
        cell: ({ row }) => (
            <div className="w-[100px] text-center select-text">
                {row.getValue("last4")}
            </div>
        ),
    },
    {
        accessorKey: "isDefault",
        header: () => <div className="w-[80px] text-center">Default</div>,
        cell: ({ row }) => {
            const card = row.original
            return (
                <div className="w-[80px] flex items-center justify-center space-x-2">
                    <RadioGroupItem value={card.id} id={`card-${card.id}`} />
                </div>
            )
        },
    },
    {
        accessorKey: "action",
        header: () => <p className="text-center">Action</p>,
        cell: ({ row }) => {
            const card = row.original
            return (
                <Button
                    variant="ghost"
                    onClick={() => handleDelete(card.id)}
                    className="mx-auto flex w-[100px] items-center space-x-1 text-red-600 hover:bg-red-100 dark:hover:bg-red-900 hover:text-red-700 dark:hover:text-red-950"
                >
                    <Trash className="h-4 w-4" />
                    Delete
                </Button>
            )
        },
    },
]
