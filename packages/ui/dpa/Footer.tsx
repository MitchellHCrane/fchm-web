import { shared } from "@config/site";

/** Ported from dpa-1stclass/src/app/components/Footer.tsx */
export function Footer() {
  const address = shared.company.address;
  return (
    <footer className="pb-9 bg-[#004e82] w-full mt-40">
      <div className="grid max-w-[1024px] md:grid-cols-3 justify-center text-center px-0 md:px-0 md:py-16 gap-12 mx-auto">
        <div className="mt-8 md:mt-0 mx-8 md:mx-0">
          <h3 className="text-white text-lg mb-2">Contact</h3>
          <p className="text-white text-sm leading-4 m-0">
            Phone: <a href="tel:385-999-1871" className="text-[#2ca4f2] cursor-pointer">(385)-999-1871</a>
          </p>
          <p className="text-white text-sm leading-4 m-0">
            Fax: <span className="text-[#2ca4f2]">{shared.company.fax}</span>
          </p>
          <p className="text-white text-sm leading-4 m-0">
            Email: <a className="text-[#2ca4f2] cursor-pointer" href="mailto:loans@troywarner.com">loans@troywarner.com</a>
          </p>
        </div>
        <div className="mt-8 md:mt-0 mx-8 md:mx-0">
          <h3 className="text-white text-lg mb-2">License Info</h3>
          <p className="text-white text-sm leading-4 m-0">{shared.company.stateDisclosure}</p>
          <a className="text-[#2ca4f2] cursor-pointer text-sm" href="https://1stclasshomemortgage.com/privacy-policy">
            Privacy Policy
          </a>
        </div>
        <div className="mt-8 md:mt-0 mx-8 md:mx-0">
          <h3 className="text-white text-lg mb-2">Address</h3>
          <p className="text-white text-sm leading-4 m-0">{shared.company.legalName}</p>
          <p className="text-white text-sm leading-4 m-0">
            <a href={address.mapsUrl} target="_blank" rel="noreferrer" className="text-[#2ca4f2] cursor-pointer">
              {address.line1},
              <br /> {address.line2}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
