export const revalidateTime = 60;

export const adminTurizamCategoryId = 323;

export const smjestajCategoryId = 324;
export const cjenikCategoryId = 325;

export const pocetnaPostId = 40726;
export const smjestajPostId = 40735;
export const cjenikPostId = 40736;

export const faqCategoryId = 320;

export const mainNavigationLinks = [
  {
    title: "Početna",
    href: "/",
  },
  {
    title: "Smještaj",
    href: "/smjestaj",
  },
  {
    title: "Cjenik",
    href: "/cjenik",
  },
  {
    title: "Kontakt",
    href: "/kontakt",
  },
  {
    title: "Više",
    items: [
      {
        title: "Često postavljana pitanja",
        href: "/cesto-postavljana-pitanja",
      },
    ],
  },
] as const;
