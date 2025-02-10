import calculator from "../assets/assets/images/icon-calculator.svg"

const Buttons = () => {
  return (
    <section className="relative">
        <div className="w-[60%] flex bg-lime-400 p-2 rounded-full gap-2 mt-10 justify-center items-center cursor-pointer">
            <img src={calculator} alt="calculator" className="w-5 h-5"/>
            <p className="text-sm font-montserrat font-semibold">Calculate Repayments</p>
        </div>
    </section>
  )
}

export default Buttons