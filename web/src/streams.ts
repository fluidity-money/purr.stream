export const streams = [
  {
    name: "Happy Canteen",
    altName: "快乐大食堂",
    front:
      "https://streetcatpull.hellobike.com/live/4258783365322591678_0.m3u8",
    above:
      "https://streetcatpull.hellobike.com/live/4258783365322591678_1.m3u8",
    behind:
      "https://streetcatpull.hellobike.com/live/4258783365322591678_2.m3u8",
    countryCode: "au",
    charity: "RSPCA Australia",
    charityUrl: "https://www.rspca.org.au/donate",
    hash: "809db432bdc4fb944cfc35131fe8647f7580f98f3c64c3e90e51c7bea475c47c",
  },
  {
    name: "Lucky 7-Eleven II",
    altName: "好运7-11-II",
    front:
      "https://streetcatpull.hellobike.com/live/4291094747934800009_0.m3u8",
    above:
      "https://streetcatpull.hellobike.com/live/4291094747934800009_1.m3u8",
    behind:
      "https://streetcatpull.hellobike.com/live/4291094747934800009_2.m3u8",
    countryCode: "cn",
    charity: "RSPCA Australia",
    charityUrl: "https://www.rspca.org.au/donate",
    hash: "e4380a256463605037d98f7d162825f6e033677ab79c81ef7ef5bd123c2270bb",
  },
  {
    name: "Auspicious Restaurant",
    altName: "吉祥食府",
    front:
      "https://streetcatpull.hellobike.com/live/4412424173050749216_0.m3u8",
    above:
      "https://streetcatpull.hellobike.com/live/4412424173050749216_1.m3u8",
    behind:
      "https://streetcatpull.hellobike.com/live/4412424173050749216_2.m3u8",
    countryCode: "jp",
    charity: "RSPCA Australia",
    charityUrl: "https://www.rspca.org.au/donate",
    hash: "add86ad06d4dbcd1b50e1b2220064dc438bf18a4f88ff3d8f70b491ca2689e54",
  },
  {
    name: "Mr. Fall",
    altName: "快乐猫屋2号",
    front:
      "https://streetcatpull.hellobike.com/live/4255656354246951265_0.m3u8",
    above:
      "https://streetcatpull.hellobike.com/live/4255656354246951265_1.m3u8",
    behind:
      "https://streetcatpull.hellobike.com/live/4255656354246951265_2.m3u8",
    countryCode: "cn",
    charity: "RSPCA Australia",
    charityUrl: "https://www.rspca.org.au/donate",
    hash: "04b10a1fdc7a10ba730bef5e8d2b222ebe73ba5717b3e3c1811dbbb029121011",
  },
] as const;

export const streamCameras = ["front", "above", "behind"] as const;
