import { GetStartedItem } from "./GetStartedItem";

/** Ported from 1stclassnextjs/src/app/components/GetStarted.js */
export function GetStarted() {
  return (
    <div className="bg-white mb-16" id="getStarted">
      <div className="bg-[url('/company/images/getStartedBackground.png')] bg-[#2ca4f2] bg-center bg-no-repeat bg-cover px-[8%] pt-16 pb-40">
        <h2 className="text-white text-center text-3xl font-bold">We Can Help!</h2>
        <p className="text-white text-center text-lg mt-4">
          Take the stress out of buying a home by working with First Class Home Mortgage specialists. Learn which home loan
          options are right for you and how the mortgage process works. We guide you through each step.
        </p>
      </div>

      <div className="max-w-[1024px] mx-auto mt-[-96px] grid grid-cols-1 justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <GetStartedItem
          title="First-Time Homebuyers"
          description="New to buying? We walk you through every step and match you with first-time buyer programs and low-down-payment loans."
          iconName="homeIcon"
        />
        <GetStartedItem
          title="Down Payment Assistance"
          description="Short on the down payment? We offer grant and assistance programs that can cover some or all of it."
          iconName="downPaymentIcon"
        />
        <GetStartedItem
          title="Buy Before You Sell"
          description="Found your next home but haven't sold your current one? We have loan options that let you buy first and sell later."
          iconName="buyBeforeSellIcon"
        />
        <GetStartedItem
          title="Self-Employed Borrowers"
          description="1099, business owner, or gig income? We have bank-statement and alternative-documentation loans built for you."
          iconName="selfEmployedIcon"
        />
        <GetStartedItem
          title="Investment Properties"
          description="Growing your portfolio? Financing for rentals, second homes, and multi-unit investment properties."
          iconName="investmentIcon"
        />
        <GetStartedItem
          title="Refinance & Debt Consolidation"
          description="Lower your rate, tap your equity, or roll high-interest debt into one lower monthly payment."
          iconName="refinanceIcon"
        />
      </div>
    </div>
  );
}
