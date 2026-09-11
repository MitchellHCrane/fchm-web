/**
 * Down-payment-assistance microsite, migrated from `dpa-1stclass`. The
 * original stored copy as JSX inside a TS array (`paragraph: JSX.Element`),
 * which can't be zod-validated or reused outside React. Converted here to a
 * small serializable rich-text shape (`Span[]`) rendered by
 * `@ui/dpa/RichText`.
 */
export interface Span {
  text: string;
  bold?: boolean;
  href?: string;
}
export type RichText = Span[];

export interface AssistanceProgram {
  title: string;
  paragraph: RichText;
  bulletPoints: RichText[];
}

export const dpa = {
  host: "dpa.1stclasshomemortgage.com",
  title: "Down Payment Assistance Programs | First Class Home Mortgage",
  description:
    "Utah down payment assistance programs explained: Utah Housing Corporation, South Jordan, and Provo. See who qualifies and how to apply.",
  guidePdf: "/dpa/ultGuide.pdf",

  programs: [
    {
      title: "Utah Housing Corporation Down Payment Assistance Program",
      paragraph: [
        {
          text: "While the UHC Down Payment Assistance Program is not limited to first-time homebuyers, it can be used by first-time homebuyers to qualify to purchase homes with little to no money down in Utah. The Down Payment Assistance Program through the Utah Housing Corporation acts as a second mortgage and allows borrowers to finance their down payment and closing costs.",
        },
      ],
      bulletPoints: [
        [
          { text: "Program name – ", bold: true },
          { text: "Down Payment Assistance Program" },
        ],
        [
          { text: "Administering organization – ", bold: true },
          { text: "Utah Housing Corporation" },
        ],
        [
          { text: "Who qualifies – ", bold: true },
          {
            text: "Homebuyers can qualify if they have not been able to save up enough money for a down payment or closing costs and who participate in one of UHC's qualifying home loan programs. Homebuyers must have a minimum credit score of 620. The down payment assistance is a second mortgage of up to 6% of the amount of the first mortgage with an interest rate of 1% higher than that of the first mortgage.",
          },
        ],
        [
          { text: "Restrictions on qualifying – ", bold: true },
          { text: "Borrowers must be financing their homes through one of " },
          {
            text: "UHC's qualifying mortgage programs",
            href: "https://utahhousingcorp.org/pdf/Form211.pdf",
          },
          {
            text: ", including the FirstHome program for first-time homebuyers with credit scores of at least 660, FHA or VA loans for borrowers with minimum credit scores of at least 620, or conventional HFA Advantage loans for borrowers with minimum credit scores of at least 700.",
          },
        ],
        [
          { text: "How to apply – ", bold: true },
          {
            text: "To apply for down payment assistance through the Utah Housing Corporation, you must first qualify for a UHC mortgage loan through a participating lender. Tell your lender you want to get a UHC mortgage and would like to apply for down payment assistance. The lender will submit your application for assistance once you qualify for a UHC mortgage loan. There are a limited number of grants available.",
          },
        ],
      ],
    },
    {
      title:
        "South Jordan Housing Downpayment Assistance Program (South Jordan, UT)",
      paragraph: [
        { text: "The City of South Jordan offers a generous " },
        {
          text: "downpayment assistance program",
          href: "https://www.sjc.utah.gov/509/Redevelopment-Agency-Housing-Programs",
        },
        {
          text: " for individuals wanting to buy homes in South Jordan who have low to moderate incomes. The assistance provides 7.5% of the home's purchase price or $20,000, whichever is lower. The funds are provided as a forgivable loan with no payments or interest while the homeowner lives in the home. If the homeowner remains in the home for 10 years, the loan will be forgiven and converted to a grant.",
        },
      ],
      bulletPoints: [
        [
          { text: "Program name – ", bold: true },
          { text: "South Jordan Housing Downpayment Assistance Program" },
        ],
        [
          { text: "Administering organization – ", bold: true },
          { text: "South Jordan Redevelopment Agency" },
        ],
        [
          { text: "Who qualifies – ", bold: true },
          {
            text: "Buyers who have low to moderate incomes, wish to purchase homes within the South Jordan city limits, and would otherwise not be able to afford to buy homes.",
          },
        ],
        [
          { text: "Restrictions on qualifying – ", bold: true },
          {
            text: "Buyers must meet the program's income guidelines and remain in the home for 10 years to avoid having to repay the assistance amount. If they sell before 10 years, they will have to repay a prorated amount based on the time they have remained in the home. If they rent the home out or sell it within the first two years, they will have to repay the loan and pay an additional $5,000 penalty. Buyers must contribute $1,000 of their own funds toward the purchase and can't have more than $15,000 in liquid assets after closing. Buyers must attend a homeownership class and submit the certificate with their application materials or a receipt showing the course has begun.",
          },
        ],
        [
          { text: "How to apply – ", bold: true },
          { text: "Buyers meeting the city's income guidelines for the program can " },
          {
            text: "download the application",
            href: "https://www.sjc.utah.gov/DocumentCenter/View/1639/RDA-Down-Payment-Assistance-Application-PDF",
          },
          {
            text: " from the city's website and print it out. They should gather all of the required documentation listed in the application and submit copies of the documents together with the application to the South Jordan Redevelopment Agency.",
          },
        ],
        [
          { text: "Program contact information/learn more – ", bold: true },
          {
            text: "For more information, call the City of South Jordan at 801-446-HELP. Address: City of South Jordan, 1600 W Towne Center Drive, South Jordan, UT 84095.",
          },
        ],
      ],
    },
    {
      title: "Home Purchase Plus (Provo, UT)",
      paragraph: [
        {
          text: "For first-time homebuyers who want to purchase homes in Provo and are thus not eligible for the Loan to Own Program, Provo Development Services offers the ",
        },
        {
          text: "Home Purchase Plus program",
          href: "https://www.provo.org/departments/development/cdbg-home/home-purchase-plus-program",
        },
        {
          text: ". This program offers a zero-interest, deferred loan to buyers in Provo for the minimum down payment required by the type of mortgage they get (3.5% for FHA/5% for conventional), estimated closing costs, and another 5% or 3.5% up to a maximum of $40,000. Buyers do not have to repay the loan as long as they remain in the home. They will have to repay it at the time they sell the home. If they vacate the home or sell it within the first two years, they will also have to pay a $5,000 penalty.",
        },
      ],
      bulletPoints: [
        [{ text: "Program name – ", bold: true }, { text: "Provo Home Purchase Plus" }],
        [
          { text: "Administering organization – ", bold: true },
          { text: "Provo Development Services" },
        ],
        [
          { text: "Who qualifies – ", bold: true },
          { text: "Buyers must qualify for a mortgage and meet the program's " },
          {
            text: "income requirements",
            href: "https://www.provo.org/home/showpublisheddocument/22558/638224090160170000",
          },
          { text: ". They must also have a credit score above 650." },
        ],
        [
          { text: "Restrictions on qualifying – ", bold: true },
          {
            text: "Single homebuyers can only purchase a maximum two-bedroom home. Applicants must contribute $1,000 of their own funds to the transaction and not have liquid assets of more than $15,000 after closing. The home's purchase price cannot exceed current HUD guidelines. Buyers must complete a pre-homeownership course through Community Action or NeighborWorks Provo. They can also complete the following online course: ",
          },
          {
            text: "https://extension.learn.usu.edu/browse/home-buyer/courses/home-buyer-education-2022",
            href: "https://extension.learn.usu.edu/browse/home-buyer/courses/home-buyer-education-2022",
          },
          { text: "." },
        ],
        [
          { text: "How to apply – ", bold: true },
          {
            text: "Buyers can register and then scroll down to find the Loan to Own program under downpayment assistance on the ",
          },
          {
            text: "Neighborly Provo portal",
            href: "https://portal.neighborlysoftware.com/provout/participant",
          },
          { text: ". They can complete and submit the application online." },
        ],
        [
          { text: "Program contact information/learn more – ", bold: true },
          {
            text: "For more information, call Provo Development Services at (801) 852-6400. Address: Development Services, 445 W Center St Suite 200, Provo, UT 84601.",
          },
        ],
      ],
    },
  ] as AssistanceProgram[],
};

export type DpaContent = typeof dpa;
