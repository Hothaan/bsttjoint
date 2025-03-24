import Location from "@/assets/components/pages/bstt/index/floating/location.svg";
import Cs from "@/assets/components/pages/bstt/index/floating/cs.svg";
import Call from "@/assets/components/pages/bstt/index/floating/call.svg";
import Heart from "@/assets/components/pages/bstt/index/floating/heart.svg";
import theme from "@/styles/theme";

interface ImenuDataDepth2 {
  text: string;
  link: string;
}

export const menu_data = [
  {
    depth1: "병원소개",
    depth2: [
      { text: "병원소개", link: "/bstt/HospitalGuide" },
      {
        text: "지점안내",
        link: "/bstt/BranchGuide",
        depth3: [
          {
            text: "부산서면점",
            link: `/bstt/BranchGuide/Bstt`,
          },
        ],
      },
      { text: "주치의 칼럼", link: "/bstt/PhysicianHealthColumn" },
      { text: "튼튼백세TV", link: "/bstt/TtTv" },
      { text: "자주묻는 질문", link: "/bstt/FrequentlyAskedQuestions" },
      { text: "진료문의", link: "/bstt/MedicalInquiries" },
    ],
  },
  {
    depth1: "핵심치료",
    depth2: [
      { text: "핵심치료", link: "/bstt/KeyTreatment" },
      { text: "백절탕", link: "/bstt/Baekjeoltang" },
      { text: "녹용한약", link: "/bstt/AntlerHerbalMedicine" },
      { text: "약침요법", link: "/bstt/AcupunctureTreatment" },
      { text: "체중감량", link: "/bstt/WeightLoss" },
    ],
  },
  {
    depth1: "관절질환",
    depth2: [
      { text: "관절질환", link: "/bstt/JointDisease" },
      { text: "퇴행성관절염", link: "/bstt/DegenerativeArthritis" },
      { text: "손가락관절염", link: "/bstt/ArthritisFingers" },
      { text: "연골인대파열", link: "/bstt/GreatRuptureCartilage" },
      { text: "오십견", link: "/bstt/FrozenShoulder" },
    ],
  },
  {
    depth1: "척추질환",
    depth2: [
      { text: "척추질환", link: "/bstt/SpinalDisease" },
      { text: "척추관협착증", link: "/bstt/SpinalStenosis" },
      { text: "허리디스크", link: "/bstt/LumbarDisc" },
      { text: "목디스크", link: "/bstt/NeckDisc" },
      { text: "척추측만증", link: "/bstt/ScoliosisSpine" },
    ],
  },
];

export const branch_data = [
  {
    depth1: "서울",
    depth2: [
      { text: "강남점", link: "/kntt", isAvailable: false },
      { text: "노원점", link: "/nwtt", isAvailable: false },
      { text: "목동점", link: "/mdtt", isAvailable: false },
      { text: "광진·강동점", link: "/kktt", isAvailable: false },
    ],
  },
  {
    depth1: "경기",
    depth2: [{ text: "분당점", link: "/bdtt", isAvailable: false }],
  },
  {
    depth1: "인천",
    depth2: [{ text: "인천점", link: "/ictt", isAvailable: false }],
  },
  {
    depth1: "충청",
    depth2: [{ text: "대점점", link: "/djtt", isAvailable: false }],
  },
  {
    depth1: "영남",
    depth2: [
      { text: "부산서면점", link: "/bstt/BranchGuide/Bstt", isAvailable: true },
      { text: "대구점", link: "/dktt", isAvailable: false },
    ],
  },
  {
    depth1: "호남",
    depth2: [{ text: "광주점", link: "/kjtt", isAvailable: false }],
  },
];

export const footer_menu_data = [
  { text: "이용약관", link: "/bstt/TermsOfUse" },
  {
    text: "개인정보처리방침",
    link: "/bstt/PersonalInformationProcessingPolicy",
  },
  { text: "비급여고지", link: "/bstt/NonPaymentNotice" },
];

export const relative_site_data = [{ text: "없음", link: "/bstt" }];

interface Ifloating_menu_data {
  [key: string]: {
    [key: string]: {
      text: string;
      link: string;
      icon: React.ReactNode;
      bg: string;
      type: "pc" | "mo" | "both";
    }[];
  };
}

export const floating_menu_data: Ifloating_menu_data = {
  bstt: {
    main: [
      {
        text: "핵심치료",
        link: "/bstt/Baekjeoltang",
        icon: <Heart />,
        bg: theme.colors.point.primary,
        type: "both",
      },
      {
        text: "지점안내",
        link: "/bstt/BranchGuide",
        icon: <Location />,
        bg: "#44CC7D;",
        type: "both",
      },
      {
        text: "진료문의",
        link: "/bstt/MedicalInquiries",
        icon: <Cs />,
        bg: "#7CA81E;",
        type: "both",
      },
      {
        text: "오시는길",
        link: "/bstt/BranchGuide",
        icon: <Location />,
        bg: "#35184D",
        type: "both",
      },
      {
        text: "온라인예약",
        link: "/bstt/MedicalInquiries",
        icon: <Cs />,
        bg: theme.colors.point.primary,
        type: "both",
      },
      {
        text: "전화문의",
        link: "",
        icon: <Call />,
        bg: "#35184D",
        type: "mo",
      },
    ],
  },
};
