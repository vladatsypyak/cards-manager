import VisaIcon from "@/assets/icons/visa.png";
import MastercardIcon from "@/assets/icons/mastercard.png";
import AmexIcon from "@/assets/icons/amex.png";

const brandIcons = {
    visa: VisaIcon,
    mastercard: MastercardIcon,
    amex: AmexIcon,
};

const BrandIcon = ({brand} : string)=>{
    const icon = brandIcons[brand]
    return <img src={icon} alt={brand} className="w-12 h-12" />
}
export default BrandIcon
