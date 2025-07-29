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
    src: "/turizam/sc-hostel-1.jpeg",
    alt: "SC Hostel 1",
  },
  {
    src: "/turizam/sc-hostel-2.webp",
    alt: "SC Hostel 2",
  },
  {
    src: "/turizam/sc-hostel-3.webp",
    alt: "SC Hostel 3",
  },
] as const;

export const stjepanRadicImages = [
  {
    src: "/turizam/stjepan-radic/paviljon-2.webp",
    alt: "Paviljon 2",
  },
  {
    src: "/turizam/stjepan-radic/paviljon-11-12.webp",
    alt: "Paviljon 11-12",
  },
  {
    src: "/turizam/stjepan-radic/kuhinja-11-12-paviljon.webp",
    alt: "Kuhinja 11-12 paviljon",
  },
  {
    src: "/turizam/stjepan-radic/kupaonica.webp",
    alt: "Kupaonica",
  },
  {
    src: "/turizam/stjepan-radic/kupaonica-3.webp",
    alt: "Kupaonica 3",
  },
] as const;

export const cvjetnoNaseljeImages = [
  {
    src: "/turizam/cvjetno-naselje/studentska-soba.webp",
    alt: "Studentska soba",
  },
  {
    src: "/turizam/cvjetno-naselje/cajna-kuhinja.webp",
    alt: "Čajna kuhinja",
  },
  {
    src: "/turizam/cvjetno-naselje/kupaonica-3.0.webp",
    alt: "Kupaonica 3.0",
  },
  {
    src: "/turizam/cvjetno-naselje/kupaonica.webp",
    alt: "Kupaonica",
  },
  {
    src: "/turizam/cvjetno-naselje/studentska-soba-2.webp",
    alt: "Studentska soba 2",
  },
] as const;

export const faq = [
  {
    title: "U koliko sati je moguća prijava i odjava?",
    description:
      "Prijava i odjava gostiju moguće su u bilo kojem trenutku od 0-24, uz obaveznu prethodno najavu.",
  },
  {
    title: "Kako mogu doći do Hostela iz centra grada/aerodroma/kolodvora?",
    description:
      "Do Hostela iz bilo kojeg dijela grada može se doći autobusom, taxijem ili tramvajem.",
  },
  {
    title: "Gdje se nalazi recepcija?",
    description:
      "Svaka recepcija se nalazi na ulazu u Hostela te je dostupna za goste tijekom cijelog dana.",
  },
  {
    title:
      "Ima li parkirno mjesto u sklopu Hostela, je li osiguran i je li besplatan?",
    description:
      "Hostel ne raspolaže vlastitim parkirnim mjestima, no gosti se mogu koristiti javnim parkiralištima",
  },
  {
    title: "U sklopu sobe postoji li vlastita kupaonica ili se dijeli?",
    description:
      'U domu "Stjepan Radić" postoje sobe koje imaju vlastitu kupaonicu te sobe koje dijele kupaonicu na katu. U domu "Cvjetno naselje" svaka soba ima vlastitu kupaonicu.',
  },
  {
    title: "Ima li klima uređaj u sobi?",
    description: "Sobe nisu opremljene klima uređajem.",
  },
  {
    title: "Jesu li posteljina i ručnici uključeni?",
    description:
      "Svaka soba opremljena je čistom posteljinom i ručnicima koji su pripremljeni prije dolaska gosta.",
  },
  {
    title: "Postoji li čajna kuhinja koju gosti mogu koristiti?",
    description:
      'U Hostelu "Stjepan Radić" i "Cvjetno naselje" nalaze se čajne kuhinje na svakom katu i gosti u bilo kojem trenutku mogu koristiti.',
  },
  {
    title: "Ima li dom Wi-Fi i je li besplatan?",
    description:
      'Hostel "Stjepan Radić" i "Cvjetno naselje" nude besplatnu Wi-Fi mrežu dostupnu u svim sobama i zajedničkim prostorijama.',
  },
  {
    title: "Koliko je Hostel udaljen od centra grada?",
    description:
      'Hostel "Stjepan Radić" udaljen je od centra grada 15 min tramvajem, a dom "Cvjetno naselje" udaljen je 10 min tramvajem.',
  },
  {
    title: "Gdje se nalazi najbliža trgovina ili bankomat?",
    description:
      "U neposrednoj blizini oba Hostela gosti imaju na raspolaganju više trgovina i bankomata.",
  },
  {
    title: "Ima li u blizini mjesto za izlazak ili restoran?",
    description:
      "Oba Hostela imaju odličnu lokaciju te se u blizini nalaze brojni kafići i restorani koji su pogodni za večernji izlazak.",
  },
];
