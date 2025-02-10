import Buttons from "../component/Buttons"
import MortgageInput from "../component/MortgageInput"
import Result from "../component/Result"

const Card = () => {
  return (
        <section className="mx-auto max-w-screen-lg bg-white rounded-3xl h-[60%]">
        <div className="flex h-full">
            {/* left container */}
            <div className="flex flex-col justify-between p-9 bg-white rounded-l-3xl max-w-full">
                <div className="flex justify-between items-center h-auto">
                    <h1 className="font-palanquin font-bold text-xl text-blue-950">Mortgage Calculator</h1>
                    <a className="underline text-sm text-blue-900 font-montserrat" href="#">Clear All</a>
                </div>
                <div>
                <MortgageInput />
                </div>
                <Buttons />
            </div>

            {/* Right Container */}
            <div className="flex-1 h-full">
            <Result />
            </div>
        </div>
    </section>
  );
};

export default Card;
