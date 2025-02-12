

const FrontResult = ({output}) => {
    console.log(output)
  return (
    <section className="h-full w-full"> {/* Ensure full height for the section */}
      <div className="flex flex-col justify-start gap-5 bg-teal-900 rounded-r-3xl rounded-bl-[80px] max-sm:rounded-none p-10 h-full w-full">
        <div className="">
            <h1 className="text-justify text-slate-200 text-3xl font-extrabold font-palanquin">Your results</h1>
            <p className="text-balanced font-montserrat text-sm text-slate-200 mt-5">Your results are shown below based on the information you provided. To adjust the results edit the form and click calculate the repayments again.</p>
        </div>
        <div className="flex justify-center w-full">
            <div className="w-full bg-teal-950 p-10 rounded-lg border-t-4 border-lime-200 flex flex-col gap-0">
                <div className="flex-1 flex flex-col">
                    <p className="text-slate-400 text-md font-montserrat">Your monthly repayments.</p>
                    <h1 className="text-lime-400 text-6xl font-montserrat font-semibold my-5">£{output.monthlyRepayment}</h1>
                </div>

                {output.totalmonthlyRepayment && 
                <div className="flex-1 flex flex-col border-t border-slate-500">
                    <p className="text-slate-400 text-md font-montserrat mt-5">{`Total you'll repay over the term.`} </p>
                    <h1 className="text-slate-200 text-2xl font-montserrat font-semibold mt-5">£{output.totalmonthlyRepayment}</h1>
                </div>
                }
            </div>
        </div>
      </div>
    </section>
  );
};

export default FrontResult;