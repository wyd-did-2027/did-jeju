export type Locale = "kr" | "en";
export const locales: Locale[] = ["kr", "en"];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const siteConfig = {
  name: "WYD SEOUL 2027 DID 제주",
  url: "https://www.wyd2027did-jeju.org",
  ogImage: "/logo.jpg",
};

export const content = {
  kr: {
    lang: "ko",
    metadata: {
      title: "WYD SEOUL 2027 DID 제주",
      description: "WYD SEOUL 2027 DID 제주 공식 웹사이트",
      ogLocale: "ko_KR",
    },
    header: {
      logoAlt: "wyd did 제주 로고",
      nav: {
        home: "홈",
        calendar: "캘린더",
        youtube: "영상",
        notice: "공지",
        site: "사이트",
        faq: "FAQ",
      },
    },
    footer: {
      logoAlt: "wyd did 제주 로고",
      address:
        "제주시 관덕로 8길 14 1층 청소년사목국",
      email: "jjchayouth@naver.com",
      phone: "064-729-9507",
      hours: "운영시간: 월~금 09:00~18:00 (점심시간 : 12:00~13:30)",
      copyright: "Copyright ⓒ 제주교구 All rights reserved",
    },
    slider: {
      pause: "일시정지 버튼",
      play: "재생 버튼",
      prev: "이전 슬라이드 버튼",
      next: "다음 슬라이드 버튼",
    },
    sections: {
      calendar: "CALENDAR",
      notice: "공지사항",
      youtube: "추천 영상",
      site: "관련 사이트",
      faq: "FAQ",
    },
    notice: {
      backLink: "돌아가기",
    },
    common: {
      prev: "이전",
      next: "다음",
      prevPage: "이전 페이지",
      nextPage: "다음 페이지",
      backToTop: "맨 위로 이동",
      close: "닫기",
      hideFor7Days: "7일간 보지 않기",
    },
    popup: {
      title: "2026 세계청년대회 안내",
      description:
        "제주교구에서 준비하는 세계청년대회 소식을 확인해보세요.",
    },
  },
  en: {
    lang: "en",
    metadata: {
      title: "WYD SEOUL 2027 DID Jeju",
      description: "WYD SEOUL 2027 DID Jeju Official Website",
      ogLocale: "en_US",
    },
    header: {
      logoAlt: "wyd did Jeju logo",
      nav: {
        home: "Home",
        calendar: "Calendar",
        youtube: "Videos",
        notice: "Notice",
        site: "Sites",
        faq: "FAQ",
      },
    },
    footer: {
      logoAlt: "wyd did Jeju logo",
      address:
        "14, Gwandeok-ro 8-gil, Jeju-si, 1F Youth Pastoral Office",
      email: "jjchayouth@naver.com",
      phone: "064-729-9507",
      hours: "Hours: Mon-Fri 09:00~18:00 (Lunch 12:00~13:30)",
      copyright: "Copyright ⓒ Diocese of Jeju All rights reserved",
    },
    slider: {
      pause: "Pause",
      play: "Play",
      prev: "Previous slide",
      next: "Next slide",
    },
    sections: {
      calendar: "CALENDAR",
      notice: "Notice",
      youtube: "Featured Videos",
      site: "Related Sites",
      faq: "FAQ",
    },
    notice: {
      backLink: "Go back",
    },
    common: {
      prev: "Previous",
      next: "Next",
      prevPage: "Previous page",
      nextPage: "Next page",
      backToTop: "Back to top",
      close: "Close",
      hideFor7Days: "Hide for 7 days",
    },
    popup: {
      title: "WYD 2026 Information",
      description:
        "Check out the latest news about WYD from the Diocese of Jeju.",
    },
  },
} as const;

export type Content = (typeof content)["kr"];
