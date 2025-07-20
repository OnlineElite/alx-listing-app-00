import {PropertyProps} from "@/interfaces"
import Image from "next/image"
const Card : React.FC<PropertyProps> = ({name, address, rating, category, price, offers, image, discount})=>{

    return(
        <div className="bg-slate-900 text-white p-3 flex flex-col justify-between items-center rounded-xl">
            
                <Image className="w-full h-80" src={image}  alt="Default image" width= "100" height= "100" />
            
            <div className="text-white h-auto w-full  ">
                <p className="">Name : <span className="text-yellow-300 italic">{name}</span></p>
                <p className="">Address : <span className="text-yellow-300 italic">{address.city}</span></p>
                <p className="">Rating : <span className="text-yellow-300 italic">{rating}</span></p>
                <p className="">Category : <span className="text-yellow-300 italic">{category}</span></p>
                <p className="">Price : <span className="text-yellow-300 italic">{price}</span></p>
                <p className="">Offers : <span className="text-yellow-300 italic">{offers.bed}</span></p>
                <p className="">Discount : <span className="text-yellow-300 italic">{discount}</span></p>
            </div>
        </div>
    )
}

export default Card;