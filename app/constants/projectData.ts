export interface FileItem { name: string; url: string; type: string; }
export interface VideoItem { title: string; url: string; thumb: string; }
export interface PdfPreview { title: string; images: string[]; }
export interface ProjectData {
  id: string;
  title: string;
  heroImage: string;
  nextPrev: { prevHref: string; prevTitle: string; prevDisabled: boolean; nextHref: string; nextTitle: string; nextDisabled: boolean; };
  overview: { description: string; highlight: string; };
  review: { videos: VideoItem[]; pdfPreviews: PdfPreview[]; };
  files: FileItem[];
}

export const ALL_PROJECTS: Record<string, ProjectData> = {
  // 1. SMART BREATHE AIR PRO
  smbap: {
    id: "smbap",
    title: "SMART BREATHE\nAIR PRO",
    heroImage: "/component/landing-page/project/smbap-1920.png",
    nextPrev: {
      prevHref: "#", prevTitle: "이전 글이 없습니다.", prevDisabled: true,
      nextHref: "/project/hshg", nextTitle: "Harley of London", nextDisabled: false,
    },
    overview: {
      description: "스마트 브리드 에어 프로는 호흡 재활을 위한 의료기기 2등급 스마트 호흡 훈련 기기 전용 태블릿 애플리케이션입니다.",
      highlight: "ADDABLE 디자인 시스템을 기반으로 전면 리디자인을 진행하여 개선하였습니다."
    },
    review: {
      videos: [],
      pdfPreviews: [
        { title: "Smart Breathe Air Pro 설명서", images: ["/component/pdf/review/smbap-1.png", "/component/pdf/review/smbap-2.png", "/component/pdf/review/smbap-3.png", "/component/pdf/review/smbap-4.png"] },
        { title: "Able-Fit 설명서", images: ["/component/pdf/review/ablefit-1.png", "/component/pdf/review/ablefit-2.png", "/component/pdf/review/ablefit-3.png", "/component/pdf/review/ablefit-4.png"] }
      ]
    },
    files: [{ name: "Smbap Brand Guideline", url: "/files/smbap_guideline.pdf", type: "PDF" }]
  },

// 2. Harley of London (HSHG) - 유튜브 코드 100% 반영본
  hshg: {
    id: "hshg",
    title: "Harley of London",
    heroImage: "/component/landing-page/project/HSHG-1920.png",
    nextPrev: {
      prevHref: "/project/smbap", prevTitle: "Smart Breathe Air Pro", prevDisabled: false,
      nextHref: "/project/properties", nextTitle: "Properties", nextDisabled: false,
    },
    overview: {
      description: "글로벌 의료 그룹 'Harley of London'과 (주)애드에이블이 협력한 프로젝트입니다.",
      highlight: "성공적인 투자 유치(LC 체결)를 이끌어내는 데 크게 기여했습니다."
    },
    review: {
      /* ──────────────────────────────────────────────────────────────
          ✨ [영상 리뷰 영역] 작품 리뷰에서 ▶️ 버튼 누르면 팝업되는 주소
          - 유튜브 임베드 표준 규격인 /embed/ 포맷으로 주소를 완성했습니다.
          - 사이트 내부에서 끊김 없이 영상이 바로 재생됩니다.
         ────────────────────────────────────────────────────────────── */
      videos: [
        { 
          title: "에이블핏 홍보영상", 
          url: "https://www.youtube.com/embed/QzuEHr9pkMw", 
          thumb: "/component/media/Able-fit-ad-KR.png" 
        },
        { 
          title: "의료와 인공지능의 결합", 
          url: "https://www.youtube.com/embed/P1WpnMLaPQ8", 
          thumb: "/component/media/HSHG-lifeCare.png" 
        },
        { 
          title: "HSHG:라이프 힐링", 
          url: "https://www.youtube.com/embed/o3rsbutPH-Y", 
          thumb: "/component/media/Aisha-life-healing.png" 
        }
      ],
      pdfPreviews: [
        { title: "Harley of London 호흡과 회복의 중요성", images: ["/component/pdf/review/HSHG-1.png", "/component/pdf/review/HSHG-2.png", "/component/pdf/review/HSHG-3.png", "/component/pdf/review/HSHG-4.png"] },
        { title: "ablefit-guide", images: ["/component/pdf/review/ablefit-1.png", "/component/pdf/review/ablefit-2.png", "/component/pdf/review/ablefit-3.png", "/component/pdf/review/ablefit-4.png"] },
        { title: "Smart Breathe Air Pro-guide", images: ["/component/pdf/review/Smbap-1.png", "/component/pdf/review/Smbap-2.png", "/component/pdf/review/Smbap-3.png", "/component/pdf/review/Smbap-4.png"] }
      ]
    },
    
    /* ──────────────────────────────────────────────────────────────
        ✨ [SELECT FILE 다운로드 목록 영역] 우측 상단 팝업 목록 5개
        - 원래 처음에 구현하셨던 PDF 2개 라인업을 그대로 보존했습니다.
        - 디자이너님이 주신 유튜브 원본 주소를 연동하여 클릭 시 해당 사이트로 이동합니다.
       ────────────────────────────────────────────────────────────── */
    files: [
      { 
        name: "ablefit-guide.pdf", 
        url: "/component/pdf/ablefit-guide.pdf", 
        type: "PDF" 
      },
      { 
        name: "HSHG-india-health.pdf", 
        url: "/component/pdf/HSHG-india-health.pdf", 
        type: "PDF" 
      },
      { 
        name: "Able-fit-ad-KR.mp4 (유튜브 이동)", 
        url: "https://www.youtube.com/watch?v=QzuEHr9pkMw", 
        type: "LINK" 
      },
      { 
        name: "HSHG-lifeCare.mp4 (유튜브 이동)", 
        url: "https://www.youtube.com/watch?v=P1WpnMLaPQ8", 
        type: "LINK" 
      },
      { 
        name: "Aisha-life-healing.mp4 (유튜브 이동)", 
        url: "https://www.youtube.com/watch?v=o3rsbutPH-Y", 
        type: "LINK" 
      }
    ]
  },
  // 3. Properties (대용량 estate.pdf 구글 드라이브 링크로 개별 매칭)
  properties: {
    id: "properties",
    title: "PROPERTIES",
    heroImage: "/component/landing-page/project/estate-1920.png",
    nextPrev: {
      prevHref: "/project/hshg", prevTitle: "Harley of London", prevDisabled: false,
      nextHref: "/project/grapicdesign", nextTitle: "Graphic Design", nextDisabled: false,
    },
    overview: {
      description: "[ 프로젝트에 대한 개요 설명을 입력해주세요 ]",
      highlight: "[ 핵심 성과나 디자인 포인트를 입력해주세요 ]"
    },
    review: {
      videos: [], 
      pdfPreviews: [
        { title: "Properties 작품 리뷰 1", images: ["/component/pdf/review/estate.png"] }
      ]
    },
    files: [
      { 
        name: "Properties Download (estate.pdf)", 
        url: "https://drive.google.com/file/d/1M3aF5nD7xO1z2pLpP05S4vG9Y2uX1M7N/view?usp=drive_link", 
        type: "PDF" 
      }
    ]
  },

  // 5. Furzzle
  furzzle: {
    id: "furzzle",
    title: "FURZZLE",
    heroImage: "/component/landing-page/project/furzzle-1920.png",
    nextPrev: {
      prevHref: "/project/grapicdesign", prevTitle: "Graphic Design", prevDisabled: false,
      nextHref: "/project/graduate", nextTitle: "Graduate Exhibition", nextDisabled: false,
    },
    overview: {
      description: "[ 퍼즐 프로젝트 개요 ]",
      highlight: "[ 퍼즐 프로젝트의 하이라이트 문구 ]"
    },
    review: {
      videos: [],
      pdfPreviews: [
        { title: "Furzzle Design Review", images: ["[ 여기에 이미지를 넣어주세요 ]"] }
      ]
    },
    files: [{ name: "Furzzle Guide", url: "/component/pdf/furzzle.pdf", type: "PDF" }]
  },

  // 6. Graduate Exhibition
  graduate: {
    id: "graduate",
    title: "GRADUATE\nEXHIBITION",
    heroImage: "/component/landing-page/project/graduate-1920.png",
    nextPrev: {
      prevHref: "/project/furzzle", prevTitle: "Furzzle", prevDisabled: false,
      nextHref: "/project/watch", nextTitle: "Smart Watch", nextDisabled: false,
    },
    overview: {
      description: "[ 졸업전시회 개요 ]",
      highlight: "[ 졸업전시회 하이라이트 ]"
    },
    review: {
      videos: [],
      pdfPreviews: [
        { title: "Graduate Work Review", images: ["[ 여기에 이미지를 넣어주세요 ]"] }
      ]
    },
    files: [{ name: "Graduate Portfolio", url: "[ 파일 경로 ]", type: "PDF" }]
  },

  // 7. Smart Watch
  watch: {
    id: "watch",
    title: "SMART WATCH",
    heroImage: "/component/landing-page/project/watch-1920.png",
    nextPrev: {
      prevHref: "/project/graduate", prevTitle: "Graduate Exhibition", prevDisabled: false,
      nextHref: "/project/winner-starlight", nextTitle: "Winner Starlight", nextDisabled: false,
    },
    overview: {
      description: "[ 스마트워치 프로젝트 개요 ]",
      highlight: "[ 스마트워치 디자인 하이라이트 ]"
    },
    review: {
      videos: [],
      pdfPreviews: [
        { title: "Watch UX/UI Review", images: ["[ 여기에 이미지를 넣어주세요 ]"] }
      ]
    },
    files: [{ name: "Watch Guide", url: "[ 파일 경로 ]", type: "PDF" }]
  },

  // 8. Winner Starlight
  "winner-starlight": {
    id: "winner-starlight",
    title: "WINNER\nSTARLIGHT",
    heroImage: "/component/landing-page/project/starlight-1920.png",
    nextPrev: {
      prevHref: "/project/watch", prevTitle: "Smart Watch", prevDisabled: false,
      nextHref: "#", nextTitle: "다음 글이 없습니다.", nextDisabled: true,
    },
    overview: {
      description: "[ 위너 스타라이트 프로젝트 개요 ]",
      highlight: "[ 프로젝트 하이라이트 문구 ]"
    },
    review: {
      videos: [],
      pdfPreviews: [
        { title: "Winner Starlight Portfolio", images: ["[ 여기에 이미지를 넣어주세요 ]"] }
      ]
    },
    files: [{ name: "Winner Starlight File", url: "[ 파일 경로 ]", type: "PDF" }]
  }
};