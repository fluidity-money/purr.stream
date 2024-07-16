import { hashObjByProps } from "@/utils/hash";
import { streams } from "@/streams";

describe("Keccak Hash Validity", () => {
  streams.forEach(({ hash, ...stream }) => {
    test(`checks Keccak hash for stream named:${stream.name}`, () => {
      expect(hash).toBe(hashObjByProps(stream));
    });
  });
});
