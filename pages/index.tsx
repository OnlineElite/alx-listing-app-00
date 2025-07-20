import {PROPERTYLISTINGSAMPLE} from "@/constants"
import Card from "@/components/common/Card"
import {PropertyProps} from "@/interfaces"
export default function Home() {
  return (
    <div className=" min-h-screen bg-white">
      <section className="bg-[url(/assets/hero.jpg)] flex justify-center items-center flex-col h-[70vh] bg-center bg-cover bg-no-repeat">
        <h1 className="text-white font-bold p-3 text-3xl">Find your favorite place here!</h1>
        <h2 className="text-white font-bold p-3 text-xl">The best prices for over 2 million properties worldwide</h2>
      </section>
      <section id="Listing" className=" grid grid-cols-4 gap-3 my-4 mx-3">
        {
          PROPERTYLISTINGSAMPLE.map(({name, address, rating, category, price, offers, image, discount} : PropertyProps, key : number) => (
            <Card key={key} name={name} address={address} rating={rating} price={price} category={category} offers={offers} image={image} discount={discount} />
          ))
        }
      </section>
    </div>
  );
}
