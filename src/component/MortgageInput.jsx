import Buttons from "../component/Buttons"

import { useState, useEffect, useRef } from "react"

const MortgageInput = ({setResult}) => {

    const [amount, setAmount] = useState('')
    const [amtactive, setAmtactive] = useState(false)
    const amountRef = useRef(null)
    const [years, setYears] = useState('')
    const [yearsActive, setYearsActive] = useState(false)
    const mrtRef = useRef(null)
    const [interest, setInterest] = useState('')
    const [interestActive, setInterestActive] = useState(false)
    const intRef = useRef(null)
    const [selectedOption, setSelectedOption] = useState(null)
    
    const [error, setError] = useState({
        amount: '',
        years: '',
        interest: '',
        option: '',
    });
    
    const clearHandle = ()=>  {
        setAmount('');
        setAmtactive(false);
        setYears('');
        setYearsActive(false);
        setInterest('');
        setInterestActive(false);
        setSelectedOption(null);
        setError('');
        setResult('');
    }

    // for amount
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
    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    }



    const data = {
        amount,
        years,
        interest,
        'option': selectedOption
    };

    const calculateMortgage = (data) => {
        let newErrors = {amount: '', years: '', interest: '', option: ''};
        let hasError = false;

        const principal = parseFloat(data.amount);
        const termInYears = parseFloat(data.years);
        const annualInterest = parseFloat(data.interest); 

            if (data.amount.trim() === '') {
                newErrors.amount = "Amount is empty or zero";
                hasError = true;
            } else if (isNaN(principal)) {
                newErrors.amount = "Amount must be a number.";
                hasError = true;
            } else if (parseFloat(data.amount) === 0) {
                newErrors.amount = "Amount must not be zero.";
                hasError = true;
            }

            
            if (data.years.trim() === '') {
                newErrors.years = "Years are required.";
                hasError = true;
            } else if (isNaN(termInYears)) {
                newErrors.years = "Years must be a number.";
                hasError = true;
            } else if (parseFloat(data.years) === 0) {
                newErrors.years = "Years must not be zero.";
                hasError = true;
            }

            // Interest Validation
            if (data.interest.trim() === '' ) {
                newErrors.interest = "Interest rate is required.";
                hasError = true;
            } else if (isNaN(annualInterest)) {
                newErrors.interest = "Interest rate must be a number.";
                hasError = true;
            } else if (parseFloat(data.interest) === 0) {
                newErrors.interest = "Interest rate must not be zero.";
                hasError = true;
            }
            
            if(!data.option) {
                newErrors.option = "Please select an option.";
                hasError = true;
            } 

            setError(newErrors);

            if (hasError) return;

        const monthlyInterest = annualInterest / 100 /12;
        const numberOfPayments = termInYears * 12;
        let monthlyRepayment = 0;
        let totalmonthlyRepayment = 0;
        let output = {}

            
        if (
            !isNaN(principal) && 
            !isNaN(termInYears) && 
            !isNaN(annualInterest) && 
            data.amount.trim() !== '' && 
            data.years.trim() !== '' && 
            data.interest.trim() !== '' && 
            data.option !== null) {
            if (data.option === 'repayment') {
                monthlyRepayment = (principal * (monthlyInterest*Math.pow(1+monthlyInterest,numberOfPayments)/Math.pow(1+monthlyInterest,numberOfPayments-1)))
                totalmonthlyRepayment = (principal + principal*(annualInterest / 100)*termInYears);
                output = {
                    "monthlyRepayment" : monthlyRepayment.toFixed(2),
                    "totalmonthlyRepayment" : totalmonthlyRepayment.toFixed(2)}
            } else {
                monthlyRepayment = (principal * (monthlyInterest/12))
                output = {
                    "monthlyRepayment" : monthlyRepayment.toFixed(2) 
                }  
            }
            setResult(output);
        }
    };

    // useEffect(() => {
    //     setResult(result);
    // }, [result]); 



 

    // styles : mortgageamt
    const stylesma = [
        { condition: error.amount, style: 'bg-red-200 border-red-500 shadow-lg' }, 
        { condition: amtactive, style: 'bg-lime-200 border-lime-400 shadow-lg text-slate-600' },
        ];

    const borderMa = stylesma.find(item => item.condition)?.style || 'bg-sky-200 border-blue-900 text-slate-600';

    // styles : mortgage term 
    const stylesmrtamt = [
        { condition: error.years, style: 'bg-red-200 border-red-500 shadow-lg' }, 
        { condition : yearsActive, style : 'bg-lime-200 border-lime-400 shadow-lg text-slate-600'}
        ];
    const borderMrtTerm = stylesmrtamt.find(item => item.condition)?.style || 'bg-sky-200 border-blue-900 text-slate-600';

    // styles : interest rate 
    const stylesintrate = [
        { condition: error.interest, style: 'bg-red-200 border-red-500 shadow-lg' },
        { condition : interestActive, style : 'bg-lime-200 border-lime-400 shadow-lg text-slate-600'}
        ];
    const borderINterestRte = stylesintrate.find(item => item.condition)?.style || 'bg-sky-200 border-blue-900 text-slate-600';

    // styles : option repayment
    const stylesOptRepayment = [
        { condition: error.option, style: 'bg-red-200 border-red-500 shadow-lg' },
        {condition: selectedOption === 'repayment', style : 'border-lime-400 bg-lime-100 shadow-lg'}
    ];
    const OptionStylesRepayment = stylesOptRepayment.find(item => item.condition)?.style || 'border-blue-900';

    // styles : option interestonly
    const stylesOptinterestonly = [
        { condition: error.option, style: 'bg-red-200 border-red-500 shadow-lg' },
        {condition: selectedOption === 'interest', style : 'border-lime-400 bg-lime-100 shadow-lg'}
    ];
    const OptionStylesinterestonly = stylesOptinterestonly.find(item => item.condition)?.style || 'border-blue-900';

  return (
        <section className="w-full flex flex-col space-y-5 p-4 md:p-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
                <h1 className="font-palanquin font-bold text-lg md:text-xl text-blue-950">Mortgage Calculator</h1>
                <p
                    className="underline text-sm text-blue-900 font-montserrat hover:cursor-pointer"
                    onClick={clearHandle}
                >
                    Clear All
                </p>
            </div>

            {/* Mortgage Amount Section */}
            <div className="flex flex-col space-y-2">
                <p className="text-base md:text-lg font-palanquin text-blue-950">Mortgage Amount</p>
                <div className={`flex flex-row justify-start items-center rounded-md border ${borderMa}`}>
                    <div className={`w-12 flex justify-center ${borderMa} h-full rounded-l-[5px]`}>
                        <p className="text-lg font-bold">£</p>
                    </div>
                    <input
                        ref={amountRef}
                        onFocus={amountFocus}
                        onBlur={amountBlur}
                        type="text"
                        required
                        className="w-full px-2 py-2 outline-none rounded-r-md"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                {error.amount && (
                    <p className="text-xs mt-1 font-montserrat text-red-400">{error.amount}</p>
                )}
            </div>

            {/* Mortgage Term and Interest Rate Section */}
            <div className="flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 md:space-x-5">
                <div className="flex flex-col w-full md:w-[45%] space-y-2">
                    <p className="text-base md:text-lg font-palanquin text-blue-950">Mortgage Term</p>
                    <div className={`flex flex-row justify-start items-center rounded-md border ${borderMrtTerm}`}>
                        <input
                            ref={mrtRef}
                            onFocus={mrtFocus}
                            onBlur={mrtBlur}
                            type="text"
                            required
                            className="w-[70%] px-2 py-2 outline-none rounded-l-md"
                            value={years}
                            onChange={(e) => setYears(e.target.value)}
                        />
                        <div className={`w-[30%] flex justify-center items-center ${borderMrtTerm} h-full rounded-r-[5px]`}>
                            <p className="text-slate-700 font-palanquin text-sm md:text-md">years</p>
                        </div>
                    </div>
                    {error.years && (
                        <p className="text-xs mt-1 font-montserrat text-red-400">{error.years}</p>
                    )}
                </div>

                <div className="flex flex-col w-full md:w-[45%] space-y-2">
                    <p className="text-base md:text-lg font-palanquin text-blue-950">Interest Rate</p>
                    <div className={`flex flex-row justify-start items-center rounded-md border ${borderINterestRte}`}>
                        <input
                            ref={intRef}
                            onFocus={intFocus}
                            onBlur={intBlur}
                            type="text"
                            required
                            className="w-[80%] px-2 py-2 outline-none rounded-l-md"
                            value={interest}
                            onChange={(e) => setInterest(e.target.value)}
                        />
                        <div className={`w-[20%] flex justify-center items-center ${borderINterestRte} h-full rounded-r-[5px]`}>
                            <p className="text-center text-slate-700 font-palanquin text-sm md:text-md">%</p>
                        </div>
                    </div>
                    {error.interest && (
                        <p className="text-xs mt-1 font-montserrat text-red-400">{error.interest}</p>
                    )}
                </div>
            </div>

            {/* Mortgage Type Section */}
            <div className="flex flex-col space-y-2">
                <p className="text-base md:text-lg font-palanquin text-blue-950">Mortgage Type</p>
                <div
                    className={`w-full flex flex-row h-10 justify-start items-center gap-5 p-3 border ${OptionStylesRepayment} rounded-md`}
                >
                    <input
                        type="radio"
                        name="option"
                        value="repayment"
                        checked={selectedOption === 'repayment'}
                        onChange={handleChange}
                        className={`${OptionStylesRepayment} hover:cursor-pointer`}
                    />
                    <p className="text-sm font-semibold font-montserrat text-slate-700">Repayment</p>
                </div>
                <div
                    className={`w-full flex flex-row h-10 justify-start items-center gap-5 p-3 border ${OptionStylesinterestonly} rounded-md`}
                >
                    <input
                        type="radio"
                        name="option"
                        value="interest"
                        checked={selectedOption === 'interest'}
                        onChange={handleChange}
                        className={`${OptionStylesinterestonly} hover:cursor-pointer`}
                    />
                    <p className="text-sm font-semibold font-montserrat text-slate-700">Interest Only</p>
                </div>
                {error.option && (
                    <p className="text-xs mt-1 font-montserrat text-red-400">{error.option}</p>
                )}
            </div>

            {/* Button Section */}
            <div>
                <Buttons inputValues={data} onClick={calculateMortgage} />
            </div>
        </section>

  )
}

export default MortgageInput