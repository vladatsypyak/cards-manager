import {useState} from "react";
import {Card} from "@/common/types";
import DataTable from "../components/DataTable";
import cardsMock from "../cards.json"

const MyCardsPage = () => {
    const [cards, setCards] = useState<Card[]>(cardsMock)
    return (
        <div>
            <DataTable cards={cards}/>
        </div>
    )
}
export default MyCardsPage
