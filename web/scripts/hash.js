const { appendFile } = require("fs/promises");
const { createHash } = require("node:crypto");
function hash(key) {
  return createHash("sha3-256").update(key).digest("hex").slice(0, 16);
}
const usedFieldsForHash = ["name", "altName", "front", "above", "behind"];

function hashObjByProps(obj) {
  const concatString = Object.entries(obj)
    .filter(([key]) => usedFieldsForHash.includes(key))
    .reduce((acc, [ck, cur]) => acc + cur, "");

  return hash(concatString);
}

const arr = [
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
    charityDescription:
      "RSPCA Australia (The Royal Society for the Prevention of Cruelty to Animals) is an Australian peak organisation established in 1981 to promote animal welfare.",
    charityUrl: "https://www.rspca.org.au/support-us/donate/",
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
    countryCode: "jp",
    charity: "JAWS ",
    charityDescription:
      "Japan Animal Welfare Society operates as a non-profit organization. The Organization provides funds, advice, and support to abandoned, neglected and abused pets, captive animals, and wildlife.",
    charityUrl: "https://www.jaws.or.jp/donation/",
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
    countryCode: "usa",
    charity:
      "ASPCA (American Society for the Prevention of Cruelty to Animals)",
    charityDescription:
      "The American Society for the Prevention of Cruelty to Animals is a non-profit organization dedicated to preventing animal cruelty.",
    charityUrl: "https://www.aspca.org/ways-to-give",
  },
  {
    name: "Happy Cat House No.2",
    altName: "快乐猫屋2号",
    front:
      "https://streetcatpull.hellobike.com/live/4255656354246951265_0.m3u8",
    above:
      "https://streetcatpull.hellobike.com/live/4255656354246951265_1.m3u8",
    behind:
      "https://streetcatpull.hellobike.com/live/4255656354246951265_2.m3u8",
    countryCode: "br",
    charity: "Ampara Animal",
    charityDescription:
      "Ampara Animal works to rescue and rehabilitate abandoned animals, promoting adoption and responsible care.",
    charityUrl: "https://institutoamparanimal.org.br/",
  },
  {
    name: "Ten Thousand Kitties House (Ms. Dress)",
    altName: "万猫屋",
    front:
      "https://streetcatpull.hellobike.com/live/4154701567245307824_0.m3u8",
    above:
      "https://streetcatpull.hellobike.com/live/4154701567245307824_1.m3u8",
    behind:
      "https://streetcatpull.hellobike.com/live/4154701567245307824_2.m3u8",
    countryCode: "id",
    charity: "JAAN",
    charityDescription:
      "Jakarta Animal Aid Network focuses on the rescue, rehabilitation, and release of wildlife, as well as addressing animal cruelty.",
    charityUrl:
      "https://www.jakartaanimalaid.com/2016/06/27/donate-now-through-credit-card/",
  },
  {
    name: "CatMojo (Mr. Fresh)",
    altName: "新鲜哥的独享城堡",
    front:
      "https://streetcatpull.hellobike.com/live/5144313095337151915_0.m3u8",
    above:
      "https://streetcatpull.hellobike.com/live/5144313095337151915_1.m3u8",
    behind:
      "https://streetcatpull.hellobike.com/live/5144313095337151915_2.m3u8",
    countryCode: "cn",
    charity: "ACT Asia",
    charityDescription:
      "ACT Asia promotes humane education and works on animal welfare issues, focusing on the humane treatment of animals.",
    charityUrl: "https://www.actasia.org/",
  },
  {
    name: "Happy Meow Island ⌯'ㅅ'⌯ (Ms. Smore)",
    altName: "吃喝不愁～快乐喵岛",
    front:
      "https://streetcatpull.hellobike.com/live/4252683790182413040_0.m3u8",
    above:
      "https://streetcatpull.hellobike.com/live/4252683790182413040_1.m3u8",
    behind:
      "https://streetcatpull.hellobike.com/live/4252683790182413040_2.m3u8",
    countryCode: "tr",
    charity: "THKD",
    charityDescription:
      "Turkish Animal Rights Federation (THKD) advocates for animal rights and works to prevent animal cruelty.",
    charityUrl: "https://www.thkd.org.tr/en/bagis",
  },
  {
    name: "(Duck Feeder) Mr. Sweetpea",
    altName: "光头胡萝卜猫咪守护者",
    front:
      "https://streetcatpull.hellobike.com/live/4300845904274638881_0.m3u8",
    above:
      "https://streetcatpull.hellobike.com/live/4300845904274638881_1.m3u8",
    behind:
      "https://streetcatpull.hellobike.com/live/4300845904274638881_2.m3u8",
    countryCode: "fr",
    charity: "30 Millions d’Amis",
    charityDescription:
      "30 Millions d’Amis is dedicated to animal protection and welfare, supporting rescue operations and adoptions.",
    charityUrl: "https://www.30millionsdamis.fr/je-donne/",
  },
  {
    name: "Mr. Long",
    altName: "miu宠乐园",
    front:
      "https://streetcatpull.hellobike.com/live/4303090694701059290_0.m3u8",
    above:
      "https://streetcatpull.hellobike.com/live/4303090694701059290_1.m3u8",
    behind:
      "https://streetcatpull.hellobike.com/live/4303090694701059290_2.m3u8",
    countryCode: "uk",
    charity: "RSPCA",
    charityDescription:
      "RSPCA UK is a charity focused on preventing animal cruelty and promoting animal welfare through various programs.",
    charityUrl: "https://www.rspca.org.uk/getinvolved/donate",
  },
  {
    name: "House of Compassion by the Strait (Mr. Shock)",
    altName: "海峡爱心小屋",
    front:
      "https://streetcatpull.hellobike.com/live/4584985755015398729_0.m3u8",
    above:
      "https://streetcatpull.hellobike.com/live/4584985755015398729_1.m3u8",
    behind:
      "https://streetcatpull.hellobike.com/live/4584985755015398729_2.m3u8",
    countryCode: "nl",
    charity: "Dierenbescherming",
    charityDescription:
      "Dutch Society for the Protection of Animals Dierenbescherming works to protect animals, improve their welfare, and prevent cruelty through advocacy and education.",
    charityUrl: "https://www.dierenbescherming.nl",
  },
  {
    name: "Cat House of Compassion in HeQing Town (Ms. Sleep)",
    altName: "合庆爱心猫屋",
    front:
      "https://streetcatpull.hellobike.com/live/4489918405732275808_0.m3u8",
    above:
      "https://streetcatpull.hellobike.com/live/4489918405732275808_1.m3u8",
    behind:
      "https://streetcatpull.hellobike.com/live/4489918405732275808_2.m3u8",
    countryCode: "kr",
    charity: "KARA",
    charityDescription:
      "Korea Animal Right Advocates focuses on the welfare of animals, rescuing abused animals and advocating for their rights and protection.",
    charityUrl: "https://www.ekara.org/",
  },
  {
    name: "Mimi-Chan wants to be happy (Big Faced Brother)",
    altName: "喵喵酱要快乐",
    front:
      "https://streetcatpull.hellobike.com/live/4953844489504916384_0.m3u8",
    above:
      "https://streetcatpull.hellobike.com/live/4953844489504916384_1.m3u8",
    behind:
      "https://streetcatpull.hellobike.com/live/4953844489504916384_2.m3u8",
    countryCode: "de",
    charity: "Deutscher Tierschutzbund",
    charityDescription:
      "Deutscher Tierschutzbund is committed to improving animal welfare through advocacy, education, and rescue operations.",
    charityUrl: "https://www.tierschutzbund.de/",
  },
  {
    name: "All You Can Eat Buffet (Mr. Boulder, Mrs. Terra)",
    altName: "如意餐厅",
    front:
      "https://streetcatpull.hellobike.com/live/4879126558178503972_0.m3u8",
    above:
      "https://streetcatpull.hellobike.com/live/4879126558178503972_1.m3u8",
    behind:
      "https://streetcatpull.hellobike.com/live/4879126558178503972_2.m3u8",
    countryCode: "ca",
    charity: "Humane Canada",
    charityDescription:
      "Humane Canada works to promote humane treatment of animals and improve their welfare through national programs.",
    charityUrl: "https://humanecanada.ca/",
  },
  {
    name: "Eat Enough Every Day (Coal Ball)",
    altName: "每天都能吃饱饱",
    front:
      "https://streetcatpull.hellobike.com/live/4709667282046985918_0.m3u8",
    above:
      "https://streetcatpull.hellobike.com/live/4709667282046985918_1.m3u8",
    behind:
      "https://streetcatpull.hellobike.com/live/4709667282046985918_2.m3u8",
    countryCode: "it",
    charity: "OIPA International",
    charityDescription:
      "OIPA International advocates for animal rights and welfare, working on issues such as rescue and legislative changes.",
    charityUrl: "https://www.oipa.org/international/",
  },
  {
    name: "Royal Cat Love Meow House No.1 (The Fellas [Badgers])",
    altName: "御猫爱心喵屋No.1",
    front:
      "https://streetcatpull.hellobike.com/live/4941456429422216953_0.m3u8",
    above:
      "https://streetcatpull.hellobike.com/live/4941456429422216953_1.m3u8",
    behind:
      "https://streetcatpull.hellobike.com/live/4941456429422216953_2.m3u8",
    countryCode: "in",
    charity: "PFA",
    charityDescription:
      "People for Animals is one of India’s largest animal welfare organizations, working to rescue and rehabilitate sick and needy animals. PFA operates shelters, ambulance services, and provides veterinary care across India.",
    charityUrl: "https://www.peopleforanimalsindia.org/",
  },
  {
    name: "GUCCI (Mrs. Gucci)",
    altName: "GUCCI",
    front:
      "https://streetcatpull.hellobike.com/live/4543591306641236417_0.m3u8",
    above:
      "https://streetcatpull.hellobike.com/live/4543591306641236417_1.m3u8",
    behind:
      "https://streetcatpull.hellobike.com/live/4543591306641236417_2.m3u8",
    countryCode: "sg",
    charity: "SPCA Singapore",
    charityDescription:
      "The Society for the Prevention of Cruelty to Animals Singapore is a non-profit organization focused on promoting kindness and preventing cruelty to animals. It provides various services, including animal rescue, shelter, and adoption.",
    charityUrl: "https://spca.org.sg",
  },
  {
    name: "Abandoned Angel (Mr. Yap)",
    altName: "遗弃的天使",
    front:
      "https://streetcatpull.hellobike.com/live/4908902089087167112_0.m3u8",
    above:
      "https://streetcatpull.hellobike.com/live/4908902089087167112_1.m3u8",
    behind:
      "https://streetcatpull.hellobike.com/live/4908902089087167112_2.m3u8",
    countryCode: "za",
    charity: "NSPCA",
    charityDescription:
      "The National Council of SPCAs in South Africa works to prevent cruelty to animals and promote their welfare. It oversees various SPCAs across the country, providing support, education, and enforcement of animal protection laws.",
    charityUrl: "https://nspca.co.za/",
  },
  {
    name: "Meow Meow (˶‾᷄ ⁻̫ ‾᷅˵) Rub Rub",
    altName: "喵喵(˶‾᷄ ⁻̫ ‾᷅˵)蹭蹭 ",
    front:
      "https://streetcatpull.hellobike.com/live/5066330542174354224_0.m3u8",
    above:
      "https://streetcatpull.hellobike.com/live/5066330542174354224_1.m3u8",
    behind:
      "https://streetcatpull.hellobike.com/live/5066330542174354224_2.m3u8",
    countryCode: "ph",
    charity: "PAWS",
    charityDescription:
      "The Philippine Animal Welfare Society is dedicated to protecting and promoting the humane treatment of all animals. PAWS operates a shelter, advocates for animal rights, and provides education on responsible pet ownership.",
    charityUrl: "http://paws.org.ph/",
  },
  {
    name: "Orange Cat Kindergarten (Mrs. Scam)",
    altName: "橘猫幼稚园",
    front:
      "https://streetcatpull.hellobike.com/live/4902665556059017260_0.m3u8",
    above:
      "https://streetcatpull.hellobike.com/live/4902665556059017260_1.m3u8",
    behind:
      "https://streetcatpull.hellobike.com/live/4902665556059017260_2.m3u8",
    countryCode: "ml",
    charity: "SPCA Selangor",
    charityDescription:
      "The Society for the Prevention of Cruelty to Animals Selangor is a non-profit organization in Malaysia that works to improve the welfare of animals through rescue, rehabilitation, and rehoming efforts, as well as public education and advocacy.",
    charityUrl: "https://www.spca.org.my/",
  },
  {
    name: "Yichenhao (Mr. Cloud & Mr. Peach)",
    altName: "亦辰号",
    front:
      "https://streetcatpull.hellobike.com/live/4875916293423293304_0.m3u8",
    above:
      "https://streetcatpull.hellobike.com/live/4875916293423293304_1.m3u8",
    behind:
      "https://streetcatpull.hellobike.com/live/4875916293423293304_2.m3u8",
    countryCode: "th",
    charity: "Soi Dog Foundation",
    charityDescription:
      "The Soi Dog Foundation is a non-profit organization based in Thailand that focuses on improving the welfare of street dogs and cats. It provides medical care, sterilization, and adoption services, and campaigns against the dog meat trade.",
    charityUrl: "https://www.soidog.org/",
  },
  {
    name: "Furbao Paradise (Mrs. Gaia & The Titans)",
    altName: "福宝乐园",
    front:
      "https://streetcatpull.hellobike.com/live/4793169693167687281_0.m3u8",
    above:
      "https://streetcatpull.hellobike.com/live/4793169693167687281_1.m3u8",
    behind:
      "https://streetcatpull.hellobike.com/live/4793169693167687281_2.m3u8",
    countryCode: "",
    charity: "",
    charityDescription: "",
    charityUrl: "",
  },
  {
    name: "A Litter of Cats Who Love Each Other (Bob)",
    altName: "相亲相爱一窝猫",
    front:
      "https://streetcatpull.hellobike.com/live/4869617878393900762_0.m3u8",
    above:
      "https://streetcatpull.hellobike.com/live/4869617878393900762_1.m3u8",
    behind:
      "https://streetcatpull.hellobike.com/live/4869617878393900762_2.m3u8",
    countryCode: "",
    charity: "",
    charityDescription: "",
    charityUrl: "",
  },
  {
    name: "Hi Meow (Mr. Eyes)",
    altName: "HI喵",
    front:
      "https://streetcatpull.hellobike.com/live/4516151378886742402_0.m3u8",
    above:
      "https://streetcatpull.hellobike.com/live/4516151378886742402_1.m3u8",
    behind:
      "https://streetcatpull.hellobike.com/live/4516151378886742402_2.m3u8",
    countryCode: "",
    charity: "",
    charityDescription: "",
    charityUrl: "",
  },
];

async function hashArr(arr) {
  const hashes = arr.map((item) => hashObjByProps(item)).join("\n");
  console.log(hashes);
  await appendFile("scripts/results.txt", hashes);
}

hashArr(arr);
