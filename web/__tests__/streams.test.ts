import { hashObjByProps } from "@/utils/hash";
import { streams } from "@/streams";
import { codeToNameDic } from "@/utils/country2";

describe("Streams verification", () => {
  streams.forEach(({ hash, ...stream }) => {
    test(`checks Keccak hash for stream named:${stream.name}`, () => {
      expect(hash).toBe(hashObjByProps(stream));
    });
  });

  streams.forEach(({ countryCode }) => {
    test(`checks country codes are available in its dictionary`, () => {
      expect(codeToNameDic).toContain(countryCode);
    });
  });
});
