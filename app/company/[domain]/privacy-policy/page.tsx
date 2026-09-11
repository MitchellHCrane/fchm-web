import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getCompanyTenant } from "@content/company";
import { buildPageMetadata } from "@seo/pageMetadata";

export const dynamic = "error";

type Params = Promise<{ domain: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { domain } = await params;
  const tenant = getCompanyTenant(domain);
  if (!tenant) return {};
  const url = `https://${tenant.host}/privacy-policy`;
  return buildPageMetadata({
    url,
    title: "Privacy Notice Policy | First Class Home Mortgage",
    description: "First Class Home Mortgage's GLBA / Regulation P privacy notice policy.",
    ogImage: `https://${tenant.host}/company/images/fcLogo.png`,
  });
}

export default async function PrivacyPolicyPage({ params }: { params: Params }) {
  const { domain } = await params;
  const tenant = getCompanyTenant(domain);
  if (!tenant) notFound();

  return (
    <div className="bg-gray-100 p-6">
      <Link href="/" className="underline">
        Back
      </Link>
      <h1 className="text-3xl font-bold mb-4 mt-2">Privacy Notice Policy</h1>
      <p className="mb-4">Revision Date: 10/16/2023</p>

      <h2 className="text-xl font-bold mb-2">1. Overview</h2>
      <p className="mb-4">
        Section 502-509 of title V of the Gramm-Leach-Bliley Act (GLBA), and its implementing Regulation P, (also known as
        the Privacy Rule) requires financial institutions to provide notice to customers about their privacy policies and
        practices; describe the conditions under which they may disclose nonpublic personal information about consumers to
        nonaffiliated third parties; and provide a method for consumers to prevent companies from disclosing that
        information to most nonaffiliated third parties by opting-out of that disclosure. Furthermore, the Fair Credit
        Reporting Act (FCRA) and the Right to Financial Privacy Act (RFPA) contain provisions to ensure protection of the
        financial information of consumers.
      </p>

      <h2 className="text-xl font-bold mb-2">2. Definitions</h2>
      <p>The following definitions apply to this Policy:</p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Consumer - means an individual who obtains or has obtained from a financial institution a financial product or
          service that is to be used primarily for personal, family, or household purposes and includes such an
          individual&apos;s legal representative. A consumer includes an individual who provides nonpublic personal
          information in order to obtain a determination about whether he or she qualifies for a loan. A consumer also
          includes an individual who applies for a loan, regardless of whether credit is extended to that person.
        </li>
        <li>
          Customer- means a consumer who has a &ldquo;customer relationship&rdquo; with a financial institution. A
          &ldquo;customer relationship&rdquo; is a continuing relationship between a consumer and a financial institution
          under which the institution provides one or more financial products or services to the consumer that are to be
          used primarily for personal, family, or household purposes.
        </li>
        <li>
          Nonpublic Personal Information - means any information that is not publicly available and that a consumer
          provides to a financial institution to obtain a financial product or service from the institution; results from
          a transaction between the consumer and the institution involving a financial product or service; or a financial
          institution otherwise obtains about a consumer in connection with providing a financial product or service.
        </li>
      </ul>

      <h2 className="text-xl font-bold mb-2">3. Policy Statement</h2>
      <p className="mb-2">
        First Class Home Mortgage requires all employees, affiliates, and service providers to comply with all consumer
        protection regulations regarding the privacy and disclosure of consumer information. First Class Home Mortgage also
        complies with all disclosure requirements regarding its privacy policies and practices by providing customers with
        a privacy notice that clearly describes First Class Home Mortgage&apos;s practice of collecting, protecting, and
        sharing customer&apos;s nonpublic personal information (NPI) with affiliates and third parties at the time that a
        customer relationship is established. Wherever local privacy regulations are more stringent than the requirements
        set forth in this Policy, the more stringent requirement will be followed.
      </p>
      <p className="mb-4">
        First Class Home Mortgage will send a copy of the privacy notice to all new customers in the timeframes specified in
        the Privacy Rule. First Class Home Mortgage will also provide a privacy notice annually during the continuation of
        the customer relationship, if applicable.
      </p>

      <h2 className="text-xl font-bold mb-2">4. Privacy Notice Requirements</h2>
      <p className="mb-4">
        First Class Home Mortgage complies with the following privacy notice requirements under the GLBA and, when
        applicable, the FCRA. Further, the GLBA provides that First Class Home Mortgage will obtain a &ldquo;safe
        harbor&rdquo; and will satisfy the disclosure requirements for notices if it chooses to use the model form provided
        under the GLBA.
      </p>
      <div className="bg-white p-4 rounded-lg mb-4">
        <h3 className="text-lg font-bold mb-2">A. Initial Privacy Notices</h3>
        <p className="mb-2">
          First Class Home Mortgage is required to provide an initial privacy notice to customers when a customer
          establishes a relationship with First Class Home Mortgage by providing any personally identifiable financial
          information in an effort to obtain a mortgage loan.
        </p>
        <p className="mb-2">
          First Class Home Mortgage is also required to provide a consumer a privacy notice before sharing NPI with
          nonaffiliated third parties outside of the exceptions described below. If First Class Home Mortgage doesn&apos;t
          share information with nonaffiliated third parties, or if it only shares within the exceptions, First Class Home
          Mortgage does not have to provide a privacy notice to consumers.
        </p>
        <p className="mb-2">
          If First Class Home Mortgage is required to provide a privacy notice to consumers, it may choose to give a
          &ldquo;short-form notice&rdquo; instead of a full privacy notice. The short-form notice must:
        </p>
        <ul className="list-disc list-inside">
          <li>explain that First Class Home Mortgage&apos;s full privacy notice is available on request;</li>
          <li>describe a reasonable way that consumers may obtain the full privacy notice; and</li>
          <li>include an opt-out notice.</li>
        </ul>
      </div>
      <div className="bg-white p-4 rounded-lg mb-4">
        <h3 className="text-lg font-bold mb-2">B. Annual Privacy Notices</h3>
        <p>
          First Class Home Mortgage also sends annual privacy notices to their customers during the continuation of the
          customer relationship, if applicable. The annual notice must accurately describe First Class Home
          Mortgage&apos;s privacy policies and practices in effect at the time the notice is sent.
        </p>
        <p>
          Annually means at least once in any period of 12 consecutive months during which that relationship exists. First
          Class Home Mortgage does not send privacy notices after the relationship with the customer has ended.
        </p>
      </div>
      <div className="bg-white p-4 rounded-lg mb-4">
        <h3 className="text-lg font-bold mb-2">C. Information Included in Privacy Notices</h3>
        <p>The privacy notice includes:</p>
        <ul className="list-disc list-inside">
          <li>The categories of NPI that First Class Home Mortgage collects;</li>
          <li>The categories of NPI that First Class Home Mortgage discloses;</li>
          <li>The categories of affiliates and nonaffiliated third parties to whom First Class Home Mortgage discloses NPI;</li>
          <li>
            The categories of NPI about former customers that First Class Home Mortgage discloses and the categories of
            affiliates and nonaffiliated third parties to whom First Class Home Mortgage discloses NPI about former
            customers;
          </li>
          <li>
            If First Class Home Mortgage discloses NPI to a nonaffiliated third party, a separate statement of the
            categories of information it discloses and the categories of third parties with whom First Class Home Mortgage
            has contracted;
          </li>
          <li>
            An explanation of the consumer&apos;s right under Regulation P §1016.10(a) to opt-out of the disclosure of NPI
            to nonaffiliated third parties, including the method(s) by which the consumer may exercise that right at that
            time;
          </li>
          <li>
            Any disclosures made under section the Fair Credit Reporting Act (that is, notices regarding the ability to
            opt-out of disclosures of information among affiliates); and
          </li>
          <li>First Class Home Mortgage policies and practices with respect to protecting the confidentiality and security of NPI.</li>
        </ul>
      </div>
      <div className="bg-white p-4 rounded-lg mb-4">
        <h3 className="text-lg font-bold mb-2">D. Exceptions to Privacy Notice Requirement</h3>
        <p>
          Exceptions for processing transactions at consumer&apos;s request - Exceptions to the initial privacy notice,
          opt-out and for service providers and joint marketing do not apply if First Class Home Mortgage discloses NPI as
          necessary to effect, administer, or enforce a transaction that a consumer requests or authorizes, or in
          connection with:
        </p>
        <ul className="list-disc list-inside">
          <li>Servicing or processing a financial product or service that a consumer requests or authorizes;</li>
          <li>
            Maintaining or servicing the consumer&apos;s account with First Class Home Mortgage, or with another entity as
            part of a private label credit card program or other extension of credit on behalf of such entity;
          </li>
          <li>
            A proposed or actual securitization, secondary market sale (including sales of servicing rights), or similar
            transaction related to a transaction of the consumer.
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">5. Opt-Out Notice</h2>
        <p>
          Opt-out means a direction by the consumer that First Class Home Mortgage may not disclose NPI about that consumer
          to a nonaffiliated third party, other than as permitted by law. The opt-out notice is a clear and conspicuous
          notice to all customers that accurately explains the right to opt-out under that section. The notice states:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>that First Class Home Mortgage discloses or reserves the right to disclose NPI about a consumer to a nonaffiliated third party;</li>
          <li>that the consumer has the right to opt-out of that disclosure; and</li>
          <li>a reasonable means by which the consumer may exercise the opt-out right.</li>
        </ul>
      </div>
      <div className="bg-white p-4 rounded-lg mb-4">
        <h3 className="text-lg font-bold mb-2">A. Exceptions to Opt-Out Notice</h3>
        <p>The requirements for initial notice and for service providers and joint marketing do not apply when First Class Home Mortgage discloses NPI:</p>
        <ul className="list-disc list-inside">
          <li>With the consent or at the direction of the consumer, provided that the consumer has not revoked the consent or direction;</li>
          <li>To protect the confidentiality or security of First Class Home Mortgage records pertaining to the consumer, service, product, or transaction;</li>
          <li>To protect against or prevent actual or potential fraud, unauthorized transactions, claims, or other liability;</li>
          <li>For required institutional risk control or for resolving consumer disputes or inquiries;</li>
          <li>
            To persons holding a legal or beneficial interest relating to the consumer or acting in a fiduciary or
            representative capacity on behalf of the consumer;
          </li>
          <li>
            To provide information to insurance rate advisory organizations, guaranty funds or agencies, agencies that are
            rating First Class Home Mortgage, persons that are assessing First Class Home Mortgage compliance with
            industry standards, and First Class Home Mortgage attorneys, accountants, and auditors;
          </li>
          <li>
            To the extent specifically permitted or required under other provisions of law and in accordance with the
            Right to Financial Privacy Act of 1978, to law enforcement agencies (including the Bureau, a Federal
            functional regulator, the Secretary of the Treasury, with respect to 31 U.S.C. Chapter 53, Subchapter II
            (Records and Reports on Monetary Instruments and Transactions) and 12 U.S.C. Chapter 21 (Financial
            Recordkeeping), a state insurance authority, with respect to any person domiciled in that insurance
            authority&apos;s state that is engaged in providing insurance, and the Federal Trade Commission),
            self-regulatory organizations, or for an investigation on a matter related to public safety;
          </li>
          <li>To a consumer reporting agency in accordance with the Fair Credit Reporting Act;</li>
          <li>From a consumer report reported by a consumer reporting agency;</li>
          <li>
            In connection with a proposed or actual sale, merger, transfer, or exchange of all or a portion of a business
            or operating unit if the disclosure of NPI concerns solely consumers of such business or unit;
          </li>
          <li>To comply with Federal, State, or local laws, rules and other applicable legal requirements;</li>
          <li>
            To comply with a properly authorized civil, criminal, or regulatory investigation, or subpoena or summons by
            Federal, state, or local authorities; or
          </li>
          <li>
            To respond to judicial process or government regulatory authorities having jurisdiction over First Class Home
            Mortgage for examination, compliance, or other purposes as authorized by law.
          </li>
        </ul>
      </div>

      <h2 className="text-xl font-bold mb-2">6. Revised Notices</h2>
      <p>
        The Privacy Rule is designed to enable consumers to make opt-out decisions based on an accurate description of a
        financial institution&apos;s privacy policies and practices. Before disclosing NPI about a consumer to a
        nonaffiliated third party other than as described in First Class Home Mortgage&apos;s most recent privacy notice,
        First Class Home Mortgage must provide the consumer a revised initial notice, a new opt-out notice, and reasonable
        opportunity to opt out. A revised notice is not required in the instance where First Class Home Mortgage makes a
        change to disclose NPI to a new nonaffiliated third party that was adequately described in its prior notice.
      </p>

      <h2 className="text-xl font-bold mb-2">7. Delivery Requirements</h2>
      <p>
        First Class Home Mortgage provides the required privacy and opt-out notices simultaneously. First Class Home
        Mortgage provides privacy notices and opt-out notices so that each consumer can reasonably be expected to receive
        actual notice in writing. The notice can be hand-delivered, mailed, or, if the consumer consents, delivered
        electronically.
      </p>

      <h2 className="text-xl font-bold mb-2">8. Prohibition on Disclosure of Account Notices</h2>
      <p>
        The Privacy Rule prohibits financial institutions from sharing account numbers or similar access numbers or codes
        for marketing purposes. This prohibition applies even when a consumer or customer has not opted-out of the
        disclosure of NPI concerning his or her account. Under no circumstances will First Class Home Mortgage disclose,
        other than to consumer reporting agencies, access codes or account numbers for use in marketing.
      </p>

      <h2 className="text-xl font-bold mb-2">9. Limitations on Redisclosure or Reuse of NPI</h2>
      <p>When a financial institution receives NPI from a nonaffiliated financial institution, its disclosure and use of the information is limited as follows:</p>
      <ul className="list-disc list-inside mb-4">
        <li>For NPI received under any of the privacy and opt-out notice exceptions outlined above, the financial institution is limited to:</li>
        <ul className="list-disc list-inside">
          <li>Disclosing the information to the affiliates of the financial institution from which it received the information;</li>
          <li>
            Disclosing the information to its own affiliates, who may, in turn, disclose and use the information only to
            the extent that the financial institution can do so;
          </li>
          <li>
            Disclosing and using the information pursuant to any of the privacy and opt-out notice exceptions outlined
            above (for example, an institution receiving information for account processing could disclose the
            information to its auditors).
          </li>
        </ul>
        <li>
          For NPI received other than under any of the privacy and opt-out notice exceptions outlined above, the
          recipient&apos;s use of the information is unlimited, but its disclosure of the information is limited to:
        </li>
        <ul className="list-disc list-inside">
          <li>Disclosing the information to the affiliates of the financial institution from which it received the information;</li>
          <li>
            Disclosing the information to its own affiliates, who may, in turn disclose the information only to the extent
            that the financial institution can do so;
          </li>
          <li>
            Disclosing the information to any other person, if the disclosure would be lawful if made directly to that
            person by the financial institution from which it received the information.
          </li>
        </ul>
      </ul>

      <h2 className="text-xl font-bold mb-2">10. Fair Credit Reporting Act and Privacy</h2>
      <p>
        The Fair Credit Reporting Act (FCRA), among other things, allows financial institutions to share information with
        others about its own transactions or experiences with a consumer. However, when a financial institution shares
        information about third-parties&apos; transactions with a consumer, such as sharing a list of its customers and
        information such as their credit scores with another financial institution to jointly market or sponsor other
        financial products or services, it could cause the financial institution to be considered a consumer reporting
        agency that is subject to strict guidelines under FCRA. Furthermore, civil or criminal penalties could apply if a
        financial institution fails to comply with any requirements of the FCRA.
      </p>
      <p>
        Financial institutions can avoid additional requirements and penalties under FCRA by not providing others with
        information from credit reports or third-party transactions. Additionally, FCRA contains an exception that allows
        financial institutions to share information contained in consumer reports and other information, such as
        information on an application for credit, as long as that information is shared with an affiliate and before the
        information can be used for marketing and solicitation, the financial institution:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>clearly and conspicuously discloses to the consumer that the information may be shared with an affiliate; and</li>
        <li>gives the consumer the opportunity, before the information is shared, to opt-out of having their information shared.</li>
      </ul>
      <p>
        The GLBA notice is sufficient to meet FCRA notice requirements for sharing information with affiliates.
        Furthermore, the FCRA notice and opt-out requirements do not apply to a financial institution if it uses
        eligibility information that it receives from an affiliate to make a solicitation for marketing purposes to a
        consumer with whom the financial institution has a preexisting business relationship.
      </p>

      <h2 className="text-xl font-bold mb-2">11. The Right to Financial Privacy Act</h2>
      <p>
        The Right to Financial Privacy Act (RFPA) protects a customer&apos;s right to privacy with respect to information
        being disclosed to the federal government regarding the financial records maintained about the customer by
        financial institutions. The RFPA is intended to balance the federal government&apos;s need for information when
        conducting a criminal investigation with the customer&apos;s right to privacy. It establishes specific procedures
        that federal government authorities must follow in order to obtain information from a financial institution about
        a customer&apos;s financial records. Generally, these requirements include obtaining subpoenas, notifying the
        customer of the request, and providing the customer with an opportunity to object.
      </p>
      <p>Under the RFPA, the government must reasonably describe the records it wants and may use one of five methods to obtain those records:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Customer Authorization</li>
        <p>
          Under this method the customer must give a signed and dated authorization to both the government and the
          institution. Further, the authorization must state the customer&apos;s rights under the RFPA. In this document,
          the customer must:
        </p>
        <ul>
          <li>Authorize the disclosures for no more than 3 months.</li>
          <li>State that the authorization can be revoked at any time before records are disclosed.</li>
          <li>Identify the records to be disclosed</li>
          <li>Specify the purpose for which, and the government authority to which, records may be disclosed.</li>
        </ul>
        <li>Administrative Subpoena or Summons</li>
        <p>
          A government authority may obtain financial records using an administrative subpoena or summons if there is
          reason to believe the records are relevant to a legitimate law enforcement inquiry. A copy of the subpoena or
          summons must have been served to the customer, or mailed to the customer&apos;s last known address, on or before
          the date on which it was served to the financial institution and it should include a notice regarding the nature
          of the law enforcement inquiry and notify the customer of his or her right, and procedures, to contest the
          inquiry.
        </p>
        <li>Search Warrants</li>
        <p>
          Search warrants must be obtained according to the federal rules of criminal procedure. The customer must receive
          a copy of the search warrant no later than ninety days after it is issued and receive a notice of his or her
          rights under the RFPA.
        </p>
        <li>Judicial Subpoena</li>
        <p>
          A government authority can obtain financial records under a judicial subpoena only if there is a reason to
          believe the records are relevant to a legitimate law enforcement inquiry. When a judicial subpoena is issued, the
          subpoena must have been served to the customer, or mailed to the customer&apos;s last known address, and it must
          state the nature of the law enforcement inquiry and notify the customer of his or her right, and procedures, to
          contest the inquiry.
        </p>
        <li>Formal written request</li>
        <p>A government agency may request financial records using a formal written request only if all of the following conditions are met:</p>
        <ul>
          <li>The government agency doesn&apos;t appear to have legal authority to issue a summons or subpoena;</li>
          <li>The request is authorized by regulation issued by the head of the agency; or</li>
          <li>There is reason to believe the records are relevant to a legitimate law enforcement inquiry.</li>
        </ul>
        <p>
          When a formal written request is used, it must have been served to the customer, or mailed to the customer&apos;s
          last known address, and it must state the nature of the law enforcement inquiry and notify the customer of his
          or her right, and procedures, to contest the inquiry.
        </p>
      </ul>
      <p>The RFPA also contains exceptions for depository institutions under 12 US Code Section 3413, allowing these institutions to, among other things, disclose:</p>
      <ul className="list-disc list-inside mb-4">
        <li>financial records that are not identified with or identified as coming from a particular customer;</li>
        <li>customer financial records to its supervisory agencies;</li>
        <li>financial records or information required by federal statute; and</li>
        <li>financial information in accordance with procedures authorized by the IRS.</li>
      </ul>
    </div>
  );
}
