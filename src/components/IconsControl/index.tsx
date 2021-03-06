import styled from "styled-components";

export const IconsControl = (name: string) => {
  switch (name) {
    case "Dashboard":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="13" r="2" />
          <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />
          <path d="M6.4 20a9 9 0 1 1 11.2 0z" />
        </svg>
      );
    case "Produk":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
          <line x1="12" y1="12" x2="20" y2="7.5" />
          <line x1="12" y1="12" x2="12" y2="21" />
          <line x1="12" y1="12" x2="4" y2="7.5" />
        </svg>
      );
    case "Pengguna":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="9" cy="7" r="4" />
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
        </svg>
      );
    case "Pesanan":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <line x1="9" y1="7" x2="15" y2="7" />
          <line x1="9" y1="11" x2="15" y2="11" />
          <line x1="9" y1="15" x2="13" y2="15" />
        </svg>
      );
    case "Footer":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="9" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
          <polyline points="11 12 12 12 12 16 13 16" />
        </svg>
      );
    case "Homepage":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105" />
          <path d="M16 15c-2.21 1.333 -5.792 1.333 -8 0" />
        </svg>
      );
    case "chevron-up-outline":
      return (
        <svg viewBox="0 0 512 512">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M112 328l144-144 144 144"
          />
        </svg>
      );
    case "chevron-down-outline":
      return (
        <svg viewBox="0 0 512 512">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M112 184l144 144 144-144"
          />
        </svg>
      );
    case "chevron-forward-outline":
      return (
        <svg viewBox="0 0 512 512">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M184 112l144 144-144 144"
          />
        </svg>
      );
    case "chevron-back-outline":
      return (
        <svg viewBox="0 0 512 512">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M328 112L184 256l144 144"
          />
        </svg>
      );
    case "sunny":
      return (
        <svg viewBox="0 0 512 512">
          <path d="M256 118a22 22 0 01-22-22V48a22 22 0 0144 0v48a22 22 0 01-22 22zM256 486a22 22 0 01-22-22v-48a22 22 0 0144 0v48a22 22 0 01-22 22zM369.14 164.86a22 22 0 01-15.56-37.55l33.94-33.94a22 22 0 0131.11 31.11l-33.94 33.94a21.93 21.93 0 01-15.55 6.44zM108.92 425.08a22 22 0 01-15.55-37.56l33.94-33.94a22 22 0 1131.11 31.11l-33.94 33.94a21.94 21.94 0 01-15.56 6.45zM464 278h-48a22 22 0 010-44h48a22 22 0 010 44zM96 278H48a22 22 0 010-44h48a22 22 0 010 44zM403.08 425.08a21.94 21.94 0 01-15.56-6.45l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.55 37.56zM142.86 164.86a21.89 21.89 0 01-15.55-6.44l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.56 37.55zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z" />
        </svg>
      );
    case "moon-outline":
      return (
        <svg viewBox="0 0 512 512">
          <path
            d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "moon":
      return (
        <svg viewBox="0 0 512 512">
          <path d="M264 480A232 232 0 0132 248c0-94 54-178.28 137.61-214.67a16 16 0 0121.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0121.06 21.06C442.28 426 358 480 264 480z" />
        </svg>
      );
    case "delete":
      return (
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        </svg>
      );
    case "edit":
      return (
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 15l8.385 -8.415a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3z" />
          <path d="M16 5l3 3" />
          <path d="M9 7.07a7.002 7.002 0 0 0 1 13.93a7.002 7.002 0 0 0 6.929 -5.999" />
        </svg>
      );
    case "detail":
      return (
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
          <line x1="9" y1="9" x2="10" y2="9" />
          <line x1="9" y1="13" x2="15" y2="13" />
          <line x1="9" y1="17" x2="15" y2="17" />
        </svg>
      );
    case "add":
      return (
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 20 20" stroke="currentColor">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "password":
      return (
        <svg
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <circle cx="12" cy="16" r="1" />
          <path d="M8 11v-5a4 4 0 0 1 8 0" />
        </svg>
      );
    case "username":
      return (
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="4" />
          <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
        </svg>
      );
    case "sorter":
      return (
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "search":
      return (
        <svg viewBox="0 0 512 512">
          <path
            d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
            fill="none"
            strokeMiterlimit="10"
          />
          <path
            fill="none"
            strokeLinecap="round"
            strokeMiterlimit="10"
            d="M338.29 338.29L448 448"
          />
        </svg>
      );
    case "close-outline":
      return (
        <svg viewBox="0 0 512 512">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M368 368L144 144M368 144L144 368"
          />
        </svg>
      );
    case "User":
      return (
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "Menu":
      return (
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "CART":
      return (
        <svg viewBox="0 0 512 512">
          <path d="M454.65 169.4A31.82 31.82 0 00432 160h-64v-16a112 112 0 00-224 0v16H80a32 32 0 00-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0050.48-20.55 69.48 69.48 0 0021.52-50.2V192a31.75 31.75 0 00-9.35-22.6zM176 144a80 80 0 01160 0v16H176zm192 96a112 112 0 01-224 0v-16a16 16 0 0132 0v16a80 80 0 00160 0v-16a16 16 0 0132 0z" />
        </svg>
      );
    case "BAG-ADD-OUTLINE":
      return (
        <svg viewBox="0 0 512 512">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M256 256v128M320 320H192M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
          />
        </svg>
      );
    case "BAG-OUTLINE":
      return (
        <svg viewBox="0 0 512 512">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
          />
        </svg>
      );
    case "BAG-REMOVE-OUTLINE":
      return (
        <svg viewBox="0 0 512 512">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M320 320H192M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
          />
        </svg>
      );
    case "NOTIF":
      return (
        <svg viewBox="0 0 512 512">
          <path d="m 432.82267,371.93838 c -1.61913,-1.95077 -3.20901,-3.90153 -4.76962,-5.78402 -21.45839,-25.9549 -34.44072,-41.61953 -34.44072,-115.09503 0,-38.03989 -9.10031,-69.2521 -27.03758,-92.66126 -13.22618,-17.29352 -31.10492,-30.4124 -54.67015,-40.1077 a 2.926145,2.926145 0 0 1 -0.79981,-0.6535 c -8.47606,-28.383613 -31.67064,-47.393801 -57.83038,-47.393801 -26.15973,0 -49.34456,19.010188 -57.82062,47.364541 a 3.0529446,3.0529446 0 0 1 -0.79006,0.63399 c -54.99202,22.63861 -81.71748,66.07236 -81.71748,132.78846 0,73.50477 -12.962816,89.1694 -34.440721,115.09504 -1.56061,1.88249 -3.150482,3.79424 -4.769616,5.78401 a 34.294419,34.294419 0 0 0 -4.535525,36.69386 c 6.018105,12.67997 18.844374,20.5513 33.484852,20.5513 h 301.28564 c 14.5722,0 27.31069,-7.86158 33.3483,-20.48302 a 34.304173,34.304173 0 0 0 -4.49651,-36.73287 z M 253.27441,507.21406 a 78.089056,78.089056 0 0 0 68.70589,-41.09283 3.9015267,3.9015267 0 0 0 -3.45285,-5.72549 H 188.04089 a 3.9015267,3.9015267 0 0 0 -3.46261,5.72549 78.089056,78.089056 0 0 0 68.69613,41.09283 z" />
        </svg>
      );
    case "MAIL":
      return (
        <svg viewBox="0 0 512 512">
          <path d="M 405.72704,152.91281 H 104.3007 a 50.291548,50.291548 0 0 0 -50.237719,50.23773 v 215.30452 a 50.291548,50.291548 0 0 0 50.237719,50.23772 h 301.42634 a 50.291548,50.291548 0 0 0 50.23771,-50.23772 V 203.15054 a 50.291548,50.291548 0 0 0 -50.23771,-50.23773 z m -12.7209,83.09857 -129.18274,100.47544 a 14.353635,14.353635 0 0 1 -17.61907,0 L 117.02162,236.01138 a 14.353635,14.353635 0 1 1 17.61908,-22.66079 l 120.37317,93.62158 120.37317,-93.62158 a 14.353635,14.353635 0 0 1 17.6191,22.66079 z" />
        </svg>
      );
    case "Services":
      return (
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2" />
          <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9" />
          <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12" />
          <line x1="17" y1="17" x2="17" y2="17.01" />
        </svg>
      );
    case "Signin":
      return (
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "Signout":
      return (
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "Plus":
      return (
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      );
    case "Minus":
      return (
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      );
    case "CartAdd":
      return (
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="6" cy="19" r="2" />
          <circle cx="17" cy="19" r="2" />
          <path d="M17 17h-11v-14h-2" />
          <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
          <path d="M15 6h6m-3 -3v6" />
        </svg>
      );
    case "dapurkata":
      return (
        <svg viewBox="0 0 200 200">
          <path
            d="m 62.073072,149.66975 c 0,-98.512512 0,2.31421 0.0025,-99.557476 0.347166,-4.755297 4.526323,-5.41621 6.369858,-5.411495 2.988494,0.0076 18.830232,0.0086 29.681975,-0.0077 7.150005,-0.01071 15.541325,3.645676 21.436635,7.033147 2.9002,1.70686 5.18909,3.489093 7.88314,6.138172 1.92159,1.889519 2.47998,2.582931 3.04773,3.78468 1.29861,2.748782 0.83316,5.677538 -1.23939,7.798654 -2.01747,2.06476 -4.57651,3.224261 -7.13265,3.231816 -2.91669,0.0086 -6.62221,-1.433662 -9.95493,-3.874712 -2.39826,-1.756607 -3.95875,-2.664573 -6.09659,-3.547309 -3.68117,-1.520007 -7.373588,-2.159478 -11.349055,-1.96549 -6.725139,0.328156 -12.610655,2.930209 -17.409048,7.696722 -6.327479,6.285438 -9.055939,15.410897 -7.19988,24.080299 1.081943,5.053612 3.435918,9.407612 7.053922,13.047212 5.127144,5.15774 11.569013,7.86553 18.711045,7.86503 10.071376,-6.2e-4 18.093496,-4.87739 24.265446,-14.75113 0.74518,-1.19214 2.17261,-3.917347 3.17206,-6.056019 3.04687,-6.51987 5.87332,-11.150125 8.29385,-13.586813 1.96189,-1.975007 6.41148,-4.689939 8.57748,-5.233564 l 0.5828,-0.146275 c 0.0276,7.966147 0.0887,16.288708 -0.12906,23.892121 -0.26576,8.33124 -0.77128,9.51237 -1.241,11.78453 -1.62578,7.86447 -4.79579,14.89555 -9.65818,21.4219 -4.6772,6.27778 -9.74116,10.74181 -15.15662,13.36102 -2.20524,1.06657 -6.47709,2.95929 -9.17544,2.96183 z"
            id="path865"
          />
          <path
            d="m 91.668071,109.98701 c -4.20607,-0.9242 -7.656018,-2.79771 -10.614192,-5.76412 -8.709996,-8.734237 -7.892401,-23.190233 1.742475,-30.808896 4.168734,-3.296379 8.63939,-4.707234 14.114194,-4.454173 9.288112,0.429325 17.057482,7.020041 19.169612,16.261468 0.50471,2.208342 0.51476,6.297641 0.0212,8.618011 -0.73491,3.4548 -2.68499,7.25963 -5.0725,9.89699 -1.90805,2.10771 -5.11597,4.24781 -7.96528,5.31387 -3.180841,1.19011 -8.320036,1.61261 -11.395489,0.93685 z"
            id="path871"
          />
        </svg>
      );
    case "person":
      return (
        <svg viewBox="0 0 512 512">
          <path d="m 304.44911,115.00645 c -13.73927,-14.83362 -32.92905,-23.002329 -54.10982,-23.002329 -21.29374,0 -40.54705,8.119299 -54.22278,22.861119 -13.82399,14.90421 -20.55947,35.16008 -18.97797,57.03277 3.13475,43.15229 35.97201,78.2559 73.20075,78.2559 37.22874,0 70.00952,-35.09654 73.19369,-78.24179 1.60268,-21.67499 -5.17517,-41.88851 -19.08387,-56.90567 z m 70.15072,293.29723 H 126.07876 a 21.886799,21.886799 0 0 1 -17.08583,-7.85807 c -4.58917,-5.48582 -6.43896,-12.97675 -5.06927,-20.5524 5.95886,-33.05614 24.55558,-60.82413 53.78505,-80.3175 25.96762,-17.30469 58.86136,-26.82898 92.63058,-26.82898 33.76922,0 66.66295,9.53134 92.63058,26.82898 29.22947,19.48631 47.82619,47.2543 53.78505,80.31043 1.36969,7.57565 -0.48009,15.0666 -5.06926,20.55241 a 21.886799,21.886799 0 0 1 -17.08583,7.86513 z" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 512 512">
          <path d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z" />
        </svg>
      );
    case "navbar_logo":
      return (
        <svg viewBox="0 0 115 150">
          <defs id="defs2" />
          <g id="layer1">
            <path
              id="rect852"
              fill="#e2e5ea"
              fillOpacity="1"
              strokeWidth="0.561043"
              d="m 23.416032,0.3248846 h 37.357257 c 13.595231,0 54.515421,4.239336 53.744931,47.4831814 l -0.92399,51.85939 C 113.10621,127.05749 87.317994,149.68352 71.915606,149.68352 H 17.592392 c -13.5952465,0 -17.14424139,-10.94489 -17.14424139,-24.54013 V 19.740648 C 0.44815061,6.145417 7.110134,0.3248846 23.416032,0.3248846 Z"
            />
            <g
              id="g874"
              transform="matrix(0.96167939,0,0,0.96167939,6.1694389,4.4946397)"
            >
              <path
                fill="#242b70"
                strokeWidth="0.284029"
                d="m 2.0079272,142.84576 c 0,-133.1207499 0,3.12721 0.00344,-134.5328185 0.469128,-6.4258705 6.1164564,-7.31896863 8.6076398,-7.3125964 4.038375,0.010306 25.445442,0.011594 40.109489,-0.0104129 9.661851,-0.0144707 21.001116,4.92643 28.967485,9.5039478 3.91907,2.306493 7.012062,4.714838 10.652549,8.29456 2.596672,2.553323 3.351222,3.490336 4.118429,5.114269 1.754824,3.714451 1.125873,7.672102 -1.674784,10.538383 -2.726233,2.790126 -6.184289,4.35697 -9.638417,4.367179 -3.941345,0.01159 -8.94864,-1.937319 -13.452175,-5.235929 -3.240792,-2.373717 -5.349484,-3.600659 -8.238362,-4.793508 -4.974403,-2.053997 -9.963997,-2.91812 -15.336077,-2.655982 -9.087734,0.44344 -17.040879,3.959615 -23.524986,10.400642 -8.550372,8.493563 -12.237362,20.824868 -9.729255,32.5399 1.462038,6.828978 4.642983,12.71258 9.532021,17.630796 6.928351,6.969702 15.6333,10.62875 25.284384,10.628084 13.609518,-8.48e-4 24.449875,-6.590865 32.790079,-19.933329 1.006973,-1.610944 2.935865,-5.293533 4.286431,-8.183538 4.117259,-8.810352 7.936687,-15.067252 11.207547,-18.359969 2.65112,-2.668842 8.663905,-6.337551 11.590825,-7.072156 l 0.78754,-0.197663 c 0.0373,10.764718 0.11985,22.011061 -0.17439,32.285611 -0.35912,11.258065 -1.04225,12.854141 -1.67698,15.924525 -2.19693,10.627325 -6.48058,20.128475 -13.051173,28.947585 -6.320344,8.48322 -13.163309,14.5155 -20.481264,18.05486 -2.979953,1.44126 -8.752534,3.9989 -12.39885,4.00234 z"
                id="path865"
              />
              <path
                fill="#ca4e9c"
                strokeWidth="0.284029"
                d="M 41.999886,89.222147 C 36.31619,87.973273 31.654247,85.44158 27.656844,81.433045 15.886957,69.630405 16.991779,50.095901 30.011464,39.800741 c 5.633243,-4.454423 11.674477,-6.360922 19.072623,-6.018959 12.551093,0.58015 23.049917,9.486237 25.904046,21.974251 0.682025,2.984151 0.695604,8.510053 0.02866,11.645588 -0.993082,4.668499 -3.628249,9.809993 -6.854505,13.373875 -2.578358,2.84817 -6.913247,5.740107 -10.763549,7.180687 -4.298293,1.608195 -11.242929,2.179124 -15.398812,1.265964 z"
                id="path871"
              />
            </g>
          </g>
        </svg>
      );
    case "Twitter":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            fill="#03a9f4"
          />
        </svg>
      );
    case "Facebook":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            id="rect832"
            fill="#3b5999"
            fillOpacity="1"
            stroke="none"
            strokeWidth="10.6958"
            d="m 254.74922,2.89017 c -140.41204,0 -253.452385,113.03839 -253.452385,253.45041 0,134.11607 103.132735,243.25113 234.739615,252.76925 V 334.19235 h -64.1402 v -80.17521 h 64.1402 v -64.14017 c 0,-53.15083 43.05944,-96.21027 96.21031,-96.21027 h 64.14017 v 80.17522 h -32.07007 c -17.70272,0 -32.0701,-1.66763 -32.0701,16.03505 v 64.14017 h 80.17521 L 380.3519,334.19235 H 332.24676 V 498.5947 C 435.82,466.7653 510.70317,370.62109 510.70317,256.34058 510.70317,115.92856 397.66285,2.89017 257.2508,2.89017 Z"
          />
        </svg>
      );
    case "Instagram":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <linearGradient
            id="SVGID_1_"
            gradientUnits="userSpaceOnUse"
            x1="-46.0041"
            y1="634.1208"
            x2="-32.9334"
            y2="647.1917"
            gradientTransform="matrix(32 0 0 -32 1519 20757)"
          >
            <stop offset="0" stopColor="#FFC107" id="stop2" />
            <stop offset="0.507" stopColor="#F44336" id="stop4" />
            <stop offset="0.99" stopColor="#9C27B0" id="stop6" />
          </linearGradient>
          <path
            fill="url(#SVGID_1_)"
            d="M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192  c88.352,0,160-71.648,160-160V160C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112  V160C48,98.24,98.24,48,160,48h192c61.76,0,112,50.24,112,112V352z"
            id="path9"
          />
          <linearGradient
            id="SVGID_2_"
            gradientUnits="userSpaceOnUse"
            x1="-42.2971"
            y1="637.8279"
            x2="-36.6404"
            y2="643.4846"
            gradientTransform="matrix(32 0 0 -32 1519 20757)"
          >
            <stop offset="0" stopColor="#FFC107" id="stop11" />
            <stop offset="0.507" stopColor="#F44336" id="stop13" />
            <stop offset="0.99" stopColor="#9C27B0" id="stop15" />
          </linearGradient>
          <path
            fill="url(#SVGID_2_)"
            d="M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128  S326.688,128,256,128z M256,336c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80  C336,300.096,300.096,336,256,336z"
            id="path18"
          />
          <linearGradient
            id="SVGID_3_"
            gradientUnits="userSpaceOnUse"
            x1="-35.5456"
            y1="644.5793"
            x2="-34.7919"
            y2="645.3331"
            gradientTransform="matrix(32,0,0,-32,1519,20756.48)"
          >
            <stop offset="0" stopColor="#FFC107" id="stop20" />
            <stop offset="0.507" stopColor="#F44336" id="stop22" />
            <stop offset="0.99" stopColor="#9C27B0" id="stop24" />
          </linearGradient>
          <circle
            fill="url(#SVGID_3_)"
            cx="393.60001"
            cy="117.88019"
            r="17.056"
            id="circle27"
          />
        </svg>
      );
    case "Gmail":
      return (
        <svg x="0px" y="0px" viewBox="0 0 512 512">
          <rect x="64" y="64" fill="#ECEFF1" width="384" height="384" />
          <polygon fill="#CFD8DC" points="256,296.384 448,448 448,148.672 " />
          <path
            fill="#F44336"
            d="M464,64h-16L256,215.616L64,64H48C21.504,64,0,85.504,0,112v288c0,26.496,21.504,48,48,48h16V148.672
	l192,147.68L448,148.64V448h16c26.496,0,48-21.504,48-48V112C512,85.504,490.496,64,464,64z"
          />
        </svg>
      );

    case "Whatsapp":
      return (
        <svg x="0px" y="0px" viewBox="0 0 24 24">
          <path
            fill="#00b309"
            d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
          />
        </svg>
      );
    case "Google":
      return (
        <svg viewBox="0 0 512 512">
          <path d="M473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 01-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4 57.73 0 112.45-22.62 151.45-63.66 38.34-40.4 58.17-96.3 58.17-154.9 0-24.67-2.48-39.32-2.59-39.96z" />
        </svg>
      );
    case "isi":
      return (
        <svg viewBox="0 0 512 512">
          <path
            d="M368 415.86V72a24.07 24.07 0 00-24-24H72a24.07 24.07 0 00-24 24v352a40.12 40.12 0 0040 40h328"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
          />
          <path
            d="M416 464h0a48 48 0 01-48-48V128h72a24 24 0 0124 24v264a48 48 0 01-48 48z"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="32"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M240 128h64M240 192h64M112 256h192M112 320h192M112 384h192"
          />
          <path
            fill="currentColor"
            d="M176 208h-64a16 16 0 01-16-16v-64a16 16 0 0116-16h64a16 16 0 0116 16v64a16 16 0 01-16 16z"
          />
        </svg>
      );
    case "sampul":
      return (
        <svg fill="currentColor" viewBox="0 0 512 512">
          <title>Book</title>
          <path
            d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0116 16v288a16 16 0 01-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0116-16c131.57.59 192 32.84 208 96zM256 160v288"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "finalisasi":
      return (
        <svg fill="none" viewBox="0 0 512 512" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m 176.97089,255.98084 52.51666,52.51666 105.03332,-105.03332 m 157.54998,52.51666 a 236.32497,236.32497 0 1 1 -472.649932,0 236.32497,236.32497 0 0 1 472.649932,0 z"
          />
        </svg>
      );
    case "checkmark-outline":
      return (
        <svg viewBox="0 0 512 512">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M416 128L192 384l-96-96"
          />
        </svg>
      );
    case "wallet-outline":
      return (
        <svg viewBox="0 0 512 512">
          <rect
            x="48"
            y="144"
            width="416"
            height="288"
            rx="48"
            ry="48"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
          />
          <path
            d="M411.36 144v-30A50 50 0 00352 64.9L88.64 109.85A50 50 0 0048 159v49"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
          />
          <path
            stroke="currentColor"
            fill="none"
            d="M368 320a32 32 0 1132-32 32 32 0 01-32 32z"
          />
        </svg>
      );
    case "cube-outline":
      return (
        <svg viewBox="0 0 512 512">
          <path
            d="M448 341.37V170.61A32 32 0 00432.11 143l-152-88.46a47.94 47.94 0 00-48.24 0L79.89 143A32 32 0 0064 170.61v170.76A32 32 0 0079.89 369l152 88.46a48 48 0 0048.24 0l152-88.46A32 32 0 00448 341.37z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M69 153.99l187 110 187-110M256 463.99v-200"
          />
        </svg>
      );
    case "people-outline":
      return (
        <svg viewBox="0 0 512 512">
          <path
            d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z"
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
          />
          <path
            d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
          />
        </svg>
      );
    case "reader-outline":
      return (
        <svg viewBox="0 0 512 512">
          <rect
            x="96"
            y="48"
            width="320"
            height="416"
            rx="48"
            ry="48"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M176 128h160M176 208h160M176 288h80"
          />
        </svg>
      );
    case "cart":
      return (
        <svg viewBox="0 0 512 512">
          <circle cx="176" cy="416" r="32" />
          <circle cx="400" cy="416" r="32" />
          <path d="M456.8 120.78a23.92 23.92 0 00-18.56-8.78H133.89l-6.13-34.78A16 16 0 00112 64H48a16 16 0 000 32h50.58l45.66 258.78A16 16 0 00160 368h256a16 16 0 000-32H173.42l-5.64-32h241.66A24.07 24.07 0 00433 284.71l28.8-144a24 24 0 00-5-19.93z" />
        </svg>
      );
    case "HEART-OUTLINE":
      return (
        <svg viewBox="0 0 512 512">
          <path
            d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "HEART":
      return (
        <svg viewBox="0 0 512 512">
          <path d="M256 448a32 32 0 01-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 009.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64.54 54.21-18.63 104.26-58.61 153-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 01-18 5.56z" />
        </svg>
      );
    default:
      return null;
      break;
  }
};

export default IconsControl;
