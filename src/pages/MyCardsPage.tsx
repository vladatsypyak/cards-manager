import {useState} from "react";
import {Card} from "@/common/types";
import DataTable from "../components/DataTable";
import cardsMock from "../cards.json"
import CardFilter from "@/components/CardFilter";
import AddCardDialog from "@/components/AddCardDialog";

const MyCardsPage = () => {
    const initialCards = cardsMock
    const [cards, setCards] = useState<Card[]>(initialCards)
    function filterCards (filterInput){
        if(filterInput === ""){
            setCards(initialCards)
            return
        }
        const filteredCards = cards.filter(card =>{
            return card.brand.includes(filterInput) || card.last4.includes(filterInput)
        })
        setCards(filteredCards)
    }
    return (
        <div className={"border"}>
        <div className={"flex justify-between"}>
            <h2 className={"font-bold"}>My Cards</h2>
            <CardFilter filterCards={filterCards}/>
        </div>
            <DataTable cards={cards}/>
            <AddCardDialog cards={cards} setCards={setCards}/>
        </div>

    )
}
export default MyCardsPage
