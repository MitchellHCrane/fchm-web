import { notFound } from "next/navigation";
import { domainKeys, getCompanyTenant } from "@content/company";
import { Navbar } from "@ui/company/Navbar";
import { Banner } from "@ui/company/Banner";
import { Footer } from "@ui/company/Footer";

export const dynamicParams = false;

export function generateStaticParams() {
  return domainKeys.map((domain) => ({ domain }));
}

type Params = Promise<{ domain: string }>;

export default async function CompanyLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { domain } = await params;
  const tenant = getCompanyTenant(domain);
  if (!tenant) notFound();

  return (
    <div className="flex flex-col mx-auto bg-white">
      <Navbar phone={tenant.phone} />
      <Banner />
      {children}
      <Footer phone={tenant.phone} address={tenant.address} />
    </div>
  );
}
