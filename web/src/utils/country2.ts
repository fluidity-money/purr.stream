export const codeToNameDic = {
  au: "Australia",
  jp: "Japan",
  us: "USA",
  br: "Brazil",
  id: "Indonesia",
  cn: "China",
  tr: "Turkiye",
  fr: "France",
  gb: "United Kingdom",
  nl: "Netherlands",
  kr: "South Korea",
  de: "Germany",
  ca: "Canada",
  it: "Italy",
  in: "India",
  sg: "Singapore",
  za: "South Africa",
  ph: "Philippines",
  ml: "Malaysia",
  th: "Thailand",
} as const;
export type CountryCode = keyof typeof codeToNameDic;

export function country2Flag(countryCode: string): string {
  return countryCode
    .toUpperCase()
    .split("")
    .map((char) => String.fromCodePoint(char.charCodeAt(0) + 0x1f1a5))
    .join("");
}

export function country2Name(countryCode: keyof typeof codeToNameDic) {
  return codeToNameDic[countryCode] || "unknown country";
}
