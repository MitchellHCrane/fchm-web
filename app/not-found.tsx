import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "60vh",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
        padding: "48px 24px",
      }}
    >
      <div>
        <h1>Page not found</h1>
        <p>The page you&apos;re looking for doesn&apos;t exist.</p>
        <p style={{ marginTop: 24 }}>
          <Link href="https://1stclasshomemortgage.com">
            Go to First Class Home Mortgage
          </Link>
        </p>
      </div>
    </main>
  );
}
