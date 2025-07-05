import {TableCell, TableRow} from "@/components/ui/table";
import {flexRender} from "@tanstack/react-table";
import type {Card} from "@/common/types";
import type {Row} from "@tanstack/react-table";


type CardTableRowProps = {
    row: Row<Card>;

}
export const CardTableRow = ({row}: CardTableRowProps): JSX.Element => {
    return <TableRow
        key={row.id}
        className="data-[state=selected]:bg-indigo-50 dark:data-[state=selected]:bg-gray-800"
        data-state={row.original.isDefault && "selected"}
    >
        {row.getVisibleCells().map((cell) => (
            <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
        ))}
    </TableRow>
}
