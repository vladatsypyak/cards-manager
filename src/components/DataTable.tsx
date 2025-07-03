import {Card} from "@/common/types";
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
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
import {columns} from "@/components/CardTableColumns";
import {CardTableRow} from "@/components/CardTableRow";

type DataTableProps = {
    data: Card[];
};

export function DataTable({cards }: DataTableProps) {
    const table = useReactTable<Card>({
        data: cards,
        columns,
        getCoreRowModel: getCoreRowModel<Card>(),
    })

        return (
            <div className="rounded-md border">
                <h2 className={"font-bold"}>My Cards</h2>
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
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        )

}
export default DataTable
