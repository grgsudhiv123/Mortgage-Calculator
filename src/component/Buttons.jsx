import calculator from "../assets/assets/images/icon-calculator.svg"

const Buttons = ({inputValues, onClick}) => {
  return (
    <section className="relative">
        <button
        onClick={() => onClick(inputValues)} 
        className="w-[60%] max-sm:w-[100%] flex bg-lime-400 p-4 rounded-full gap-2 mt-5 justify-center items-center cursor-pointer">
            <img src={calculator} alt="calculator" className="w-5 h-5"/>
            <p className="text-sm font-montserrat font-semibold">Calculate Repayments</p>
        </button>
    </section>
  )
}

export default Buttons