"use client";
import { useState, useEffect } from "react";

/** Ported verbatim from 1stclassnextjs/src/app/components/MortgageCalc.js */
export function MortgageCalc() {
  const [price, setPrice] = useState("500000");
  const [downPayment, setDownPayment] = useState("100000");
  const [interestRate, setInterestRate] = useState("5.5");
  const [loanTerm, setLoanTerm] = useState("30");
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [downPaymentPercentage, setDownPaymentPercentage] = useState(
    ((Number("100000") / Number("500000")) * 100).toFixed(2),
  );

  useEffect(() => {
    const numericPrice = Number(price || 0);
    const numericDown = Number(downPayment || 0);
    const numericRate = Number(interestRate || 0) / 100;
    const termInMonths = Number(loanTerm || 0) * 12;

    const loanAmount = numericPrice - numericDown;
    const monthlyInterestRate = numericRate / 12;

    if (monthlyInterestRate === 0 || termInMonths === 0) {
      setMonthlyPayment(0);
      return;
    }
    if (!loanAmount || !monthlyInterestRate || !termInMonths) {
      setMonthlyPayment(0);
      return;
    }

    const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, termInMonths);
    const denominator = Math.pow(1 + monthlyInterestRate, termInMonths) - 1;
    const payment = loanAmount * (numerator / denominator);
    setMonthlyPayment(Number.isFinite(payment) ? Number(payment.toFixed(2)) : 0);
  }, [price, downPayment, interestRate, loanTerm]);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value.replace(/^0+(?=\d)/, ""));
  };
  const handleDownPaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDownPayment(value.replace(/^0+(?=\d)/, ""));
    const numVal = Number(value || 0);
    const numPrice = Number(price || 0);
    setDownPaymentPercentage(((numVal / numPrice) * 100).toFixed(2));
  };
  const handleDownPaymentPercentageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const percent = value === "" ? 0 : Math.min(Math.max(Number(value), 0), 100);
    setDownPaymentPercentage(percent.toString());
    const numPrice = Number(price || 0);
    setDownPayment(((percent / 100) * numPrice).toFixed(2));
  };
  const handleInterestRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInterestRate(e.target.value.replace(/^0+(?=\d)/, ""));
  };
  const handleLoanTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoanTerm(e.target.value.replace(/^0+(?=\d)/, ""));
  };

  return (
    <div className="pb-16 px-8 mx-auto max-w-xl mt-10">
      <div className="space-y-6 mb-10">
        <div className="flex justify-between items-center">
          <label className="text-lg font-semibold">Price of Home</label>
          <input type="number" value={price} onChange={handlePriceChange} className="w-1/2 h-12 px-4 border border-gray-400 rounded-lg appearance-none" step={0.01} min={0} />
        </div>

        <div className="flex justify-between items-center">
          <label className="text-lg font-semibold">Down Payment</label>
          <div className="flex flex-col md:flex-row gap-4 w-1/2">
            <div className="md:w-1/2 relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">%</div>
              <input
                type="number"
                value={downPaymentPercentage}
                onChange={handleDownPaymentPercentageChange}
                className="w-full h-12 px-8 pl-10 border border-gray-400 rounded-lg appearance-none"
                step={0.01}
                min={0}
                max={100}
              />
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">$</div>
              <input
                type="number"
                value={downPayment}
                onChange={handleDownPaymentChange}
                className="w-full h-12 px-8 pl-10 border border-gray-400 rounded-lg appearance-none"
                step={0.01}
                min={0}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <label className="text-lg font-semibold">Interest Rate</label>
          <div className="w-1/2 relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">%</span>
            <input type="number" value={interestRate} onChange={handleInterestRateChange} className="w-full h-12 pl-10 pr-4 border border-gray-400 rounded-lg appearance-none" step={0.01} min={0} />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <label className="text-lg font-semibold">Loan Term (Years)</label>
          <input type="number" value={loanTerm} onChange={handleLoanTermChange} className="w-1/2 h-12 px-4 border border-gray-400 rounded-lg appearance-none" step={1} min={1} />
        </div>
      </div>

      <div
        className={`transition-all duration-1000 mt-6 bg-[#004e82] p-4 text-center rounded-lg ${
          monthlyPayment > 0 ? "opacity-100 max-h-40" : "opacity-0 max-h-0 p-0"
        }`}
      >
        <h3 className="text-xl text-[#2ca4f2] font-semibold">Estimated Monthly Payment:</h3>
        <p className="text-2xl font-bold text-white">${monthlyPayment}</p>
      </div>
    </div>
  );
}
