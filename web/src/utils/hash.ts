import { createHash } from "crypto";

// keccak hash key
export function hash(key: string) {
  return createHash("sha3-256").update(key).digest("hex");
}

export function hashObjByProps(obj: { [key: string]: string }) {
  const concatString = Object.values(obj).reduce((acc, cur) => acc + cur);

  return hash(concatString);
}
