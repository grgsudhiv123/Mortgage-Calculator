import pound from "../assets/assets/images/pound-sign-svgrepo-com.svg"

import { useState, useEffect, useRef } from "react"

const MortgageInput = () => {

    // for amount
    const [amount, setAmount] = useState('')
    const [amtactive, setAmtactive] = useState(false)
    const amountRef = useRef(null)
    const amountFocus = () => {
        amountRef.current.focus();
        setAmtactive(true)
    }

    const amountBlur = ()=> {
        // trim removes whitespace
        if (amount.trim() === '') {
            setAmtactive(false);  
        }
    }

    useEffect(() => {
        setAmtactive(false);
        return () => {
            setAmtactive(true);
        };
    }, []); 

    const [years, setYears] = useState('')
    const [yearsActive, setYearsActive] = useState(false)
    const mrtRef = useRef(null)

    const mrtFocus = () => {
        mrtRef.current.focus();
        setYearsActive(true);
    }

    const mrtBlur = () => {
        if (years.trim() === '') {
        setYearsActive(false)
        }
    }

    useEffect (()=> {
        setYearsActive(false)
        return () => {
        }
    },[])



    // Interest rate
    const [interest, setInterest] = useState('')
    const [interestActive, setInterestActive] = useState(false)

    const intRef = useRef(null)

    const intFocus = () => {
        intRef.current.focus();
        setInterestActive(true);
    }

    const intBlur = () => {
        if (interest.trim() === '') {
            setInterestActive(false);
        }
    }



    // radio section

    const [selectedOption, setSelectedOption] = useState(null)

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    }


  return (
    <section className="w-full">
        {/* Mortgage amount eection */}
        <div className="flex flex-col mt-5 h-full">
            <p className="text-lg font-palanquin text-blue-950">Mortgage Amount</p>
            <div className={`flex flex-row justify-start items-center rounded-md mt-2 border ${amtactive ? 'bg-lime-400 border-lime-400 shadow-lg' : 'bg-sky-200 border-blue-900'} h-full`}>
                <div className={`w-[10%] flex justify-center ${amtactive ? 'bg-lime-400' : 'bg-sky-200'} h-full rounded-l-[5px]`}>
                    <img src={pound} alt="pound-image" width={15} height={15} className="object-contain bg-cover"/>
                </div>
                <input
                    ref={amountRef}
                    onFocus={amountFocus}
                    onBlur={amountBlur}
                    type="text"
                    required
                    className="w-[90%] px-2 py-1 outline-none rounded-r-md my-0 mx-0"
                    value={amount}
                    onChange={(e)=>setAmount(e.target.value)}
                />
            </div>
        </div>

        <div className="flex justify-between mt-5">
            <div className="flex flex-col w-[45%]">
                <p className="text-lg font-palanquin text-blue-950">Mortgage Term</p>
                <div className={`flex flex-row justify-start items-center rounded-md mt-2 border ${yearsActive ? 'border-lime-400 shadow-lg' :'border-blue-900'}`}>
                    <input 
                        ref={mrtRef}
                        onFocus={mrtFocus}
                        onBlur={mrtBlur}
                        type="text" 
                        required 
                        className="w-[70%] px-2 py-1 outline-none rounded-l-md my-0 mx-0"
                        value={years}
                        onChange={(e) => setYears(e.target.value)}
                        />
                    <div className={`w-[30%] flex justify-center items-center ${yearsActive ? 'bg-lime-400 shadow-lg' :'bg-sky-200'} h-full rounded-r-[5px]`}>
                        <p>years</p>
                    </div>
                </div>    
            </div>
                            <div className="flex flex-col w-[45%]">
                                <p className="text-lg font-palanquin text-blue-950">Interest Rate</p>
                                <div className={`flex flex-row justify-start items-center rounded-md mt-2 border ${interestActive ? 'border-lime-400 shadow-lg' :'border-blue-900'} `}>
                                    <input 
                                        ref={intRef}
                                        onFocus={intFocus}
                                        onBlur={intBlur}
                                        type="text" 
                                        required 
                                        className="w-[80%] px-2 py-1 outline-none rounded-l-md my-0 mx-0"
                                        value={interest}
                                        onChange={(e) => setInterest(e.target.value)}
                                        />
                                    <div className={`w-[20%] flex justify-center items-center ${interestActive ? 'bg-lime-400 shadow-lg' :'bg-sky-200'} h-full rounded-r-[5px]`}>
                                    <p className="text-center">%</p>
                                    </div>
                                </div>    
                            </div>
                        </div>


                    <div className="flex flex-col mt-5">
                    <p className="text-lg font-palanquin text-blue-950">Mortgage Type</p>
                    <div className={`w-full flex flex-row h-10 justify-start items-center gap-5 p-3 border ${selectedOption === 'repayment' ? 'border-lime-400 bg-lime-100 shadow-lg':'border-blue-900'} mt-2 rounded-md`}>
                        <input 
                            type="radio" 
                            name="option" 
                            value="repayment" 
                            checked ={selectedOption === 'repayment'}
                            onChange={handleChange}
                            // disabled={selectedOption === 'interest'}
                            className={`${selectedOption === 'repayment' ? 'border-lime-400': ''} hover:cursor-pointer`}
                            /> 
                            <p className="text-sm font-semibold font-montserrat text-slate-700">Repayment</p>
                    </div>
                    <div className={`w-full flex flex-row h-10 justify-start items-center gap-5 p-3 border ${selectedOption === 'interest' ? 'border-lime-400 bg-lime-100 shadow-lg':'border-blue-900'} mt-2 rounded-md`}>
                        <input 
                            type="radio" 
                            name="option" 
                            value="interest" 
                            checked ={selectedOption === 'interest'}
                            onChange={handleChange}
                            // disabled={selectedOption === 'repayment'}
                            className={`${selectedOption === 'interest' ? 'border-lime-400': ''} hover:cursor-pointer`}
                            /> <p className="text-sm font-semibold font-montserrat text-slate-700">Interest Only</p>
                    </div>
                </div>
    </section>
  )
}

export default MortgageInput