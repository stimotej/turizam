export const revalidateTime = 60;

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

export const homepageImages = [
  {
    src: "/sc-hostel-1.jpeg",
    alt: "SC Hostel 1",
  },
  {
    src: "/sc-hostel-2.webp",
    alt: "SC Hostel 2",
  },
  {
    src: "/sc-hostel-3.webp",
    alt: "SC Hostel 3",
  },
] as const;

export const stjepanRadicImages = [
  {
    src: "/stjepan-radic/paviljon-2.webp",
    alt: "Paviljon 2",
  },
  {
    src: "/stjepan-radic/paviljon-11-12.webp",
    alt: "Paviljon 11-12",
  },
  {
    src: "/stjepan-radic/kuhinja-11-12-paviljon.webp",
    alt: "Kuhinja 11-12 paviljon",
  },
  {
    src: "/stjepan-radic/kupaonica.webp",
    alt: "Kupaonica",
  },
  {
    src: "/stjepan-radic/kupaonica-3.webp",
    alt: "Kupaonica 3",
  },
] as const;

export const cvjetnoNaseljeImages = [
  {
    src: "/cvjetno-naselje/studentska-soba.webp",
    alt: "Studentska soba",
  },
  {
    src: "/cvjetno-naselje/cajna-kuhinja.webp",
    alt: "Čajna kuhinja",
  },
  {
    src: "/cvjetno-naselje/kupaonica-3.0.webp",
    alt: "Kupaonica 3.0",
  },
  {
    src: "/cvjetno-naselje/kupaonica.webp",
    alt: "Kupaonica",
  },
  {
    src: "/cvjetno-naselje/studentska-soba-2.webp",
    alt: "Studentska soba 2",
  },
] as const;
