import MortgageInput from "../component/MortgageInput"
import Result from "../component/Result"

const Card = () => {
  return (
        <section className="mx-auto lg:max-w-screen-lg bg-white rounded-3xl h-[60%] max-lg:h-full">
        <div className="flex max-lg:flex-col h-full">
            {/* left container */}
            <div className="p-9 bg-white rounded-l-3xl max-w-full">
                
                <div>
                    <MortgageInput />
                </div>
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
