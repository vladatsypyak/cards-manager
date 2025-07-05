import {TableCell, TableRow} from "@/components/ui/table";
import {flexRender} from "@tanstack/react-table";
import {Card} from "@/common/types";
import {Row} from "@tanstack/react-table";


type CardTableRowProps = {
    row: Row<Card>;

}
export const CardTableRow = ({row}: CardTableRowProps) => {
    return <TableRow
        key={row.id}
        data-state={row.original.isDefault && "selected"}
        className="data-[state=selected]:bg-indigo-50 dark:data-[state=selected]:bg-gray-800"
    >
        {row.getVisibleCells().map((cell) => (
            <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
        ))}
    </TableRow>
}
