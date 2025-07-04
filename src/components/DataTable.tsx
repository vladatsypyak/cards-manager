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
import {RadioGroup} from "@/components/ui/radio-group";

type DataTableProps = {
    data: Card[];
    setCards: React.Dispatch<React.SetStateAction<Card[]>>
};

export function DataTable({cards, setCards}: DataTableProps) {
    const table = useReactTable<Card>({
        data: cards,
        columns,
        getCoreRowModel: getCoreRowModel<Card>(),
    })

    return (
        <div>
            <RadioGroup
                value={cards.find(card => card.isDefault)?.id}
                onValueChange={(id) => {
                    setCards((prev) =>
                        prev.map((card) => ({
                            ...card,
                            isDefault: card.id === id,
                        }))
                    );
                }}
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
                                    No results.
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
