import { createHash } from "crypto";

// keccak hash key truncated to bytes8
export function hash(key: string) {
  return createHash("sha3-256").update(key).digest("hex").slice(0, 16);
}

export function hashObjByProps(obj: { [key: string]: string }) {
  const concatString = Object.values(obj).reduce((acc, cur) => acc + cur);

  return hash(concatString);
}
