import img from "../assets/assets/images/illustration-empty.svg";

const Result = () => {
  return (
    <section className="h-full w-full"> {/* Ensure full height for the section */}
      <div className="flex flex-col justify-center items-center gap-5 bg-teal-900 rounded-r-3xl rounded-bl-[80px] max-sm:rounded-none p-10 h-full w-full">
        <img src={img} alt="result img" className="w-2/4 object-contain bg-cover"/>
        <h1 className="text-slate-200 text-lg font-bold font-palanquin">Results shown here</h1>
        <p className="text-center font-montserrat text-sm text-slate-200">Complete the form and click {`"calculate repayments"`} to see what your monthly repayments will be.</p>
      </div>
    </section>
  );
};

export default Result;
