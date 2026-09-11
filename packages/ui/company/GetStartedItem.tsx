import {
  ArrowsPointingInIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import {
  DocumentTextIcon,
  AcademicCapIcon,
  ArrowUpTrayIcon,
  HandRaisedIcon,
  EyeIcon,
  HomeIcon,
  BanknotesIcon,
  ArrowsRightLeftIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  ArrowPathIcon,
} from "@heroicons/react/24/solid";

const iconMap = {
  applicationIcon: DocumentTextIcon,
  loanEducationIcon: AcademicCapIcon,
  uploadDocumentIcon: ArrowUpTrayIcon,
  peaceHand: HandRaisedIcon,
  reviewIcon: EyeIcon,
  consolidationIcon: ArrowsPointingInIcon,
  creditCardIcon: CreditCardIcon,
  homeIcon: HomeIcon,
  downPaymentIcon: BanknotesIcon,
  buyBeforeSellIcon: ArrowsRightLeftIcon,
  selfEmployedIcon: BriefcaseIcon,
  investmentIcon: BuildingOffice2Icon,
  refinanceIcon: ArrowPathIcon,
} as const;

/** Ported from 1stclassnextjs/src/app/components/GetStartedItem.js */
export function GetStartedItem({
  iconName,
  title,
  description,
}: {
  iconName: keyof typeof iconMap;
  title: string;
  description: string;
}) {
  const Icon = iconMap[iconName] || DocumentTextIcon;
  return (
    <div className="relative p-4 lg:p-12 pt-12 lg:pt-20 text-center rounded-lg bg-white mx-[8%] mt-8 shadow-[0_8px_16px_rgba(145,149,157,0.3)]">
      <div className="absolute top-[-32px] left-4 h-16 w-16 bg-[#f5bb54] flex items-center justify-center rounded-md">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-left text-xl font-semibold mb-2">{title}</h3>
      <p className="text-left text-base">{description}</p>
    </div>
  );
}
