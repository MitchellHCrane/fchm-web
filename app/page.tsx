/**
 * Root of the bare deploy domain (e.g. fchm-web.netlify.app). Real traffic
 * arrives on officer subdomains and is rewritten to /sites/<slug>/ by Netlify
 * (see public/_redirects). This page only shows on the raw Netlify URL.
 */
export default function Index() {
  return (
    <main style={{ padding: "48px 24px", maxWidth: 640, margin: "0 auto" }}>
      <h1>First Class Home Mortgage — sites</h1>
      <p>
        This deployment serves every loan-officer site. Visit an officer&apos;s
        subdomain, or{" "}
        <a href="https://1stclasshomemortgage.com">1stclasshomemortgage.com</a>.
      </p>
    </main>
  );
}
