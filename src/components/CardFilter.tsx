import {Input} from "@/components/ui/input";

const CardFilter = ({filterCards}: (filterInput: string) => void) => {
    return (
        <div>
            <Input
                onInput={(e)=>filterCards(e.target.value)}
                type="text"
                placeholder={"Search..."}
                className={"w-30"}
            />
        </div>
    )
}
export default CardFilter
