import { hashObjByProps } from "@/utils/hash";
import { streams } from "@/streams";
import { codeToNameDic } from "@/utils/country2";

describe("Streams verification", () => {
  streams.forEach((stream) => {
    test(`checks Keccak hash for stream named:${stream.name}`, () => {
      expect(stream.hash).toBe(hashObjByProps(stream));
    });
  });

  streams
    .filter((stream) => stream.countryCode)
    .forEach(({ countryCode }) => {
      test(`checks country code ${countryCode} are available in its dictionary`, () => {
        expect(codeToNameDic).toHaveProperty(countryCode);
      });
    });
});
