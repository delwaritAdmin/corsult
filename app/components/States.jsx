import React from "react";

function States() {
  return (
    <section>
      <div className="bg-[#1B1F23] w-full py-20">
        <div className="container mx-auto px-4">
            <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-3">
            <div className="lg:w-[25%] space-y-3">
          <h1 className="text-white font-bold text-4xl">Our States</h1>
          <p className="text-[#b5b5b5] text-sm">
            Maecenas euismod viverra purus, volutpat posuere mauris tristique
            quisokaft.
          </p>
            </div>
          <div className="pt-8 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-0 lg:grid-cols-4 lg:gap-4 lg:pt-0">
            <div className="flex flex-col items-center">
              <div className="py-4">
                <svg
                  width={50}
                  height={57}
                  fill="#06D889"
                  viewBox="0 0 50 57"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="25.5"
                    cy="33.5"
                    r="23.5"
                    fill="url(#paint0_linear_1505_1233)"
                  />
                  <g clipPath="url(#clip0_1505_1233)">
                    <path d="M7.49908 9.26982L9.09856 12.5761L12.7269 13.0699C13.4461 13.1665 13.7038 14.0575 13.21 14.5299L10.5585 17.074L11.2133 20.6809C11.3421 21.3894 10.5907 21.9261 9.96808 21.5826L6.73691 19.8436L3.50574 21.5826C2.88312 21.9154 2.09948 21.4001 2.27124 20.6272L2.91532 17.0633L0.263831 14.5191C-0.251439 14.0253 0.0276654 13.1451 0.757631 13.0485L4.37525 12.5547L5.97474 9.24835C6.27531 8.615 7.1985 8.62573 7.49908 9.26982ZM7.75671 13.7355L6.73691 11.61L5.70637 13.7355C5.58828 13.9824 5.34138 14.1756 5.05155 14.2186L2.7221 14.5299L4.42893 16.1616C4.62215 16.3548 4.7295 16.6339 4.67583 16.9237L4.25717 19.2424L6.31825 18.1368C6.56515 18.0079 6.87646 17.9865 7.13409 18.1368L9.20591 19.2532L8.79799 16.9774C8.73358 16.6983 8.80872 16.387 9.03415 16.1616L10.741 14.5299L8.433 14.2186C8.1539 14.1864 7.88553 14.0039 7.75671 13.7355ZM25.7697 1.4871L27.3692 4.79341L31.0083 5.28721C31.7275 5.38383 31.9851 6.27481 31.4913 6.75788L28.8398 9.30202L29.4947 12.9089C29.6235 13.6174 28.872 14.1541 28.2494 13.8106L24.9968 12.0716L21.7656 13.8106C21.143 14.1434 20.3594 13.6281 20.5311 12.8552L21.1752 9.29129L18.513 6.74715C17.9977 6.25334 18.2768 5.37309 19.0068 5.27648L22.6244 4.78268L24.2239 1.4871C24.5459 0.832277 25.4584 0.843012 25.7697 1.4871ZM26.0273 5.95277L24.9968 3.82728L23.977 5.95277C23.8589 6.19967 23.612 6.3929 23.3222 6.43584L20.982 6.74715L22.6888 8.37883C22.8928 8.57206 22.9894 8.85116 22.9357 9.141L22.517 11.4597L24.5889 10.354C24.8358 10.2252 25.1363 10.2037 25.4047 10.354L27.4765 11.4705L27.0686 9.19468C27.0042 8.91557 27.0793 8.60426 27.3048 8.37883L29.0116 6.74715L26.7036 6.4251C26.4138 6.40363 26.1561 6.22114 26.0273 5.95277ZM44.0296 9.26982L45.629 12.5761L49.2574 13.0699C49.9766 13.1665 50.245 14.0575 49.7405 14.5299L47.089 17.074L47.7438 20.6809C47.8726 21.3894 47.1212 21.9261 46.4986 21.5826L43.2674 19.8436L40.0362 21.5826C39.4136 21.9154 38.63 21.4001 38.791 20.6272L39.4351 17.0633L36.7836 14.5191C36.2683 14.0253 36.5474 13.1451 37.2774 13.0485L40.895 12.5547L42.4945 9.24835C42.8058 8.615 43.729 8.62573 44.0296 9.26982ZM44.2872 13.7355L43.2674 11.61L42.2369 13.7355C42.1188 13.9824 41.8826 14.1756 41.582 14.2186L39.2526 14.5299L40.9487 16.1616C41.1419 16.3548 41.2492 16.6339 41.1956 16.9237L40.7769 19.2424L42.8487 18.1368C43.0956 18.0079 43.4069 17.9865 43.6646 18.1368L45.7471 19.2532L45.3392 16.9774C45.2748 16.6983 45.3499 16.387 45.5754 16.1616L47.2715 14.5299L44.9635 14.2186C44.6844 14.1864 44.416 14.0039 44.2872 13.7355ZM21.0142 31.1903C20.778 30.7823 20.9176 30.2563 21.3255 30.0202C21.7334 29.784 22.2594 29.9235 22.4956 30.3315L23.6227 32.2852L27.6268 28.2811C27.9596 27.9484 28.5071 27.9484 28.8398 28.2811C29.1726 28.6139 29.1726 29.1614 28.8398 29.4942L24.0414 34.2926C23.6442 34.6898 22.9786 34.6039 22.6995 34.1208L21.0142 31.1903ZM24.9968 22.1194C29.6664 22.1194 33.4558 25.9087 33.4558 30.5784C33.4558 35.248 29.6664 39.0374 24.9968 39.0374C20.3271 39.0374 16.5378 35.248 16.5378 30.5784C16.5378 25.9087 20.3271 22.1194 24.9968 22.1194ZM29.763 25.8121C27.133 23.1821 22.8606 23.1821 20.2305 25.8121C17.6005 28.4422 17.6005 32.7146 20.2305 35.3446C22.8606 37.9746 27.133 37.9746 29.763 35.3446C32.393 32.7039 32.393 28.4422 29.763 25.8121ZM24.9968 16.8056C32.597 16.8056 38.7588 22.9674 38.7588 30.5676C38.7588 33.4446 37.8785 36.1175 36.3649 38.3289L40.4763 45.446C40.8735 46.1116 40.3261 46.863 39.6176 46.7557L35.4095 46.0901L33.1552 48.8597C32.758 49.375 32.0173 49.2891 31.7275 48.7738L28.8506 43.7929C26.3386 44.5229 23.6442 44.5229 21.143 43.7929L18.2661 48.7738C17.9762 49.2891 17.2355 49.375 16.8383 48.8597L14.584 46.0901L10.376 46.7557C9.65677 46.8738 9.15223 46.0901 9.49575 45.4783L13.6286 38.3289C9.89294 32.8649 10.5907 25.5116 15.2711 20.8312C17.7508 18.3514 21.1967 16.8056 24.9968 16.8056ZM35.227 39.7781C33.9174 41.238 32.3072 42.4081 30.4823 43.2025L32.5863 46.8416L34.3897 44.6302C34.5937 44.3726 34.905 44.276 35.2056 44.3296L38.104 44.7912L35.227 39.7781ZM19.5006 43.2025C17.6864 42.4081 16.0762 41.238 14.7665 39.7888L11.8789 44.7912L14.7773 44.3296C15.0671 44.276 15.3891 44.3833 15.5931 44.6302L17.3965 46.8416L19.5006 43.2025ZM33.5202 22.055C28.8184 17.3531 21.1859 17.3531 16.4841 22.055C11.7823 26.7568 11.7823 34.3892 16.4841 39.0911C21.1967 43.7929 28.8184 43.7929 33.5202 39.0911C38.222 34.3892 38.222 26.7568 33.5202 22.055Z" />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1505_1233"
                      x1="25.5"
                      y1={10}
                      x2="25.5"
                      y2={57}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset={0} stopColor="#06D889" stopOpacity={0} />
                      <stop offset={1} stopColor="#06D889" stopOpacity="0.28" />
                    </linearGradient>
                    <clipPath id="clip0_1505_1233">
                      <rect width={50} height={50} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="text-white font-bold text-4xl">
                0<span className="text-2xl font-semibold"> Years</span>{" "}
              </h3>
              <p className="text-[#b5b5b5] tracking-[1px]">
                Working With Passion
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="py-4">
                <svg
                  width={50}
                  height={57}
                  fill="#06D889"
                  viewBox="0 0 50 57"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="25.5"
                    cy="33.5"
                    r="23.5"
                    fill="url(#paint0_linear_1505_1236)"
                  />
                  <g clipPath="url(#clip0_1505_1236)">
                    <path d="M46.8148 27.3844L39.8438 24.4789V22.393C40.8033 21.8422 41.6342 21.0929 42.2809 20.1952C42.9276 19.2975 43.3752 18.2721 43.5938 17.1875H43.75C44.3716 17.196 44.9711 16.9572 45.4167 16.5237C45.8622 16.0901 46.1173 15.4974 46.1258 14.8758C46.1343 14.2542 45.8955 13.6546 45.462 13.2091C45.0284 12.7636 44.4357 12.5085 43.8141 12.5L44.5797 10.725C45.2339 9.20822 45.2673 7.49543 44.6728 5.95429C44.0784 4.41315 42.9033 3.16652 41.4 2.48201L39.2188 1.48982C37.9281 0.916787 36.5088 0.695321 35.1049 0.847895C33.701 1.00047 32.3624 1.52165 31.225 2.35857L30.0094 3.27576C28.7682 3.59543 27.7021 4.38965 27.0406 5.48748C26.6753 6.09393 26.4474 6.77308 26.3729 7.47713C26.2984 8.18118 26.3791 8.893 26.6094 9.56248C25.4299 9.32656 24.2127 9.35618 23.0461 9.6492C23.3801 8.23172 23.2115 6.74227 22.5693 5.43522C21.9272 4.12818 20.8511 3.08463 19.525 2.48279L17.3438 1.48982C16.0531 0.916787 14.6338 0.695321 13.2299 0.847895C11.826 1.00047 10.4874 1.52165 9.35001 2.35857L8.13438 3.27576C7.4303 3.45567 6.77545 3.79096 6.21788 4.25701C5.66031 4.72307 5.21418 5.30806 4.91223 5.96906C4.61028 6.63006 4.46017 7.35028 4.47293 8.07686C4.48568 8.80345 4.66098 9.51796 4.98594 10.1679L6.15313 12.5C5.53153 12.5128 4.94049 12.7721 4.51004 13.2207C4.07958 13.6693 3.84497 14.2706 3.85782 14.8922C3.87066 15.5138 4.12991 16.1048 4.57854 16.5353C5.02716 16.9657 5.6284 17.2003 6.25001 17.1875H6.40626C6.62566 18.2715 7.0736 19.2964 7.72022 20.1937C8.36685 21.091 9.19731 21.8403 10.1563 22.3914V24.4789L3.18516 27.3844C2.47253 27.6798 1.86366 28.1802 1.43571 28.822C1.00775 29.4639 0.779978 30.2184 0.781255 30.9898V41.4062C0.781255 41.6134 0.863565 41.8121 1.01008 41.9587C1.15659 42.1052 1.3553 42.1875 1.56251 42.1875H7.03126V48.4375C7.03126 48.6447 7.11357 48.8434 7.26008 48.9899C7.40659 49.1364 7.6053 49.2187 7.81251 49.2187H42.1875C42.3947 49.2187 42.5934 49.1364 42.7399 48.9899C42.8864 48.8434 42.9688 48.6447 42.9688 48.4375V42.1875H48.4375C48.6447 42.1875 48.8434 42.1052 48.9899 41.9587C49.1364 41.8121 49.2188 41.6134 49.2188 41.4062V30.9898C49.22 30.2184 48.9923 29.4639 48.5643 28.822C48.1363 28.1802 47.5275 27.6798 46.8148 27.3844ZM27.6352 11.5054L29.8156 12.5C30.9466 13.0152 31.8305 13.9533 32.2776 15.1129C32.7247 16.2725 32.6994 17.5612 32.207 18.7023L31.9727 19.2375L31.1719 17.6195C31.1208 17.5165 31.0476 17.426 30.9576 17.3545C30.8675 17.283 30.7628 17.2323 30.6508 17.2059C30.5389 17.1796 30.4225 17.1783 30.31 17.2021C30.1975 17.2259 30.0917 17.2743 30 17.3437L28.75 18.2812C27.6682 19.0926 26.3523 19.5312 25 19.5312C23.6477 19.5312 22.3319 19.0926 21.25 18.2812L20 17.3437C19.9088 17.2747 19.8034 17.2267 19.6914 17.2033C19.5794 17.18 19.4636 17.1817 19.3524 17.2086C19.2408 17.2347 19.1364 17.2851 19.0464 17.3561C18.9565 17.4271 18.8833 17.5171 18.832 17.6195L17.9688 19.3523L17.3234 18.0625C17.0717 17.5589 16.9528 16.9994 16.9781 16.437C17.0033 15.8746 17.1719 15.3279 17.4677 14.849C17.7635 14.37 18.1769 13.9745 18.6685 13.7002C19.16 13.4258 19.7136 13.2816 20.2766 13.2812C20.8784 13.2807 21.471 13.4289 22.0017 13.7129C22.5323 13.9968 22.9845 14.4076 23.318 14.9086L23.5633 15.2773L24.8633 14.4101L24.618 14.0422C23.9236 13.0018 22.8778 12.2463 21.6719 11.914C22.5581 11.3671 23.5641 11.0441 24.603 10.9729C25.642 10.9018 26.6826 11.0845 27.6352 11.5054ZM32.8125 22.6562H33.5938C33.801 22.6562 33.9997 22.7385 34.1462 22.8851C34.2927 23.0316 34.375 23.2303 34.375 23.4375C34.375 23.6447 34.2927 23.8434 34.1462 23.9899C33.9997 24.1364 33.801 24.2187 33.5938 24.2187H32.8125V22.6562ZM22.6563 31.6711C24.1819 32.1513 25.8182 32.1513 27.3438 31.6711V33.2703L25 35.614L22.6563 33.2703V31.6711ZM25 30.4687C23.343 30.4669 21.7543 29.8078 20.5826 28.6361C19.4109 27.4644 18.7519 25.8758 18.75 24.2187V21.2781L19.8109 19.1554L20.3125 19.5312C21.6648 20.5455 23.3096 21.0937 25 21.0937C26.6904 21.0937 28.3352 20.5455 29.6875 19.5312L30.1891 19.1554L31.25 21.2781V24.2187C31.2481 25.8758 30.5891 27.4644 29.4174 28.6361C28.2457 29.8078 26.657 30.4669 25 30.4687ZM17.1875 24.2187H16.4063C16.1991 24.2187 16.0003 24.1364 15.8538 23.9899C15.7073 23.8434 15.625 23.6447 15.625 23.4375C15.625 23.2303 15.7073 23.0316 15.8538 22.8851C16.0003 22.7385 16.1991 22.6562 16.4063 22.6562H17.1875V24.2187ZM7.03126 39.875V40.625H2.34376V30.9898C2.34347 30.5273 2.48033 30.075 2.73703 29.6903C2.99373 29.3055 3.35875 29.0055 3.78594 28.8281L11.2383 25.7234C11.381 25.6639 11.5028 25.5634 11.5883 25.4346C11.6738 25.3058 11.7192 25.1546 11.7188 25V21.925C11.7146 21.777 11.6704 21.6329 11.5907 21.5081C11.511 21.3832 11.3989 21.2824 11.2664 21.2164C10.3325 20.7518 9.53022 20.06 8.9334 19.2045C8.33658 18.349 7.96431 17.3572 7.85079 16.3203C7.82963 16.1291 7.7387 15.9525 7.59542 15.8242C7.45213 15.6959 7.26655 15.625 7.07422 15.625H6.25001C6.0428 15.625 5.84409 15.5427 5.69758 15.3962C5.55107 15.2496 5.46876 15.0509 5.46876 14.8437C5.46876 14.6365 5.55107 14.4378 5.69758 14.2913C5.84409 14.1448 6.0428 14.0625 6.25001 14.0625H7.03126C7.13431 14.0625 7.23635 14.0421 7.33149 14.0025C7.42664 13.9629 7.51301 13.9049 7.58562 13.8317C7.65824 13.7586 7.71567 13.6718 7.75461 13.5764C7.79355 13.481 7.81323 13.3788 7.81251 13.2758L7.80704 12.4945C7.80631 12.3752 7.77825 12.2576 7.725 12.1508L6.3836 9.46873C6.1589 9.01844 6.04005 8.52277 6.03614 8.01955C6.03223 7.51632 6.14335 7.01886 6.36101 6.56513C6.57868 6.11141 6.89715 5.71341 7.29209 5.40154C7.68704 5.08966 8.14802 4.87215 8.63985 4.76561C8.75041 4.74111 8.85453 4.69345 8.94532 4.62576L10.2891 3.61014C11.2009 2.93995 12.2736 2.52267 13.3986 2.40057C14.5237 2.27846 15.661 2.45587 16.6953 2.91482L18.8781 3.90623C20.0091 4.42145 20.893 5.35955 21.3401 6.51916C21.7872 7.67877 21.7619 8.96745 21.2695 10.1086L21.143 10.4015C20.8463 10.5658 20.561 10.7498 20.2891 10.9523L19.057 11.875C18.3544 12.0555 17.7011 12.391 17.145 12.8569C16.5889 13.3229 16.1442 13.9074 15.8435 14.5676C15.5427 15.2278 15.3936 15.9469 15.4071 16.6723C15.4205 17.3976 15.5961 18.1107 15.9211 18.7594L17.0898 21.0937H16.4063C15.7847 21.0937 15.1885 21.3407 14.749 21.7802C14.3094 22.2197 14.0625 22.8159 14.0625 23.4375C14.0625 24.0591 14.3094 24.6552 14.749 25.0948C15.1885 25.5343 15.7847 25.7812 16.4063 25.7812H17.3438C17.5675 26.8622 18.0173 27.8837 18.6635 28.7787C19.3098 29.6736 20.138 30.4218 21.0938 30.9742V33L9.89219 36.1117C9.07052 36.3418 8.34645 36.8339 7.83005 37.5131C7.31365 38.1924 7.03318 39.0217 7.03126 39.875ZM41.4063 47.6562H36.7188V41.4062H35.1563V47.6562H14.8438V41.4062H13.2813V47.6562H8.59376V39.875C8.59489 39.3627 8.76345 38.8649 9.07373 38.4573C9.38402 38.0497 9.81903 37.7546 10.3125 37.6172L21.6477 34.4687L24.45 37.2711C24.5965 37.4175 24.7952 37.4998 25.0023 37.4998C25.2095 37.4998 25.4082 37.4175 25.5547 37.2711L28.357 34.4687L39.6875 37.6172C40.181 37.7546 40.616 38.0497 40.9263 38.4573C41.2366 38.8649 41.4051 39.3627 41.4063 39.875V47.6562ZM47.6563 40.625H42.9688V39.875C42.9668 39.0217 42.6864 38.1924 42.17 37.5131C41.6536 36.8339 40.9295 36.3418 40.1078 36.1117L28.9063 33V30.9742C29.862 30.4218 30.6902 29.6736 31.3365 28.7787C31.9827 27.8837 32.4325 26.8622 32.6563 25.7812H33.5938C34.2154 25.7812 34.8115 25.5343 35.251 25.0948C35.6906 24.6552 35.9375 24.0591 35.9375 23.4375C35.9375 22.8159 35.6906 22.2197 35.251 21.7802C34.8115 21.3407 34.2154 21.0937 33.5938 21.0937H32.8766L33.6422 19.3195C34.2964 17.8028 34.3298 16.09 33.7353 14.5488C33.1409 13.0077 31.9658 11.7611 30.4625 11.0765L28.65 10.2508L28.2594 9.46951C28.0345 9.01925 27.9155 8.52355 27.9115 8.02028C27.9075 7.51701 28.0185 7.01947 28.2361 6.56565C28.4537 6.11184 28.7721 5.71374 29.167 5.40178C29.562 5.08981 30.023 4.87221 30.5148 4.76561C30.6254 4.74111 30.7295 4.69345 30.8203 4.62576L32.1641 3.61014C33.0759 2.93995 34.1486 2.52267 35.2736 2.40057C36.3987 2.27846 37.5359 2.45587 38.5703 2.91482L40.7531 3.90623C41.8841 4.42145 42.768 5.35955 43.2151 6.51916C43.6622 7.67877 43.6369 8.96745 43.1445 10.1086L42.2461 12.1875C42.2035 12.2861 42.1817 12.3925 42.182 12.5L42.1875 13.2812C42.1875 13.4884 42.2698 13.6871 42.4163 13.8337C42.5628 13.9802 42.7616 14.0625 42.9688 14.0625H43.75C43.9572 14.0625 44.1559 14.1448 44.3024 14.2913C44.4489 14.4378 44.5313 14.6365 44.5313 14.8437C44.5313 15.0509 44.4489 15.2496 44.3024 15.3962C44.1559 15.5427 43.9572 15.625 43.75 15.625H42.9258C42.7335 15.625 42.5479 15.6959 42.4046 15.8242C42.2613 15.9525 42.1704 16.1291 42.1492 16.3203C42.0353 17.3612 41.6605 18.3564 41.0597 19.2139C40.4588 20.0714 39.6512 20.7634 38.7117 21.2258C38.5816 21.2904 38.472 21.3901 38.3954 21.5137C38.3188 21.6372 38.2782 21.7796 38.2781 21.925V25C38.2781 25.1542 38.3237 25.3049 38.4092 25.4332C38.4947 25.5616 38.6163 25.6617 38.7586 25.7211L46.2141 28.8281C46.6413 29.0055 47.0063 29.3055 47.263 29.6903C47.5197 30.075 47.6565 30.5273 47.6563 30.9898V40.625Z" />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1505_1236"
                      x1="25.5"
                      y1={10}
                      x2="25.5"
                      y2={57}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset={0} stopColor="#06D889" stopOpacity={0} />
                      <stop offset={1} stopColor="#06D889" stopOpacity="0.28" />
                    </linearGradient>
                    <clipPath id="clip0_1505_1236">
                      <rect width={50} height={50} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="text-white font-bold text-4xl">
                0K<span className="text-2xl font-semibold"> Customer</span>{" "}
              </h3>
              <p className="text-[#b5b5b5] tracking-[1px]">
                Satisfied Customer
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="py-4">
                <svg
                  width={50}
                  fill="#06D889"
                  height={57}
                  viewBox="0 0 50 57"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="25.5"
                    cy="33.5"
                    r="23.5"
                    fill="url(#paint0_linear_1505_1244)"
                  />
                  <g clipPath="url(#clip0_1505_1244)">
                    <path d="M50 22.162V27.8378C50 29.2753 48.8305 30.4446 47.3932 30.4446H43.5581C43.1683 31.7734 42.6362 33.0563 41.9709 34.2708L44.6844 36.9842C45.7007 38.0006 45.7007 39.6545 44.6844 40.6709L40.671 44.6844C40.6475 44.7078 40.6236 44.7309 40.5994 44.7532C40.4552 44.8873 40.2654 44.9618 40.0685 44.9615C39.9114 44.9616 39.7579 44.9143 39.6282 44.8258C39.4984 44.7373 39.3983 44.6118 39.3409 44.4656C39.2836 44.3193 39.2716 44.1592 39.3066 44.0061C39.3416 43.853 39.422 43.714 39.5372 43.6072C39.547 43.5981 39.5566 43.5889 39.5661 43.5794L43.5795 39.5659C43.9867 39.1588 43.9867 38.4962 43.5795 38.0891L40.4452 34.9548C40.3228 34.8323 40.2445 34.6727 40.2227 34.5009C40.2008 34.3291 40.2367 34.1549 40.3246 34.0058C41.1604 32.5881 41.794 31.0605 42.2069 29.4675C42.2503 29.2999 42.3482 29.1515 42.4851 29.0455C42.622 28.9395 42.7902 28.882 42.9633 28.882H47.3931C47.9688 28.882 48.4374 28.4135 48.4374 27.8377V22.1619C48.4374 21.5861 47.9688 21.1177 47.3931 21.1177H42.9633C42.7902 21.1177 42.622 21.0602 42.4851 20.9542C42.3483 20.8483 42.2504 20.6999 42.207 20.5323C41.7939 18.9392 41.1603 17.4117 40.3246 15.9938C40.2367 15.8447 40.2008 15.6705 40.2227 15.4987C40.2445 15.3269 40.3228 15.1673 40.4452 15.0448L43.5796 11.9106C43.9867 11.5034 43.9867 10.8408 43.5795 10.4337L39.5661 6.42031C39.3702 6.22441 39.1081 6.1166 38.8276 6.1166C38.5472 6.1166 38.2849 6.22441 38.0891 6.42031L34.9549 9.55459C34.8324 9.67702 34.6728 9.75531 34.501 9.77714C34.3292 9.79897 34.155 9.76311 34.0059 9.67519C32.5882 8.8394 31.0606 8.20583 29.4676 7.79287C29.3 7.74947 29.1516 7.65164 29.0456 7.51474C28.9396 7.37785 28.8821 7.20964 28.8821 7.03652V2.60684C28.8821 2.03105 28.4137 1.5625 27.8379 1.5625H22.162C21.5862 1.5625 21.1178 2.03105 21.1178 2.60684V7.03662C21.1178 7.2097 21.0603 7.37787 20.9544 7.51475C20.8484 7.65162 20.7001 7.74945 20.5325 7.79287C18.9394 8.20596 17.4118 8.83955 15.994 9.67529C15.8448 9.76316 15.6707 9.79899 15.4989 9.77716C15.3272 9.75533 15.1675 9.67708 15.045 9.55469L11.9107 6.42041C11.7149 6.22451 11.4526 6.1167 11.1722 6.1167C10.8917 6.1167 10.6296 6.22451 10.4338 6.42031L6.42031 10.4338C6.01309 10.8409 6.01309 11.5035 6.42031 11.9108L9.55459 15.0449C9.67702 15.1674 9.7553 15.327 9.77715 15.4988C9.799 15.6705 9.76317 15.8447 9.67529 15.9938C8.83944 17.4116 8.20584 18.9392 7.79287 20.5323C7.74947 20.6999 7.65164 20.8483 7.51474 20.9543C7.37785 21.0603 7.20964 21.1178 7.03652 21.1178H2.60684C2.03105 21.1178 1.5625 21.5862 1.5625 22.162V27.8378C1.5625 28.4136 2.03105 28.8821 2.60684 28.8821H7.03662C7.20971 28.8821 7.3779 28.9396 7.51477 29.0456C7.65165 29.1515 7.74947 29.2999 7.79287 29.4675C8.20598 31.0605 8.83957 32.5881 9.67529 34.0059C9.76321 34.155 9.79907 34.3292 9.77724 34.501C9.7554 34.6728 9.67712 34.8324 9.55469 34.9549L6.42041 38.0892C6.01318 38.4963 6.01318 39.1589 6.42041 39.566L10.4339 43.5795C10.4443 43.59 10.4534 43.5988 10.4627 43.6073C10.6115 43.749 10.6986 43.9435 10.705 44.1488C10.7114 44.3542 10.6367 44.5538 10.4971 44.7045C10.3574 44.8551 10.164 44.9447 9.95881 44.9539C9.75357 44.963 9.55299 44.891 9.40049 44.7533C9.37566 44.7303 9.35131 44.7068 9.32744 44.6828L5.31553 40.671C4.29922 39.6546 4.29922 38.0007 5.31553 36.9843L8.029 34.2709C7.36378 33.0564 6.83166 31.7735 6.44189 30.4447H2.60684C1.16953 30.4447 0 29.2753 0 27.8379V22.1621C0 20.7247 1.16953 19.5554 2.60684 19.5554H6.44189C6.83164 18.2265 7.3638 16.9437 8.0291 15.7292L5.31562 13.0158C4.29932 11.9993 4.29932 10.3454 5.31562 9.329L9.3291 5.31562C9.82002 4.8248 10.4746 4.5543 11.1724 4.5543C11.8701 4.5543 12.5248 4.82471 13.0157 5.31562L15.7292 8.0291C16.9437 7.36388 18.2266 6.83176 19.5554 6.44199V2.60684C19.5553 1.16943 20.7247 0 22.162 0H27.8379C29.2753 0 30.4446 1.16943 30.4446 2.60684V6.44189C31.7735 6.83164 33.0563 7.3638 34.2708 8.0291L36.9842 5.31562C37.4752 4.82471 38.1299 4.5543 38.8276 4.5543C39.5254 4.5543 40.18 4.8248 40.6709 5.31572L44.6844 9.329C45.7007 10.3454 45.7007 11.9993 44.6844 13.0157L41.9709 15.7291C42.6361 16.9437 43.1682 18.2265 43.558 19.5554H47.3931C48.8305 19.5553 50 20.7247 50 22.162ZM34.5129 33.147C34.6482 33.2494 34.8132 33.3048 34.9829 33.3046C35.1039 33.3048 35.2233 33.2768 35.3316 33.2229C35.44 33.169 35.5343 33.0906 35.6071 32.9939C37.3565 30.676 38.2813 27.9116 38.2813 25C38.2813 17.6767 32.3233 11.7187 25 11.7187C17.6767 11.7187 11.7187 17.6767 11.7187 25C11.7187 27.9116 12.6435 30.676 14.3929 32.9939C14.5177 33.1593 14.7031 33.2684 14.9083 33.297C15.1135 33.3257 15.3217 33.2717 15.4871 33.1469C15.6525 33.022 15.7615 32.8366 15.7902 32.6314C15.8189 32.4262 15.7649 32.218 15.64 32.0526C14.0968 30.0079 13.2812 27.5691 13.2812 24.9999C13.2812 18.5381 18.5382 13.2811 25 13.2811C31.4618 13.2811 36.7188 18.5382 36.7188 25C36.7188 27.5692 35.9031 30.008 34.36 32.0527C34.2352 32.2181 34.1812 32.4263 34.2098 32.6315C34.2385 32.8367 34.3475 33.0221 34.5129 33.147ZM36.0859 35.6599C37.508 37.207 38.2911 39.2098 38.2911 41.2991V49.2188C38.2911 49.4259 38.2088 49.6247 38.0623 49.7712C37.9158 49.9177 37.7171 50 37.5099 50H12.4901C12.2829 50 12.0842 49.9177 11.9377 49.7712C11.7912 49.6247 11.7089 49.4259 11.7089 49.2188V41.2991C11.7089 39.2097 12.4921 37.207 13.9141 35.6599C15.327 34.1228 17.2398 33.173 19.3003 32.9858C19.6497 32.9532 19.9791 33.1604 20.1026 33.4898L21.524 37.2849L22.5817 40.0618L23.1354 37.1284L21.4962 34.1052C21.4316 33.9862 21.3991 33.8525 21.4018 33.7171C21.4045 33.5818 21.4424 33.4494 21.5116 33.3331C21.5809 33.2168 21.6792 33.1205 21.7969 33.0536C21.9146 32.9867 22.0476 32.9515 22.183 32.9516H27.8169C27.9523 32.9515 28.0853 32.9867 28.203 33.0536C28.3207 33.1205 28.419 33.2168 28.4883 33.3331C28.5575 33.4494 28.5954 33.5818 28.5981 33.7171C28.6008 33.8525 28.5683 33.9862 28.5037 34.1052L26.8645 37.1284L27.4182 40.0618L28.4774 37.2807L29.8972 33.4897C29.9572 33.3295 30.0683 33.1933 30.2132 33.1023C30.3582 33.0112 30.529 32.9703 30.6995 32.9857C32.7602 33.173 34.673 34.1228 36.0859 35.6599ZM24.0998 48.4375L20.0623 37.837L18.8578 34.6211C15.6817 35.1963 13.2714 38.0225 13.2714 41.2991V48.4375H24.0998ZM25 46.411L26.3551 42.8533L25.2776 37.1453C25.2443 36.9687 25.2729 36.786 25.3585 36.628L26.5047 34.5142H23.4953L24.6415 36.628C24.7271 36.786 24.7557 36.9687 24.7224 37.1453L23.6449 42.8533L25 46.411ZM36.7286 41.2991C36.7286 38.0225 34.3183 35.1963 31.1422 34.6211L29.9394 37.8329L25.9002 48.4375H36.7286V41.2991ZM25 17.9023C28.9699 17.9023 32.1998 21.1321 32.1998 25.1022C32.1998 29.0724 28.9699 32.3021 25 32.3021C21.03 32.3021 17.8001 29.0723 17.8001 25.1021C17.8001 21.132 21.03 17.9023 25 17.9023ZM25 19.4648C21.8916 19.4648 19.3626 21.9937 19.3626 25.1022C19.3626 28.2107 21.8916 30.7396 25 30.7396C28.1084 30.7396 30.6373 28.2106 30.6373 25.1021C30.6373 21.9937 28.1084 19.4648 25 19.4648Z" />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1505_1244"
                      x1="25.5"
                      y1={10}
                      x2="25.5"
                      y2={57}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset={0} stopColor="#06D889" stopOpacity={0} />
                      <stop offset={1} stopColor="#06D889" stopOpacity="0.28" />
                    </linearGradient>
                    <clipPath id="clip0_1505_1244">
                      <rect width={50} height={50} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className="text-white font-bold text-4xl">
                0<span className="text-2xl font-semibold"> Project</span>{" "}
              </h3>
              <p className="text-[#b5b5b5] tracking-[1px]">
                We Have Completed
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="py-4">
                <svg
                  width={50}
                  height={57}
                  fill="#06D889"
                  viewBox="0 0 50 57"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="25.5"
                    cy="33.5"
                    r="23.5"
                    fill="url(#paint0_linear_1505_1252)"
                  />
                  <path d="M42.5286 15.4331C42.1985 14.9731 41.9348 14.469 41.7453 13.9356C41.6353 13.3549 41.6081 12.7615 41.6644 12.1731C41.8016 11.1478 41.6447 10.1045 41.2119 9.16485C40.6087 8.31193 39.7747 7.64878 38.8078 7.25321C38.2784 7.01356 37.7857 6.69987 37.3445 6.32156C36.9665 5.88019 36.6528 5.38753 36.4128 4.85825C36.0176 3.89121 35.3547 3.05694 34.502 2.45329C33.5622 2.02115 32.5191 1.86453 31.4938 2.00163C30.9054 2.05818 30.3121 2.03125 29.7313 1.92163C29.1975 1.73227 28.6931 1.46857 28.233 1.13831C27.3954 0.488843 26.3888 0.0937275 25.333 0C24.2774 0.0934854 23.2708 0.488308 22.4331 1.13748C21.9729 1.46762 21.4685 1.73132 20.9348 1.9208C20.3542 2.02981 19.7612 2.05702 19.1731 2.00163C18.1475 1.86454 17.104 2.02145 16.164 2.45413C15.3114 3.05748 14.6486 3.89147 14.2532 4.85825C14.0136 5.3877 13.6999 5.88039 13.3216 6.32156C12.8802 6.69959 12.3875 7.01325 11.8583 7.25321C10.8912 7.6485 10.0569 8.31135 9.45329 9.16401C9.02124 10.1039 8.86462 11.147 9.00163 12.1723C9.0582 12.7606 9.03127 13.354 8.92163 13.9348C8.73234 14.4688 8.46864 14.9735 8.13831 15.4339C7.48899 16.2713 7.09388 17.2776 7 18.333C7.09349 19.3887 7.48831 20.3953 8.13748 21.233C8.46762 21.6932 8.73132 22.1976 8.9208 22.7313C9.03066 23.3118 9.05787 23.9048 9.00163 24.4929C8.86426 25.5186 9.02118 26.5621 9.45413 27.502C10.0575 28.3546 10.8915 29.0175 11.8583 29.4128C12.3877 29.6528 12.8804 29.9667 13.3216 30.3453C13.6995 30.7864 14.0132 31.2788 14.2532 31.8078C14.4882 32.2836 14.7587 32.741 15.0624 33.1761L10.3833 46.0309C10.3294 46.1785 10.3184 46.3382 10.3514 46.4918C10.3845 46.6454 10.4602 46.7864 10.57 46.8988C10.6797 47.0112 10.819 47.0902 10.9717 47.1269C11.1245 47.1635 11.2845 47.1562 11.4333 47.1059L15.8565 45.6117L18.2848 49.6C18.3592 49.7222 18.4639 49.8233 18.5887 49.8933C18.7135 49.9634 18.8542 50.0001 18.9973 50C19.024 50 19.0515 49.9983 19.079 49.9958C19.2353 49.9804 19.3841 49.921 19.5081 49.8246C19.6321 49.7281 19.7263 49.5986 19.7798 49.4508L24.4772 36.5477C25.0371 36.7059 25.6298 36.7059 26.1897 36.5477L30.8863 49.4508C30.9398 49.5986 31.034 49.7281 31.158 49.8246C31.282 49.921 31.4308 49.9804 31.5871 49.9958C31.6146 49.9983 31.6429 50 31.6696 50C31.8126 50 31.9531 49.9632 32.0778 49.8931C32.2024 49.8231 32.3069 49.7221 32.3812 49.6L34.8095 45.6109L39.2328 47.105C39.3815 47.1553 39.5414 47.1625 39.694 47.1259C39.8466 47.0893 39.9858 47.0103 40.0955 46.8981C40.2052 46.7859 40.281 46.6449 40.3141 46.4915C40.3473 46.3381 40.3364 46.1784 40.2828 46.0309L35.6037 33.1753C35.9069 32.7403 36.1771 32.2832 36.412 31.8078C36.6522 31.2783 36.9664 30.7856 37.3453 30.3445C37.7864 29.9665 38.2788 29.6529 38.8078 29.4128C39.7748 29.0176 40.6091 28.3547 41.2128 27.502C41.6448 26.5622 41.8014 25.5191 41.6644 24.4938C41.6078 23.9054 41.6348 23.3121 41.7444 22.7313C41.9338 22.1975 42.1975 21.6931 42.5277 21.233C43.1772 20.3954 43.5723 19.3888 43.6661 18.333C43.5726 17.2774 43.1777 16.2708 42.5286 15.4331ZM18.8073 47.2517L16.934 44.1751C16.8355 44.0134 16.6849 43.89 16.5069 43.8253C16.3289 43.7606 16.1342 43.7585 15.9549 43.8193L12.5424 44.9717L16.414 34.3353C17.2951 34.6591 18.2398 34.7719 19.1723 34.6644C19.7606 34.6083 20.3539 34.6353 20.9348 34.7444C21.4688 34.9337 21.9735 35.1974 22.4339 35.5277C22.6031 35.6361 22.7781 35.7461 22.9564 35.8527L18.8073 47.2517ZM34.7112 43.8193C34.5319 43.7585 34.3372 43.7606 34.1592 43.8253C33.9812 43.89 33.8305 44.0134 33.7321 44.1751L31.8588 47.2517L27.7097 35.8536C27.8888 35.7452 28.0638 35.6361 28.233 35.5286C28.6929 35.1985 29.197 34.9348 29.7305 34.7453C30.3112 34.6357 30.9046 34.6085 31.4929 34.6644C32.4258 34.7723 33.3709 34.6592 34.252 34.3344L38.1236 44.9717L34.7112 43.8193ZM41.1219 20.3372C40.6954 20.9381 40.3627 21.6004 40.1353 22.3013C39.9763 23.0434 39.9302 23.8054 39.9986 24.5613C40.1037 25.2715 40.0248 25.9968 39.7695 26.6679C39.3109 27.2327 38.7141 27.6693 38.037 27.9354C37.3545 28.2482 36.7237 28.6633 36.1662 29.1662C35.6627 29.7234 35.2474 30.3543 34.9345 31.037C34.6686 31.7144 34.232 32.3115 33.6671 32.7703C32.9958 33.0247 32.2706 33.1033 31.5604 32.9986C30.8045 32.9306 30.0427 32.9767 29.3005 33.1353C28.5998 33.3629 27.9379 33.6955 27.3372 34.1219C26.7576 34.585 26.0664 34.8876 25.333 34.9994C24.5996 34.8876 23.9085 34.585 23.3289 34.1219C22.728 33.6954 22.0657 33.3627 21.3648 33.1353C20.8971 33.0202 20.4163 32.967 19.9348 32.977C19.6565 32.977 19.379 32.9878 19.1048 32.9986C18.3946 33.1035 17.6694 33.0249 16.9982 32.7703C16.4332 32.3115 15.9966 31.7144 15.7307 31.037C15.4178 30.3545 15.0028 29.7237 14.4999 29.1662C13.9427 28.6627 13.3118 28.2474 12.6291 27.9345C11.9516 27.6686 11.3545 27.232 10.8958 26.6671C10.6407 25.9959 10.5621 25.2706 10.6674 24.5604C10.7358 23.8045 10.6898 23.0426 10.5308 22.3005C10.3032 21.5998 9.97051 20.9379 9.54412 20.3372C9.08104 19.7576 8.77843 19.0664 8.66664 18.333C8.77843 17.5996 9.08104 16.9085 9.54412 16.3289C9.97068 15.728 10.3034 15.0657 10.5308 14.3648C10.6898 13.6226 10.7359 12.8607 10.6674 12.1048C10.5624 11.3945 10.6413 10.6692 10.8966 9.99817C11.3551 9.43335 11.9519 8.99671 12.6291 8.73069C13.3116 8.41781 13.9424 8.00278 14.4999 7.49988C15.0033 6.94267 15.4187 6.31178 15.7315 5.62907C15.9974 4.95164 16.4341 4.35453 16.999 3.89577C17.6702 3.64089 18.3954 3.56228 19.1056 3.66744C19.8615 3.7354 20.6234 3.68933 21.3656 3.53077C22.0662 3.30319 22.7282 2.97051 23.3289 2.54412C23.9085 2.08104 24.5996 1.77843 25.333 1.66664C26.0664 1.77843 26.7576 2.08104 27.3372 2.54412C27.9381 2.97068 28.6004 3.30336 29.3013 3.53077C30.0435 3.68934 30.8053 3.73541 31.5613 3.66744C32.2715 3.5624 32.9968 3.6413 33.6679 3.8966C34.2327 4.35513 34.6693 4.95195 34.9354 5.62907C35.2482 6.31156 35.6633 6.9424 36.1662 7.49988C36.7234 8.00334 37.3543 8.41868 38.037 8.73152C38.7144 8.99742 39.3115 9.43406 39.7703 9.999C40.0253 10.6701 40.1039 11.3954 39.9986 12.1056C39.9302 12.8615 39.9763 13.6234 40.1353 14.3656C40.3629 15.0662 40.6955 15.7282 41.1219 16.3289C41.585 16.9085 41.8876 17.5996 41.9994 18.333C41.8876 19.0664 41.585 19.7576 41.1219 20.3372Z" />
                  <path d="M25.3331 4.99988C22.6961 4.99988 20.1183 5.78185 17.9256 7.24691C15.733 8.71197 14.0241 10.7943 13.0149 13.2306C12.0058 15.6669 11.7417 18.3478 12.2562 20.9341C12.7707 23.5205 14.0405 25.8963 15.9052 27.7609C17.7699 29.6256 20.1456 30.8954 22.732 31.4099C25.3183 31.9244 27.9992 31.6603 30.4355 30.6512C32.8718 29.642 34.9541 27.9331 36.4192 25.7405C37.8843 23.5478 38.6662 20.97 38.6662 18.333C38.6623 14.798 37.2562 11.409 34.7567 8.90944C32.2571 6.40986 28.8681 5.00385 25.3331 4.99988ZM25.3331 29.9995C23.0257 29.9995 20.7701 29.3152 18.8516 28.0333C16.933 26.7514 15.4377 24.9293 14.5547 22.7976C13.6717 20.6658 13.4407 18.32 13.8908 16.057C14.341 13.7939 15.4521 11.7151 17.0837 10.0835C18.7153 8.45196 20.794 7.34084 23.0571 6.89068C25.3202 6.44053 27.6659 6.67157 29.7977 7.55457C31.9295 8.43758 33.7515 9.9329 35.0334 11.8514C36.3154 13.77 36.9996 16.0256 36.9996 18.333C36.9961 21.426 35.7658 24.3914 33.5787 26.5785C31.3915 28.7657 28.4262 29.9959 25.3331 29.9995Z" />
                  <path d="M28.3227 14.1747L26.0794 9.63147C26.0029 9.50134 25.8937 9.39345 25.7627 9.31849C25.6317 9.24353 25.4833 9.2041 25.3324 9.2041C25.1814 9.2041 25.0331 9.24353 24.902 9.31849C24.771 9.39345 24.6618 9.50134 24.5853 9.63147L22.3437 14.1756L17.3271 14.9047C17.1733 14.9272 17.0289 14.9922 16.9102 15.0924C16.7914 15.1926 16.7031 15.324 16.655 15.4718C16.607 15.6195 16.6013 15.7778 16.6385 15.9286C16.6756 16.0795 16.7542 16.217 16.8654 16.3255L20.4945 19.863L19.6379 24.8587C19.6116 25.012 19.6288 25.1695 19.6874 25.3135C19.746 25.4575 19.8437 25.5823 19.9695 25.6737C20.0953 25.765 20.2441 25.8194 20.3992 25.8306C20.5543 25.8418 20.7094 25.8094 20.847 25.737L25.3328 23.3787L29.8185 25.737C29.9562 25.8094 30.1113 25.8418 30.2664 25.8306C30.4214 25.8194 30.5703 25.765 30.6961 25.6737C30.8219 25.5823 30.9196 25.4575 30.9782 25.3135C31.0368 25.1695 31.0539 25.012 31.0277 24.8587L30.171 19.863L33.8001 16.3255C33.9113 16.2169 33.9899 16.0794 34.0271 15.9285C34.0642 15.7775 34.0584 15.6192 34.0103 15.4714C33.9622 15.3237 33.8737 15.1923 33.7548 15.0921C33.636 14.992 33.4915 14.9271 33.3376 14.9047L28.3227 14.1747ZM28.6936 18.9755C28.5969 19.0698 28.5246 19.1862 28.483 19.3147C28.4413 19.4432 28.4315 19.5799 28.4544 19.713L29.0994 23.4762L25.7211 21.6996C25.6014 21.6365 25.4681 21.6036 25.3328 21.6036C25.1975 21.6036 25.0642 21.6365 24.9445 21.6996L21.5662 23.4762L22.2112 19.713C22.2339 19.58 22.224 19.4435 22.1824 19.3152C22.1407 19.1869 22.0685 19.0706 21.972 18.9763L19.2379 16.3105L23.0161 15.7614C23.1499 15.742 23.2769 15.6904 23.3862 15.611C23.4955 15.5316 23.5839 15.4267 23.6436 15.3055L25.3328 11.8831L27.0219 15.3055C27.0817 15.4267 27.17 15.5316 27.2793 15.611C27.3887 15.6904 27.5157 15.742 27.6494 15.7614L31.4277 16.3114L28.6936 18.9755Z" />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1505_1252"
                      x1="25.5"
                      y1={10}
                      x2="25.5"
                      y2={57}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset={0} stopColor="#06D889 " stopOpacity={0} />
                      <stop offset={1} stopColor="#06D889" stopOpacity="0.28" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-white font-bold text-4xl">
                0<span className="text-2xl font-semibold"> Awards</span>{" "}
              </h3>
              <p className="text-[#b5b5b5] tracking-[1px]">
                Achievement For Service
              </p>
            </div>
          </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default States;
