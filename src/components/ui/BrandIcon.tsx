import VisaIcon from "@/assets/icons/visa.png";
import MastercardIcon from "@/assets/icons/mastercard.png";
import AmexIcon from "@/assets/icons/amex.png";
import type {Brand} from "@/common/types";

const brandIcons:Record<Brand, string | null> = {
    visa: VisaIcon,
    mastercard: MastercardIcon,
    amex: AmexIcon,
    unknown: null

};

const BrandIcon = ({brand} : { brand: Brand }): JSX.Element | null=>{
    if (!brand || brand=== "unknown") return null;
    const icon = brandIcons[brand]
    if (!icon) return null;
    return <img alt={brand} className="w-12 h-12" src={icon} />
}
export default BrandIcon
