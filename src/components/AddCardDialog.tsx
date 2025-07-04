import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {useForm, Controller} from "react-hook-form"
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";


type NewCardFormInputs = {
    cardNumber: string
    expirationDate: string
    cvc: string
}


const AddCardDialog = () => {
    const {register, handleSubmit, reset, control, setValue, watch} = useForm<NewCardFormInputs>()

    const onSubmit = (data: NewCardFormInputs) => {
        console.log("card data", data)
        reset()
    }

    const formatCardNumber = (value: string) =>
        (value ?? "").replace(/(.{4})/g, "$1 ").trim()

    const formatExpirationDate = (value: string) => {
        const digits = (value ?? "").replace(/\D/g, "");
        const mm = digits.slice(0, 2);
        const yy = digits.slice(2, 4);
        return yy ? `${mm} / ${yy}` : mm;
    }
    return <Dialog>
        <DialogTrigger>Add New Card</DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Add New Card</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Label>Card Number</Label>
                    <Controller
                        name="cardNumber"
                        control={control}
                        render={({field: {onChange, value, ...field}}) => (
                            <Input
                                {...field}
                                value={formatCardNumber(value)}
                                onChange={(e) => {
                                    const rawValue = e.target.value.replace(/\s/g, "")
                                    onChange(rawValue)
                                }}
                                maxLength={19}
                                placeholder={"**** **** **** ****"}
                            />
                        )}
                    />

                </div>
                <div>
                    <Label>Expiration Date</Label>
                    <Input
                        placeholder="MM / YY"
                        {...register("expirationDate", {
                            required: true,
                            pattern: /^(0[1-9]|1[0-2]) \/ \d{2}$/,
                        })}
                        onChange={(e) => {
                            const formatted = formatExpirationDate(e.target.value);
                            setValue<"expirationDate">("expirationDate", formatted, {shouldValidate: true});
                        }}
                        value={watch("expirationDate")}
                    />
                </div>
                <div>
                    <Label className="text-sm font-medium">CVC</Label>
                    <Input {...register("cvc", {
                            required: "CVC is required",
                            pattern: {
                                value: /^[0-9]{3,4}$/,
                                message: "CVC must have 3 or 4 digits",
                            }
                        }
                    )}
                           onChange={(e) => {
                               const formatCVC = e.target.value.replace(/\D/g, "");
                               setValue<"cvc">("cvc", formatCVC)
                           }}
                           maxLength={4}
                           placeholder="•••"
                           value={watch("cvc")}
                    />
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
