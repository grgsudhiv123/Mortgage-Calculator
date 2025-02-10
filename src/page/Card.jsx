// import img from "../assets/assets/images/illustration-empty.svg"
import pound from "../assets/assets/images/pound-sign-svgrepo-com.svg"
import calculator from "../assets/assets/images/icon-calculator.svg"

const Card = () => {
  return (
    <section className="mx-auto 2xl:min-w-[1240px] xl:min-w-[1024px] bg-white rounded-3xl ">
        <div className="flex ">
            <div className="flex flex-1 flex-col justify-start p-10 bg-white rounded-l-3xl">
                <div className="flex justify-between items-center">
                    <h1 className="font-palanquin font-bold text-lg">Mortgage Calculator</h1>
                    <a className="underline text-sm" href="#">Clear all</a>
                </div>

                <div className="flex flex-col mt-10">
                    <p className="">Mortgage Amount</p>
                    <div className="flex flex-row justify-start items-center rounded-md mt-2 border border-blue-900">
                        <div className="w-[10%] flex justify-center bg-sky-200 h-full rounded-l-[5px]">
                            <img src={pound} alt="pound-image" width={20} height={20} className="object-contain bg-cover"/>
                        </div>
                        <input type="text" required className="w-[90%] px-2 py-1 outline-none rounded-r-md my-0 mx-0"/>
                    </div>
                </div>



                <div className="flex justify-between mt-5">
                    <div className="flex flex-col w-[45%]">
                    <p className="">Mortgage Term</p>
                    <div className="flex flex-row justify-start items-center rounded-md mt-2 border border-blue-900">
                        <input type="text" required className="w-[70%] px-2 py-1 outline-none rounded-l-md my-0 mx-0"/>
                        <div className="w-[30%] flex justify-center items-center bg-sky-200 h-full rounded-r-[5px]">
                            <p>years</p>
                        </div>
                    </div>    
                    </div>
                    <div className="flex flex-col w-[45%]">
                        <p className="">Interest Rate</p>
                        <div className="flex flex-row justify-start items-center rounded-md border border-blue-900 mt-2">
                            <input type="text" required className="w-[80%] px-2 py-1 outline-none rounded-l-md my-0 mx-0"/>
                            <div className="w-[20%] flex justify-center items-center bg-sky-200 h-full rounded-r-[5px]">
                            <p className="text-center">%</p>
                            </div>
                        </div>    
                    </div>
                </div>


                <div className="flex flex-col mt-5">
                    <p>Mortgage Type</p>
                    <div className="w-full flex flex-row h-10 justify-start items-center gap-5 p-3 border border-blue-900 mt-2 rounded-md">
                        <input type="radio" name="repayment" value="repayment" /> <p>Repayment</p>
                    </div>
                    <div className="w-full flex flex-row h-10 justify-start items-center gap-5 p-3 border border-blue-900 mt-2 rounded-md">
                        <input type="radio" name="interest" value="interest" /> <p>Interest Only</p>
                    </div>
                </div>


                <div className="w-[70%] flex bg-lime-400 p-2 rounded-full gap-2 mt-10 justify-center items-center">
                    <img src={calculator} alt="calculator" width={16} height={16}/>
                    <p>Calculate Repayments</p>
                </div>


            </div>
            <div className="flex flex-1 justify-center bg-teal-900 rounded-r-3xl rounded-bl-[80px] p-10">
                <p>sudeep</p>
            </div>
        </div>
    </section>
  )
}

export default Card