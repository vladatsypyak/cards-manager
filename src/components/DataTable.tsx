import {Card} from "@/common/types";
import {
    flexRender,
    getCoreRowModel,
    SortingState,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {getColumns} from "@/components/CardTableColumns";
import {CardTableRow} from "@/components/CardTableRow";
import {RadioGroup} from "@/components/ui/radio-group";
import {useState} from "react";

type DataTableProps = {
    data: Card[];
    setCards: React.Dispatch<React.SetStateAction<Card[]>>,
    handleDelete: (id: string)=> void,
    handleDefaultToggle: (id: string)=> void
};

export function DataTable({cards, handleDelete, handleDefaultToggle}: DataTableProps) {
    const columns = getColumns(handleDelete)
    const [sorting, setSorting] = useState<SortingState>([])


    const table = useReactTable<Card>({
        data: cards,
        columns,
        getCoreRowModel: getCoreRowModel<Card>(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
        state: {
            sorting,
        },
    })

    return (
        <div>
            <RadioGroup
                value={cards.find(card => card.isDefault)?.id}
                onValueChange={(id)=> handleDefaultToggle(id)}
            >
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <CardTableRow row={row}/>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No cards found
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </RadioGroup>
        </div>
    )

}

export default DataTable
