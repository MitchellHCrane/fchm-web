"use client";

import { useMemo, useState } from "react";
import styles from "./LoanCalculator.module.css";

/**
 * In-house replacement for `mortgage-calculator-react@0.1.3` (unmaintained,
 * React 16/17 peer). Same defaults as troywarner/src/Components/LoanCalculator.js.
 */
const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function LoanCalculator() {
  const [price, setPrice] = useState(500_000);
  const [down, setDown] = useState(100_000);
  const [ratePct, setRatePct] = useState(6.5);
  const [years, setYears] = useState(30);

  const monthly = useMemo(() => {
    const principal = Math.max(price - down, 0);
    const i = ratePct / 100 / 12;
    const n = years * 12;
    if (principal === 0) return 0;
    if (i === 0) return principal / n;
    return (principal * i) / (1 - Math.pow(1 + i, -n));
  }, [price, down, ratePct, years]);

  return (
    <div className={styles.loanCalculatorDiv}>
      <div className={styles.loanCalcText}>
        <h2>Loan Calculator</h2>
        <p>Get an estimate of your monthly mortgage payments.</p>
        <p className={styles.small}>
          * For a more accurate estimate, get in touch with me and I will help
          you find the best solution for your needs.
        </p>
      </div>

      <div className={styles.form}>
        <Field label="Home price" value={price} onChange={setPrice} step={5000} />
        <Field label="Down payment" value={down} onChange={setDown} step={5000} />
        <Field
          label="Interest rate (%)"
          value={ratePct}
          onChange={setRatePct}
          step={0.125}
        />
        <Field label="Term (years)" value={years} onChange={setYears} step={5} />

        <div className={styles.result}>
          <span>Estimated monthly payment (P&amp;I)</span>
          <strong>{currency.format(monthly)}</strong>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  step,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  step: number;
}) {
  return (
    <label className={styles.field}>
      <span>{label}</span>
      <input
        type="number"
        inputMode="decimal"
        step={step}
        min={0}
        value={value}
        onChange={(e) => onChange(Number(e.target.value) || 0)}
      />
    </label>
  );
}
