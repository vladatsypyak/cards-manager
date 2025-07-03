import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useForm } from "react-hook-form"
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

type NewCardFormInputs = {
    cardNumber: string
    expirationDate: string
    cvc: string
}


const AddCardDialog = () =>{
    const { register, handleSubmit, reset } = useForm<NewCardFormInputs>()

    const onSubmit = (data: NewCardFormInputs) => {
        console.log("card data", data)
        reset()
    }
    return <Dialog>
        <DialogTrigger>Add New Card</DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Add New Card</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div>
                    <Label>Card Number</Label>
                    <Input {...register("cardNumber", { required: true })} />
                </div>
                <div>
                    <label>Expiration Date</label>
                    <Input {...register("expirationDate", { required: true })}
                           placeholder="MM / YY" />
                </div>
                <div>
                    <label className="text-sm font-medium">CVC</label>
                    <Input {...register("cvc")} placeholder="•••" />
                </div>
                <DialogFooter className="flex justify-end gap-2">
                    <DialogTrigger asChild>
                        <Button type="button" variant="outline">
                            Cancel
                        </Button>
                    </DialogTrigger>
                    <Button type="submit">Add Card</Button>
                </DialogFooter>
            </form>
        </DialogContent>
    </Dialog>
}
export default AddCardDialog
