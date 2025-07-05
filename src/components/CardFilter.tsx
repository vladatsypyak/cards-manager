import {Input} from "@/components/ui/input";

type CardFilterProps = {
    filterCards: (filterInput: string) => void;
};

const CardFilter = ({filterCards}: CardFilterProps): JSX.Element => {
    return (
        <div>
            <Input
                className={"w-30"}
                placeholder={"Search..."}
                type="text"
                onInput={(e: React.FormEvent<HTMLInputElement>) => {
                    const target = e.target as HTMLInputElement;
                    filterCards(target.value);
                }}            />
        </div>
    )
}
export default CardFilter
