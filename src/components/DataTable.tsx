import type {Card} from "@/common/types";
import type {
    SortingState} from "@tanstack/react-table";
import {
    flexRender,
    getCoreRowModel,
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
    cards: Array<Card>;
    setCards: React.Dispatch<React.SetStateAction<Array<Card>>>,
    handleDelete: (id: string)=> void,
    handleDefaultToggle: (id: string)=> void,
    isLoading: boolean

};

export function DataTable({cards, handleDelete, handleDefaultToggle, isLoading}: DataTableProps): JSX.Element {
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
                onValueChange={(id)=> { handleDefaultToggle(id); }}
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
                        {isLoading ? (
                            <TableRow>
                                <TableCell className="h-24 text-center text-muted-foreground" colSpan={columns.length}>
                                    Loading cards...
                                </TableCell>
                            </TableRow>
                        ) :
                        table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <CardTableRow row={row}/>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell className="h-24 text-center" colSpan={columns.length}>
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
