/** Ported from 1stclassnextjs/src/app/components/TwoBtnCTA.js */
export function TwoBtnCTA({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
}: {
  title: string;
  subtitle: string;
  primaryButton: { label: string; href: string; target?: string };
  secondaryButton: { label: string; href: string; target?: string };
}) {
  return (
    <div className="bg-[#2ca4f2] rounded-lg max-w-7xl mx-auto">
      <div className="mx-auto max-w-5xl px-6 py-16 lg:flex lg:items-center lg:justify-around lg:px-8">
        <div className="flex flex-col gap-y-5 max-w-2xl">
          <h2 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h2>
          <p className="text-lg text-white">{subtitle}</p>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col mt-6 lg:mt-0 gap-4 lg:gap-1 items-center">
          <a
            href={primaryButton.href}
            target={primaryButton.target || "_self"}
            className="rounded-md bg-[#004e82] px-4 py-3 text-lg font-semibold text-white hover:text-[#004e82] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {primaryButton.label}
          </a>
          <span className="text-white font-medium text-lg">or</span>
          <a
            href={secondaryButton.href}
            target={secondaryButton.target || "_self"}
            className="rounded-md bg-white px-4 py-3 text-lg font-semibold text-[#004e82] hover:bg-[#004e82] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {secondaryButton.label}
          </a>
        </div>
      </div>
    </div>
  );
}
