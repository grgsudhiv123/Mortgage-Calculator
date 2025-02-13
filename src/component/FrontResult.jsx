const FrontResult = ({ output }) => {
  return (
        <section className="h-full w-full">
        <div className="flex flex-col justify-start gap-5 bg-teal-900 rounded-r-3xl rounded-bl-[80px] max-sm:rounded-none p-8 sm:p-10 h-full w-full">
            <div>
            <h1 className="text-justify text-slate-200 text-2xl sm:text-3xl font-extrabold font-palanquin">
                Your results
            </h1>
            <p className="text-balanced text-sm sm:text-base font-montserrat text-slate-200 mt-5">
                Your results are shown below based on the information you provided. To adjust the results, edit the form and click {`Calculate Repayments`} again.
            </p>
            </div>

            <div className="flex justify-center w-full">
            <div className="w-full max-w-3xl bg-teal-950 p-6 sm:p-10 rounded-lg border-t-4 border-lime-200 flex flex-col gap-6">
                <div className="flex-1 flex flex-col">
                <p className="text-slate-400 text-md font-montserrat">
                    Your monthly repayments.
                </p>
                <h1 className="text-lime-400 text-4xl sm:text-5xl md:text-6xl font-montserrat font-semibold my-3 sm:my-5">
                    £{output.monthlyRepayment}
                </h1>
                </div>

                {output.totalmonthlyRepayment && (
                <div className="flex-1 flex flex-col border-t border-slate-500 pt-5">
                    <p className="text-slate-400 text-md font-montserrat">
                    {`Total you'll repay over the term.`}
                    </p>
                    <h1 className="text-slate-200 text-xl sm:text-2xl font-montserrat font-semibold mt-2 sm:mt-3">
                    £{output.totalmonthlyRepayment}
                    </h1>
                </div>
                )}
            </div>
            </div>
        </div>
        </section>
  );
};

export default FrontResult;
