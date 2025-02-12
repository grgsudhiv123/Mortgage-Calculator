import Buttons from "../component/Buttons"

import { useState, useEffect, useRef } from "react"

const MortgageInput = () => {
    const [result, setResult] = useState(null);
    const [error, setError] = useState({
        amount: '',
        years: '',
        interest: '',
        option: '',
    });
    // const [errorStatus, setErrorStatus] = useState(false);

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



    const data = {
        amount,
        years,
        interest,
        'option': selectedOption
    };

    const calculateMortgage = (data) => {
        let newErrors = {amount: '', years: '', interest: '',option: ''};
        let hasError = false;

        const principal = parseFloat(data.amount);
        const termInYears = parseFloat(data.years);
        const annualInterest = parseFloat(data.interest); 

            if (data.amount.trim() === '') {
                newErrors.amount = "Amount is empty";
                hasError = true;
            } else if (isNaN(principal)) {
                newErrors.amount = "Amount must be a number.";
                hasError = true;
            }
            
            if (data.years.trim() === '') {
                newErrors.years = "Years are required.";
                hasError = true;
            } else if (isNaN(termInYears)) {
                newErrors.years = "Years must be a number.";
                hasError = true;
            }

            // Interest Validation
            if (data.interest.trim() === '') {
                newErrors.interest = "Interest rate is required.";
                hasError = true;
            } else if (isNaN(annualInterest)) {
                newErrors.interest = "Interest rate must be a number.";
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

            
        if (!isNaN(principal) && !isNaN(termInYears) && !isNaN(annualInterest) && data.amount.trim() !== '' && data.years.trim() !== '' && data.interest.trim() !== '' && data.option !== null) {
            if (data.option == 'repayment') {
                monthlyRepayment = (principal * (monthlyInterest*Math.pow(1+monthlyInterest,numberOfPayments)/Math.pow(1+monthlyInterest,numberOfPayments-1)))
            } else {
                monthlyRepayment = (principal * (monthlyInterest/12))
            }
            setResult((monthlyRepayment + principal/numberOfPayments).toFixed(2));
        }
    };

    useEffect(() => {
        setResult(result);
    }, [result]); 


    const clearHandle = ()=>  {
        setAmount('');
        setAmtactive(false);
        setYears('');
        setYearsActive(false);
        setInterest('');
        setInterestActive(false);
        setSelectedOption(null);
        setError('');
    }

 

    // styles : mortgageamt
    const stylesma = [
        { condition: error.amount, style: 'bg-red-500 border-red-500 shadow-lg' }, 
        { condition: amtactive, style: 'bg-lime-400 border-lime-400 shadow-lg text-slate-600' },
        ];

    const borderMa = stylesma.find(item => item.condition)?.style || 'bg-sky-200 border-blue-900 text-slate-600';

    // styles : mortgage term 
    const stylesmrtamt = [
        { condition: error.years, style: 'bg-red-500 border-red-500 shadow-lg' }, 
        { condition : yearsActive, style : 'bg-lime-400 border-lime-400 shadow-lg text-slate-600'}
        ];
    const borderMrtTerm = stylesmrtamt.find(item => item.condition)?.style || 'bg-sky-200 border-blue-900 text-slate-600';


    const stylesintrate = [
        { condition: error.interest, style: 'bg-red-500 border-red-500 shadow-lg' },
        { condition : interestActive, style : 'bg-lime-400 border-lime-400 shadow-lg text-slate-600'}
        ];
    const borderINterestRte = stylesintrate.find(item => item.condition)?.style || 'bg-sky-200 border-blue-900 text-slate-600';


  return (
    <section className="w-full flex flex-col space-y-5">
        {/* Header Section */}
        <div className="flex justify-between items-center">
            <h1 className="font-palanquin font-bold text-xl text-blue-950">Mortgage Calculator</h1>
            <p className="underline text-sm text-blue-900 font-montserrat hover:cursor-pointer" onClick={clearHandle}>Clear All</p>
        </div>

        {/* Mortgage Amount Section */}
        <div className="flex flex-col space-y-2">
            <p className="text-lg font-palanquin text-blue-950">Mortgage Amount</p>
            <div className={`flex flex-row justify-start items-center rounded-md border ${borderMa}`}>
            <div className={`w-[10%] flex justify-center ${borderMa} h-full rounded-l-[5px]`}>
                <p className="text-lg font-bold">£</p>
            </div>
            <input
                ref={amountRef}
                onFocus={amountFocus}
                onBlur={amountBlur}
                type="text"
                required
                className="w-[90%] px-2 py-1 outline-none rounded-r-md"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            </div>
        </div>

        {/* Mortgage Term and Interest Rate Section */}
        <div className="flex justify-between space-x-5">
            <div className="flex flex-col w-[45%] space-y-2">
            <p className="text-lg font-palanquin text-blue-950">Mortgage Term</p>
            <div className={`flex flex-row justify-start items-center rounded-md border ${borderMrtTerm}`}>
                <input
                ref={mrtRef}
                onFocus={mrtFocus}
                onBlur={mrtBlur}
                type="text"
                required
                className="w-[70%] px-2 py-1 outline-none rounded-l-md"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                />
                <div className={`w-[30%] flex justify-center items-center ${borderMrtTerm} h-full rounded-r-[5px]`}>
                <p className="text-slate-700 font-palanquin text-md">years</p>
                </div>
            </div>
            </div>

            <div className="flex flex-col w-[45%] space-y-2">
            <p className="text-lg font-palanquin text-blue-950">Interest Rate</p>
            <div className={`flex flex-row justify-start items-center rounded-md border ${borderINterestRte}`}>
                <input
                ref={intRef}
                onFocus={intFocus}
                onBlur={intBlur}
                type="text"
                required
                className="w-[80%] px-2 py-1 outline-none rounded-l-md"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                />
                <div className={`w-[20%] flex justify-center items-center ${borderINterestRte} h-full rounded-r-[5px]`}>
                <p className="text-center text-slate-700 font-palanquin text-md">%</p>
                </div>
            </div>
            </div>
        </div>

        {/* Mortgage Type Section */}
        <div className="flex flex-col space-y-2">
            <p className="text-lg font-palanquin text-blue-950">Mortgage Type</p>
            <div className={`w-full flex flex-row h-10 justify-start items-center gap-5 p-3 border ${selectedOption === 'repayment' ? 'border-lime-400 bg-lime-100 shadow-lg' : 'border-blue-900'} rounded-md`}>
            <input
                type="radio"
                name="option"
                value="repayment"
                checked={selectedOption === 'repayment'}
                onChange={handleChange}
                className={`${selectedOption === 'repayment' ? 'border-lime-400' : ''} hover:cursor-pointer`}
            />
            <p className="text-sm font-semibold font-montserrat text-slate-700">Repayment</p>
            </div>
            <div className={`w-full flex flex-row h-10 justify-start items-center gap-5 p-3 border ${selectedOption === 'interest' ? 'border-lime-400 bg-lime-100 shadow-lg' : 'border-blue-900'} rounded-md`}>
            <input
                type="radio"
                name="option"
                value="interest"
                checked={selectedOption === 'interest'}
                onChange={handleChange}
                className={`${selectedOption === 'interest' ? 'border-lime-400' : ''} hover:cursor-pointer`}
            />
            <p className="text-sm font-semibold font-montserrat text-slate-700">Interest Only</p>
            </div>
        </div>

        {/* Button Section */}
        <div>
            <Buttons inputValues={data} onClick={calculateMortgage}/>
        </div>
    </section>

  )
}

export default MortgageInput