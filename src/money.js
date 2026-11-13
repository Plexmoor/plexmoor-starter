/** Split a bill (in dollars) including tip between people. Returns per-person amount in cents. */
export function splitBill(bill, tipPercent, people) {
  const b = Number(bill), t = Number(tipPercent), p = Math.floor(Number(people));
  if (!Number.isFinite(b) || !Number.isFinite(t) || !Number.isFinite(p) || b < 0 || t < 0 || p < 1) return 0;
  const totalCents = Math.round(b * 100 * (1 + t / 100));
  return Math.round(totalCents / p);
}
