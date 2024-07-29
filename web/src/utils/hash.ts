import { createHash } from "crypto";

// keccak hash key truncated to bytes8
export function hash(key: string) {
  return createHash("sha3-256").update(key).digest("hex").slice(0, 16);
}
const usedFieldsForHash = ["name", "altName", "front", "above", "behind"];
export function hashObjByProps(obj: { [key: string]: any }) {
  const concatString = Object.entries(obj)
    .filter(([key]) => usedFieldsForHash.includes(key))
    .reduce((acc, [ck, cv]) => acc + cv, "");

  return hash(concatString);
}
