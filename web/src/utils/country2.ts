export const codeToNameDic = {
  cn: "china",
  jp: "japan",
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
  return codeToNameDic[countryCode];
}
