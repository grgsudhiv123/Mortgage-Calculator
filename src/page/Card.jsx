import MortgageInput from "../component/MortgageInput"
import Result from "../component/Result"
import { useState } from "react";
import FrontResult from "../component/FrontResult";

const Card = () => {
      const [result, setResult] = useState(null);

  return (
        <section className="mx-auto max-w-full xs:max-w-xs sm:max-w-xs md:max-w-[500px] lg:max-w-screen-lg bg-white rounded-none lg:rounded-3xl lg:h-auto md:h-full">
        <div className="flex flex-col lg:flex-row h-full">
            {/* Left Container */}
            <div className="flex-1 p-10 bg-white rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
            <div>
                <MortgageInput setResult={setResult} />
            </div>
            </div>

            {/* Right Container */}
            <div className="flex-1 p-10 rounded-none lg:rounded-r-3xl lg:rounded-bl-[80px] bg-teal-900">
            {result ? <FrontResult output={result} /> : <Result />}
            </div>
        </div>
        </section>

  );
};

export default Card;
