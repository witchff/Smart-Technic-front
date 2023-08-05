import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to={'/'}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="184"
        height="60"
        viewBox="0 0 184 60"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M165.444 31.2234H171.59L177.345 42.7574H173.156L172.06 40.8156H164.935L163.839 42.7574H159.65L165.444 31.2234ZM135.417 33.9419V34.7962V39.9224V42.7574H139.018V39.9224V32.4273V31.2234H133.146L127 39.7671C126.961 39.8836 126.921 39.9613 126.843 40.0778V39.1846V35.0681V31.2234H123.241V35.0681V41.903V42.7574H129.114L135.26 34.2137C135.338 34.136 135.378 34.0195 135.417 33.9419ZM168.811 33.8253H168.263L166.305 37.8253H170.729L168.811 33.8253ZM143.051 31.2234H146.652V35.2622H148.532L152.603 31.2234H157.536L151.703 36.738L158.28 42.7962H153.073L148.532 38.2914H146.652V42.7962H143.051V31.2234ZM104.998 31.2234H108.6V35.2622H116.351V31.2234H119.953V42.7574H116.351V38.2525H108.6V42.7574H104.998V31.2234ZM86.872 31.1846L92.1963 36.8545L86.872 42.7574H91.6873L95.2107 38.8739L98.7341 42.7574H103.549L98.2252 36.8545L103.549 31.1846H98.5776L95.2107 34.9127L91.8439 31.1846H86.872ZM72.3869 42.7574V31.1846H84.9537V33.9807H75.9886V35.6118H84.5622V38.4079H75.9886V40.0001H84.9537V42.7962H72.3869V42.7574ZM56.375 34.1749V31.1846H70.2337V34.1749H65.1052V42.7574H61.5035V34.1749H56.375Z"
          fill="#2A5275"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M156.675 14.0579V9.55303H177.385V14.019H169.712V26.8346H164.348V14.019H156.675V14.0579ZM78.2597 9.6307V26.9123H83.6231V14.7957L90.6699 26.9123H95.0546L101.632 14.7957V26.9123H106.329L108.404 19.4559L106.604 19.4171L108.678 9.6307H97.8733L93.2929 19.3006H92.4707L87.8903 9.6307H78.2597V9.6307ZM66.5933 22.9899C69.1771 22.9899 70.6648 22.9511 71.0563 22.8734C71.4478 22.7957 71.6827 22.4851 71.6827 21.9414C71.6827 21.2812 71.4086 20.854 70.8214 20.6987C70.2342 20.5433 68.8248 20.4268 66.5933 20.4268C62.1303 20.4268 59.3116 20.1161 58.1371 19.4559C56.9627 18.7957 56.3754 17.2035 56.3754 14.6792C56.3754 12.3103 57.1193 10.8346 58.6461 10.1744C59.8205 9.66953 62.4044 9.43652 66.4367 9.43652C70.0384 9.43652 72.309 9.51419 73.2486 9.70837C75.0495 10.0579 76.1456 11.3394 76.498 13.5919H66.5542H66.4367C64.0095 13.5919 62.6393 13.6307 62.2478 13.7084C61.8563 13.786 61.6997 14.1356 61.6997 14.6792C61.6997 15.2618 62.0129 15.6501 62.6393 15.8443C63.2656 16.0385 64.5576 16.1161 66.5542 16.1161C70.978 16.1161 73.7967 16.4657 75.0886 17.1647C76.3805 17.8637 77.0069 19.4559 77.0069 21.9414C77.0069 24.2326 76.3022 25.7084 74.8537 26.3686C73.601 26.9123 70.8605 27.1841 66.515 27.1841C63.1873 27.1841 61.0342 27.1064 60.0554 26.9511C58.5286 26.7181 57.4716 26.2132 56.9235 25.3589C56.5712 24.8152 56.3363 24.0385 56.1797 22.9899H66.3976H66.5933V22.9899ZM115.569 9.6307H124.964L133.577 26.8734H127.313L125.669 23.9608H115.06L113.415 26.8734H107.152L107.191 26.7957L114.316 16.9705L111.066 16.7763L115.569 9.6307ZM120.736 13.5142H119.914L117.017 19.4948H123.633L120.736 13.5142ZM134.282 9.55303H149.863C151.781 9.55303 153.152 9.90254 153.935 10.6016C154.796 11.3394 155.226 12.6987 155.226 14.6016C155.226 16.0773 155.031 17.2035 154.678 17.9025C154.326 18.6016 153.7 19.1453 152.799 19.4948C153.778 19.922 154.404 20.3491 154.718 20.7375C155.031 21.1647 155.187 21.9025 155.187 22.9899V26.8734H149.824V23.7666C149.824 23.3006 149.706 22.9511 149.472 22.6404C149.158 22.2521 148.689 22.019 148.101 22.019H139.645V26.8346H134.282V9.55303ZM139.606 14.0579V17.5919H148.219C148.806 17.5919 149.237 17.4754 149.472 17.2035C149.706 16.9705 149.863 16.5045 149.863 15.8443C149.863 15.1841 149.746 14.7181 149.472 14.4462C149.198 14.1744 148.806 14.0579 148.219 14.0579H139.606Z"
          fill="#4878A6"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.1401 13.3594L16.952 9.47589L26.1912 4.19434L35.4303 9.47589L44.6695 14.7574V20.8934L39.3061 17.8254L26.1912 10.2914L15.5035 16.4273L10.1401 13.3594ZM7.71289 17.5147V23.806L26.5044 34.5633L31.7503 31.2623L7.71289 17.5147Z"
          fill="#4878A6"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M42.2423 37.2812L35.4303 41.1647L26.1912 46.4462L16.952 41.1647L7.71289 35.8831V29.7472L13.0763 32.8152L26.1912 40.3103L36.8788 34.1744L42.2423 37.2812ZM30.6933 18.7958L26.3086 16.2715L21.141 19.2229L24.4295 21.1259L43.221 31.8831L44.7086 32.7375V26.7958L43.221 25.9414L30.6933 18.7958Z"
          fill="#2A5275"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.6847 51.0287L12.3324 51.9219C11.8234 51.6501 11.2754 51.4948 10.6881 51.4948C10.1009 51.4948 9.6311 51.6501 9.31791 51.9219C8.96557 52.1938 8.80897 52.5821 8.80897 53.0482C8.80897 53.553 9.00472 53.9414 9.35706 54.252C9.74855 54.5627 10.2183 54.7181 10.8447 54.7181C11.5494 54.7181 12.1366 54.5239 12.6847 54.1744V55.2229C12.1366 55.4948 11.4711 55.6501 10.8056 55.6501C9.90515 55.6501 9.16132 55.4171 8.61323 54.9511C8.06514 54.4851 7.75195 53.8637 7.75195 53.087C7.75195 52.3491 8.026 51.7666 8.57408 51.3006C9.12217 50.8346 9.82685 50.6016 10.7273 50.6016C11.3537 50.6016 12.0192 50.7569 12.6847 51.0287ZM14.0549 51.4948H17.6958V52.3491H15.0337V53.0482H17.5L17.1477 53.9025H15.0337V54.6404H17.8915V55.4948H14.0158V51.4948H14.0549ZM18.7137 51.4948H22.9417V52.388H21.3366V55.4948H20.3188V52.388H18.7137V51.4948ZM23.9596 51.4948H24.9775V54.6404H26.5434C26.7392 54.6404 26.8958 54.6016 27.0132 54.5239C27.1307 54.4462 27.1698 54.3297 27.1698 54.1744C27.1698 54.019 27.1307 53.9025 27.0132 53.8249C26.8958 53.7472 26.7392 53.7084 26.5434 53.7084H25.2515L25.6039 52.854H26.5434C27.0524 52.854 27.4439 52.9705 27.7179 53.2035C27.992 53.4365 28.1486 53.7472 28.1486 54.1744C28.1486 54.6016 27.992 54.9122 27.7179 55.1452C27.4439 55.3783 27.0524 55.4948 26.5434 55.4948H23.9596V51.4948ZM32.0634 51.4948H33.2379L34.7647 53.8249L36.2524 51.4948H37.4268V55.5336H36.409V52.9705L34.9996 55.1064H34.4124L33.003 53.0093V55.5724H32.0243V51.4948H32.0634ZM39.5017 55.5336H38.4447L40.4805 51.5336H41.6549L43.6907 55.5336H42.5945L42.203 54.7957H39.8541L39.5017 55.5336ZM41.0286 52.3491L40.2064 53.9802H41.8507L41.0286 52.3491ZM44.7085 51.4948H47.9188V52.3491H45.7264V55.4948H44.7085V51.4948ZM49.0149 55.5336H47.9579L49.9937 51.5336H51.1681L53.2039 55.5336H52.1077L51.7162 54.7957H49.3673L49.0149 55.5336ZM50.5417 52.3491L49.7196 53.9802H51.3639L50.5417 52.3491ZM54.026 51.7666C54.7307 51.4948 55.4354 51.3783 56.0617 51.3783C56.6881 51.3783 57.1579 51.4948 57.4711 51.6889C57.8234 51.8831 57.98 52.1938 57.98 52.5433C57.98 52.9317 57.7843 53.2423 57.432 53.3977V53.4365C57.8626 53.6307 58.0975 53.9414 58.0975 54.4074C58.0975 54.7957 57.9017 55.1064 57.5494 55.3394C57.1971 55.5724 56.649 55.6501 55.9834 55.6501C55.3962 55.6501 54.809 55.5336 54.1826 55.3394V54.3297C54.4175 54.4462 54.6915 54.5627 55.0439 54.6404C55.3571 54.7181 55.7094 54.7569 56.0226 54.7569C56.3358 54.7569 56.5707 54.7181 56.7664 54.6404C56.9622 54.5627 57.0405 54.4462 57.0405 54.2909C57.0405 54.019 56.7273 53.9025 56.1009 53.9025H54.5741L54.9264 53.0482H56.1009C56.6881 53.0482 57.0013 52.9317 57.0013 52.6598C57.0013 52.388 56.6881 52.2326 56.0617 52.2326C55.4745 52.2326 54.9264 52.3491 54.3783 52.5821L54.026 51.7666ZM59.3894 51.4948H60.4073V54.1744L62.7954 51.4948H63.8132V55.5336H62.7954V52.854L60.4073 55.5336H59.3894V51.4948ZM65.4575 51.4948H66.4754V53.0093H68.8634V51.4948H69.8813V55.5336H68.8634V53.9025H66.4754V55.5336H65.4575V51.4948ZM73.8354 51.4171C74.6183 51.4171 75.2839 51.6113 75.7537 51.9996C76.2234 52.388 76.4975 52.8928 76.4975 53.5142C76.4975 54.1355 76.2626 54.6792 75.7537 55.0676C75.2839 55.4559 74.6183 55.6501 73.8354 55.6501C73.0524 55.6501 72.3868 55.4559 71.9171 55.0676C71.4473 54.6792 71.2124 54.1744 71.2124 53.5142C71.2124 52.8928 71.4473 52.388 71.9171 51.9996C72.426 51.6113 73.0524 51.4171 73.8354 51.4171ZM72.6609 52.5821C72.3477 52.8152 72.2303 53.1258 72.2303 53.5142C72.2303 53.9025 72.3869 54.2132 72.6609 54.4462C72.9741 54.6792 73.3656 54.7957 73.8354 54.7957C74.3052 54.7957 74.6966 54.6792 75.0098 54.4462C75.323 54.2132 75.4796 53.9025 75.4796 53.5142C75.4796 53.1258 75.323 52.854 75.0098 52.621C74.6966 52.388 74.3052 52.2715 73.8354 52.2715C73.3656 52.2326 72.9741 52.3491 72.6609 52.5821ZM77.8677 51.4948H80.6081C81.1171 51.4948 81.4694 51.5724 81.7434 51.7666C82.0175 51.922 82.1349 52.1938 82.1349 52.5045C82.1349 52.854 81.9783 53.1647 81.7043 53.3588V53.3977C82.0958 53.6307 82.2915 53.9414 82.2915 54.3686C82.2915 54.7569 82.1741 55.0287 81.8609 55.2229C81.5869 55.4171 81.1954 55.5336 80.6864 55.5336H77.8677V51.4948ZM78.8856 52.388V54.6792H80.7256C80.9213 54.6792 81.0388 54.6404 81.1562 54.5627C81.2737 54.4851 81.3128 54.4074 81.3128 54.2909C81.3128 54.1744 81.2737 54.0579 81.1562 54.019C81.0388 53.9414 80.9213 53.9025 80.7256 53.9025H79.1596L79.512 53.0482H80.7256C80.8822 53.0482 80.9605 53.0093 81.0779 52.9705C81.1562 52.8928 81.1954 52.8152 81.1954 52.7375C81.1954 52.621 81.1562 52.5433 81.0779 52.5045C80.9996 52.4656 80.8822 52.4268 80.7256 52.4268H78.8856V52.388ZM86.1673 51.4948H88.9077C89.4166 51.4948 89.769 51.5724 90.043 51.7666C90.3171 51.922 90.4345 52.1938 90.4345 52.5045C90.4345 52.854 90.2779 53.1647 90.0039 53.3588V53.3977C90.3954 53.6307 90.5911 53.9414 90.5911 54.3686C90.5911 54.7569 90.4737 55.0287 90.1605 55.2229C89.8864 55.4171 89.4949 55.5336 88.986 55.5336H86.1673V51.4948ZM87.1851 52.388V54.6792H89.0251C89.2209 54.6792 89.3383 54.6404 89.4558 54.5627C89.5732 54.4851 89.6124 54.4074 89.6124 54.2909C89.6124 54.1744 89.5732 54.0579 89.4558 54.019C89.3383 53.9414 89.2209 53.9025 89.0251 53.9025H87.4592L87.8115 53.0482H89.0251C89.1817 53.0482 89.26 53.0093 89.3775 52.9705C89.4558 52.8928 89.4949 52.8152 89.4949 52.7375C89.4949 52.621 89.4558 52.5433 89.3775 52.5045C89.2992 52.4656 89.1817 52.4268 89.0251 52.4268H87.1851V52.388ZM99.243 51.0287L98.8907 51.9219C98.3817 51.6501 97.8337 51.4948 97.2464 51.4948C96.6592 51.4948 96.1894 51.6501 95.8762 51.9219C95.5239 52.1938 95.3673 52.5821 95.3673 53.0482C95.3673 53.553 95.563 53.9414 95.9154 54.252C96.3069 54.5627 96.7766 54.7181 97.403 54.7181C98.1077 54.7181 98.6949 54.5239 99.243 54.1744V55.2229C98.6949 55.4948 98.0294 55.6501 97.3639 55.6501C96.4634 55.6501 95.7196 55.4171 95.1715 54.9511C94.6234 54.4851 94.3103 53.8637 94.3103 53.087C94.3103 52.3491 94.5843 51.7666 95.1324 51.3006C95.6805 50.8346 96.3851 50.6016 97.2856 50.6016C97.912 50.6016 98.5775 50.7569 99.243 51.0287ZM101.044 55.5336H99.9868L102.023 51.5336H103.197L105.233 55.5336H104.137L103.745 54.7957H101.396L101.044 55.5336ZM102.571 52.3491L101.749 53.9802H103.393L102.571 52.3491ZM106.251 51.4948H107.269V53.0093H109.657V51.4948H110.675V55.5336H109.617V53.9025H107.269V55.5336H106.251V51.4948ZM115.294 51.4948H116.469L114.746 53.32L116.664 55.4948H115.372L113.532 53.3588L115.294 51.4948ZM112.28 51.4948H113.297V55.5336H112.28V51.4948ZM117.095 51.4948H121.323V52.388H119.718V55.4948H118.7V52.388H117.095V51.4948ZM121.597 53.7084V52.9317H124.181V53.7084H121.597ZM125.59 50.7181H130.484V55.5336H129.427V51.6501H126.608V55.5336H125.551V50.7181H125.59ZM132.285 51.4948H135.926V52.3491H133.263V53.0482H135.73L135.377 53.9025H133.263V54.6404H136.121V55.4948H132.246V51.4948H132.285ZM136.943 51.4948H141.172V52.388H139.566V55.4948H138.549V52.388H136.943V51.4948ZM142.189 51.4948H145.83V52.3491H143.168V53.0482H145.635L145.282 53.9025H143.168V54.6404H146.026V55.4948H142.15V51.4948H142.189ZM147.475 51.4948H150.058C150.567 51.4948 150.959 51.6113 151.233 51.8443C151.507 52.0773 151.663 52.4268 151.663 52.8152C151.663 53.2423 151.507 53.553 151.233 53.786C150.959 54.019 150.567 54.1355 150.058 54.1355H148.766L149.158 53.2812H150.176C150.332 53.2812 150.45 53.2423 150.528 53.1647C150.606 53.087 150.646 52.9705 150.646 52.8152C150.646 52.6598 150.606 52.5433 150.489 52.4656C150.411 52.388 150.254 52.3491 150.097 52.3491H148.492V55.4948H147.475V51.4948ZM152.955 51.4948H156.831V52.3491H153.973V54.6404H155.813C156.205 54.6404 156.44 54.5239 156.44 54.252C156.44 54.1355 156.4 54.019 156.283 53.9414C156.166 53.8637 156.009 53.8249 155.813 53.8249H154.247L154.6 52.9705H155.774C156.283 52.9705 156.675 53.087 156.949 53.32C157.223 53.553 157.379 53.8637 157.379 54.252C157.379 54.6404 157.223 54.9511 156.949 55.1841C156.675 55.4171 156.283 55.5336 155.774 55.5336H152.955V51.4948ZM160.55 55.5336H159.493L160.355 54.019L159.846 54.0967L158.123 51.5336H159.258L160.589 53.553L161.725 51.5336H162.821L160.55 55.5336ZM163.8 51.4948H166.383C166.892 51.4948 167.284 51.6113 167.558 51.8443C167.832 52.0773 167.989 52.4268 167.989 52.8152C167.989 53.2423 167.832 53.553 167.558 53.786C167.284 54.019 166.892 54.1355 166.383 54.1355H165.092L165.483 53.2812H166.501C166.657 53.2812 166.775 53.2423 166.853 53.1647C166.932 53.087 166.971 52.9705 166.971 52.8152C166.971 52.6598 166.932 52.5433 166.814 52.4656C166.736 52.388 166.579 52.3491 166.423 52.3491H164.817V55.4948H163.8V51.4948ZM169.28 51.4948H172.491V52.3491H170.298V55.4948H169.28V51.4948ZM173.509 51.4948H177.149V52.3491H174.487V53.0482H176.954L176.601 53.9025H174.487V54.6404H177.345V55.4948H173.469V51.4948H173.509Z"
          fill="#4878A6"
        />
      </svg>
    </Link>
  );
};

export default Logo;
