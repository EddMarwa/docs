import React from "react";

export function CookieConsent({ onAccept, onDecline }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 16,
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(0deg, #010101, #010101), linear-gradient(0deg, #222222, #222222)",
          border: "1px solid #222222",
          borderRadius: 20,
          width: "100%",
          maxWidth: 700,
          margin: "0 16px",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: 24,
          gap: 24,
        }}
      >
        <svg
          style={{ minWidth: 40 }}
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.8419 26.6581C27.1558 26.9731 27.3693 27.374 27.4555 27.8103C27.5417 28.2465 27.4966 28.6985 27.3261 29.1092C27.1556 29.5199 26.8672 29.8708 26.4974 30.1177C26.1275 30.3646 25.6928 30.4963 25.2481 30.4963C24.8035 30.4963 24.3688 30.3646 23.9989 30.1177C23.6291 29.8708 23.3407 29.5199 23.1702 29.1092C22.9996 28.6985 22.9546 28.2465 23.0408 27.8103C23.127 27.374 23.3405 26.9731 23.6544 26.6581C23.8634 26.4484 24.1118 26.2819 24.3853 26.1684C24.6588 26.0548 24.952 25.9963 25.2481 25.9963C25.5443 25.9963 25.8375 26.0548 26.111 26.1684C26.3845 26.2819 26.6329 26.4484 26.8419 26.6581ZM11.6544 25.1581C11.3405 25.4731 11.127 25.874 11.0408 26.3103C10.9546 26.7465 10.9996 27.1985 11.1702 27.6092C11.3407 28.0199 11.6291 28.3708 11.9989 28.6177C12.3688 28.8646 12.8035 28.9963 13.2481 28.9963C13.6928 28.9963 14.1275 28.8646 14.4974 28.6177C14.8672 28.3708 15.1556 28.0199 15.3261 27.6092C15.4966 27.1985 15.5417 26.7465 15.4555 26.3103C15.3693 25.874 15.1558 25.4731 14.8419 25.1581C14.6329 24.9489 14.3848 24.783 14.1116 24.6697C13.8385 24.5565 13.5457 24.4982 13.25 24.4982C12.9543 24.4982 12.6615 24.5565 12.3884 24.6697C12.1152 24.783 11.8671 24.9489 11.6581 25.1581H11.6544ZM13.3419 17.8456C13.6558 17.5306 13.8693 17.1297 13.9555 16.6935C14.0417 16.2572 13.9966 15.8052 13.8261 15.3946C13.6556 14.9839 13.3672 14.6329 12.9974 14.3861C12.6275 14.1392 12.1928 14.0074 11.7481 14.0074C11.3035 14.0074 10.8688 14.1392 10.4989 14.3861C10.1291 14.6329 9.84068 14.9839 9.67015 15.3946C9.49963 15.8052 9.45461 16.2572 9.5408 16.6935C9.62698 17.1297 9.8405 17.5306 10.1544 17.8456C10.3637 18.0551 10.6122 18.2213 10.8859 18.3345C11.1595 18.4478 11.4528 18.5059 11.7489 18.5055C12.045 18.5052 12.3382 18.4464 12.6116 18.3325C12.8849 18.2186 13.1331 18.0519 13.3419 17.8419V17.8456ZM22.3419 17.6581C22.0269 17.3442 21.626 17.1307 21.1897 17.0445C20.7535 16.9584 20.3015 17.0034 19.8908 17.1739C19.4801 17.3444 19.1292 17.6328 18.8823 18.0027C18.6354 18.3725 18.5037 18.8072 18.5037 19.2519C18.5037 19.6966 18.6354 20.1313 18.8823 20.5011C19.1292 20.8709 19.4801 21.1593 19.8908 21.3299C20.3015 21.5004 20.7535 21.5454 21.1897 21.4592C21.626 21.373 22.0269 21.1595 22.3419 20.8456C22.5516 20.6366 22.7181 20.3882 22.8316 20.1147C22.9452 19.8412 23.0037 19.548 23.0037 19.2519C23.0037 18.9557 22.9452 18.6625 22.8316 18.389C22.7181 18.1155 22.5516 17.8672 22.3419 17.6581ZM39.5 20C39.5 23.8567 38.3564 27.6269 36.2137 30.8336C34.071 34.0404 31.0255 36.5397 27.4623 38.0156C23.8992 39.4916 19.9784 39.8777 16.1957 39.1253C12.4131 38.3729 8.93855 36.5157 6.21143 33.7886C3.4843 31.0615 1.62711 27.5869 0.874696 23.8043C0.122284 20.0216 0.508449 16.1008 1.98436 12.5377C3.46027 8.97451 5.95963 5.92903 9.16639 3.78634C12.3731 1.64366 16.1433 0.5 20 0.5C20.3978 0.5 20.7794 0.658035 21.0607 0.93934C21.342 1.22064 21.5 1.60218 21.5 2C21.5 3.98912 22.2902 5.89678 23.6967 7.3033C25.1032 8.70982 27.0109 9.5 29 9.5C29.3978 9.5 29.7794 9.65804 30.0607 9.93934C30.342 10.2206 30.5 10.6022 30.5 11C30.5 12.9891 31.2902 14.8968 32.6967 16.3033C34.1032 17.7098 36.0109 18.5 38 18.5C38.3978 18.5 38.7794 18.658 39.0607 18.9393C39.342 19.2206 39.5 19.6022 39.5 20ZM36.4419 21.3856C34.1954 21.0447 32.1195 19.9858 30.5247 18.3673C28.9298 16.7488 27.9016 14.6576 27.5938 12.4062C25.3425 12.0984 23.2512 11.0702 21.6327 9.47535C20.0142 7.8805 18.9553 5.80465 18.6144 3.55813C15.4802 3.82229 12.4868 4.97679 9.98686 6.88558C7.48695 8.79437 5.5847 11.3779 4.50424 14.3319C3.42378 17.2858 3.21013 20.487 3.88846 23.5583C4.56679 26.6296 6.10884 29.443 8.33292 31.6671C10.557 33.8912 13.3704 35.4332 16.4417 36.1115C19.513 36.7899 22.7142 36.5762 25.6682 35.4958C28.6221 34.4153 31.2056 32.5131 33.1144 30.0131C35.0232 27.5132 36.1777 24.5198 36.4419 21.3856Z"
            fill="white"
          />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span style={{ color: "#969696" }}>
            We use tasty cookies to personalize your site experience and analyze site traffic
          </span>
          <a
            href="/cookie-policy.pdf"
            target="_blank"
            style={{
              color: "white",
              display: "flex",
              gap: 8,
              alignItems: "baseline",
              cursor: "pointer",
            }}
          >
            Learn more
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 11L11 1M11 1V11M11 1H1"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <div
          style={{
            display: "flex",
            gap: 8,
          }}
        >
          <button
            style={{
              background: "radial-gradient(50% 50% at 50% 50%, #9A60FF 0%, #6A23E7 100%)",
              border: "none",
              borderRadius: "24px",
              cursor: "pointer",
              fontSize: "medium",
              fontWeight: "600",
              padding: "12px 20px",
            }}
            onClick={onAccept}
          >
            Accept
          </button>
          <button
            style={{
              background: "linear-gradient(180deg, #151417 0%, #1B1A1A 100%)",
              border: "none",
              borderRadius: "24px",
              cursor: "pointer",
              fontSize: "medium",
              fontWeight: "600",
              padding: "12px 20px",
            }}
            onClick={onDecline}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;
