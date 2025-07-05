import {useEffect, useState} from "react";
import {Card} from "@/common/types";
import DataTable from "../components/DataTable";
import cardsMock from "../cards.json"
import CardFilter from "@/components/CardFilter";
import AddCardDialog from "@/components/AddCardDialog";
import {ThemeToggle} from "@/components/ThemeToggle";

const MyCardsPage = () => {
    const initialCards = cardsMock
    const [cards, setCards] = useState<Card[]>(initialCards)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000)
    }, [])

    function filterCards(filterInput) {
        if (filterInput === "") {
            setCards(initialCards)
            return
        }
        const filteredCards = cards.filter(card => {
            return card.brand.includes(filterInput) || card.last4.includes(filterInput)
        })
        setCards(filteredCards)
    }

    const handleDelete = (id: string) => {
        setCards(prev => prev.filter(card => card.id !== id))
    }

    const handleDefaultToggle = (id: string) => {
        setCards((prev) =>
            prev.map((card) => ({
                ...card,
                isDefault: card.id === id,
            }))
        );
    }

    return (
        <div className={"wrap max-w-[900px] mx-auto p-5 select-none "}>
            <div className={ "table-wrap border p-5 mb-5 rounded-md"}>
                <div className={"flex justify-between items-center mb-2"}>
                    <h2 className={"font-bold"}>My Cards</h2>
                    <CardFilter filterCards={filterCards}/>
                    <ThemeToggle/>
                </div>
                <DataTable setCards={setCards}
                           cards={cards}
                           handleDelete={handleDelete}
                           handleDefaultToggle={handleDefaultToggle}
                           isLoading={isLoading}

                />

            </div>
            <div className={"w-fit mx-auto"}><AddCardDialog cards={cards} setCards={setCards}/></div>


        </div>


    )
}
export default MyCardsPage
