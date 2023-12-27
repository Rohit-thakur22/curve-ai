const Footer = () => {
  return (
    <section className="container h-24">
      <footer className="container mx-auto flex justify-center  items-center p-4 h-20">
        <nav className="hidden md:flex justify-center items-center w-full">
          <ul className="flex gap-4 lg:gap-8 items-center justify-center w-full font-medium text-sm">
            <li>ABOUT</li>
            <li>HOW IT WORKS</li>
            <li>CONTACT</li>
          </ul>
        </nav>
        <div className=" flex  w-full justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="83"
            height="15"
            viewBox="0 0 83 15"
            fill="none" 
          >
            <path
              d="M14.1073 11.9278C14.1073 12.2399 14.0516 12.5748 13.94 12.9324C13.835 13.29 13.6578 13.6216 13.4084 13.9272C13.1655 14.2328 12.8472 14.4896 12.4534 14.6977C12.0597 14.8992 11.5773 15 11.0063 15H1.28965C1.10588 15 0.935239 14.9675 0.777725 14.9025C0.620211 14.8375 0.482386 14.7497 0.364251 14.6391C0.252679 14.5221 0.164077 14.3856 0.0984462 14.2295C0.0328154 14.0735 0 13.9044 0 13.7224V2.29194C0 2.11638 0.0328154 1.95059 0.0984462 1.79454C0.164077 1.63849 0.252679 1.50195 0.364251 1.38492C0.482386 1.26788 0.620211 1.17685 0.777725 1.11183C0.935239 1.04681 1.10588 1.0143 1.28965 1.0143H9.85447C10.1695 1.0143 10.5075 1.06957 10.8685 1.1801C11.2294 1.29064 11.5641 1.46944 11.8726 1.71651C12.1876 1.95709 12.4469 2.27243 12.6503 2.66255C12.8604 3.05267 12.9654 3.53056 12.9654 4.09623V4.57412C12.9654 5.02276 12.8899 5.50715 12.7389 6.02731C12.588 6.54096 12.3452 7.02861 12.0104 7.49025C12.2992 7.6658 12.5683 7.87711 12.8177 8.12419C13.0737 8.37126 13.2968 8.65735 13.4871 8.98244C13.6775 9.30754 13.8284 9.6749 13.94 10.0845C14.0516 10.4941 14.1073 10.946 14.1073 11.4402V11.9278ZM11.5477 11.4402C11.5477 11.1086 11.4952 10.8127 11.3902 10.5527C11.2852 10.2861 11.1375 10.0585 10.9472 9.86996C10.7569 9.6814 10.5272 9.53836 10.2581 9.44083C9.98901 9.3368 9.68711 9.28479 9.35239 9.28479H3.58344V6.72952H8.20057C8.53529 6.72952 8.83719 6.68075 9.10627 6.58322C9.37536 6.47919 9.60507 6.3329 9.7954 6.14434C9.98573 5.95579 10.1301 5.73147 10.2286 5.47139C10.3336 5.20481 10.3861 4.90572 10.3861 4.57412V4.09623C10.3861 3.73212 10.2089 3.55007 9.85447 3.55007H2.5596V12.4642H11.0063C11.0522 12.4642 11.108 12.461 11.1736 12.4545C11.2393 12.448 11.2983 12.4285 11.3508 12.396C11.4034 12.3635 11.4493 12.3082 11.4887 12.2302C11.5281 12.1521 11.5477 12.0449 11.5477 11.9083V11.4402Z"
              fill="#17181A"
            />
            <path
              d="M29.522 7.94863C29.522 8.29974 29.4597 8.6801 29.335 9.08973C29.2103 9.49285 29.0068 9.86996 28.7246 10.2211C28.449 10.5657 28.0847 10.855 27.6319 11.0891C27.1856 11.3231 26.6409 11.4402 25.9977 11.4402H21.3805V9.03121H25.9977C26.3455 9.03121 26.6146 8.92718 26.8049 8.71912C26.9953 8.50455 27.0904 8.24122 27.0904 7.92913C27.0904 7.59753 26.9821 7.33745 26.7656 7.14889C26.5555 6.96034 26.2996 6.86606 25.9977 6.86606H21.3805C21.0327 6.86606 20.7636 6.97334 20.5733 7.18791C20.383 7.39597 20.2878 7.65605 20.2878 7.96814V11.5085C20.2878 11.8466 20.3928 12.1099 20.6028 12.2984C20.8194 12.487 21.0852 12.5813 21.4002 12.5813H25.9977V15H21.3805C21.0261 15 20.6422 14.9382 20.2287 14.8147C19.8218 14.6912 19.4412 14.4928 19.0868 14.2198C18.7389 13.9402 18.4468 13.5793 18.2106 13.1372C17.9743 12.6886 17.8562 12.1456 17.8562 11.5085V7.94863C17.8562 7.59753 17.9185 7.22042 18.0432 6.8173C18.1679 6.40767 18.3681 6.03056 18.6437 5.68596C18.926 5.33485 19.2902 5.04226 19.7365 4.80819C20.1893 4.57412 20.7374 4.45709 21.3805 4.45709H25.9977C26.3521 4.45709 26.7327 4.51886 27.1397 4.64239C27.5531 4.76593 27.9338 4.96749 28.2816 5.24707C28.636 5.52016 28.9314 5.88101 29.1676 6.32965C29.4039 6.77178 29.522 7.31144 29.522 7.94863Z"
              fill="#17181A"
            />
            <path
              d="M43.5487 11.4402C43.5487 11.8758 43.4929 12.2692 43.3813 12.6203C43.2697 12.9649 43.1221 13.2705 42.9383 13.5371C42.7545 13.7971 42.5412 14.0215 42.2984 14.21C42.0556 14.3921 41.7996 14.5416 41.5305 14.6586C41.268 14.7757 40.9989 14.8635 40.7233 14.922C40.4542 14.974 40.1982 15 39.9554 15H33.0248V12.4642H39.9357C40.2835 12.4642 40.5461 12.3765 40.7233 12.2009C40.9005 12.0254 40.9891 11.7718 40.9891 11.4402C40.9562 10.764 40.6117 10.4259 39.9554 10.4259H35.988C35.4236 10.4259 34.9445 10.3283 34.5507 10.1333C34.1569 9.93823 33.8353 9.69441 33.5859 9.40182C33.3431 9.10923 33.1659 8.79389 33.0543 8.45579C32.9493 8.11769 32.8968 7.80234 32.8968 7.50975C32.8968 6.94408 32.9985 6.46944 33.202 6.08583C33.4054 5.69571 33.6614 5.38036 33.9698 5.13979C34.2783 4.89922 34.613 4.72692 34.974 4.62289C35.335 4.51235 35.673 4.45709 35.988 4.45709H42.2787V6.99285H36.0077C35.8764 6.99285 35.7714 7.0091 35.6927 7.04161C35.6205 7.06762 35.5647 7.10663 35.5253 7.15865C35.4925 7.20416 35.4728 7.25618 35.4662 7.31469C35.4597 7.36671 35.4564 7.41873 35.4564 7.47074C35.463 7.57477 35.4826 7.65605 35.5155 7.71456C35.5483 7.77308 35.5877 7.81534 35.6336 7.84135C35.6861 7.86736 35.7419 7.88362 35.8009 7.89012C35.8666 7.89012 35.9289 7.89012 35.988 7.89012H39.9554C40.6117 7.89012 41.1695 8.00715 41.629 8.24122C42.0884 8.47529 42.4592 8.77113 42.7414 9.12874C43.0236 9.47984 43.2271 9.86346 43.3518 10.2796C43.483 10.6957 43.5487 11.0826 43.5487 11.4402Z"
              fill="#17181A"
            />
            <path
              d="M59.1603 15H56.6007V9.14824C56.6007 8.81664 56.5416 8.52081 56.4235 8.26073C56.3119 7.99415 56.1577 7.76658 55.9608 7.57802C55.7639 7.38947 55.5309 7.24642 55.2618 7.14889C54.9993 7.04486 54.7138 6.99285 54.4053 6.99285H49.926V15H47.3664V5.71521C47.3664 5.53966 47.3992 5.37711 47.4649 5.22757C47.5305 5.07152 47.6224 4.93823 47.7405 4.8277C47.8586 4.71066 47.9965 4.61964 48.154 4.55462C48.3115 4.4896 48.4789 4.45709 48.6561 4.45709H54.425C54.7466 4.45709 55.0846 4.49285 55.439 4.56437C55.8 4.63589 56.1544 4.75293 56.5022 4.91547C56.8566 5.07152 57.1913 5.27308 57.5064 5.52016C57.828 5.76073 58.1102 6.05657 58.353 6.40767C58.6024 6.75228 58.7993 7.15215 58.9437 7.60728C59.0881 8.06242 59.1603 8.57607 59.1603 9.14824V15Z"
              fill="#17181A"
            />
            <path
              d="M66.02 2.29194H63.4604V0H66.02V2.29194ZM66.02 15H63.4604V4.45709H66.02V15Z"
              fill="#17181A"
            />
            <path
              d="M83 15H79.3083L74.1497 10.065C73.8609 9.80494 73.7264 9.47984 73.7461 9.08973C73.7592 8.90767 73.8051 8.73862 73.8839 8.58257C73.9692 8.42003 74.0841 8.28349 74.2284 8.17295L78.9046 4.43758H83L76.9751 9.24577L83 15ZM73.0963 15H70.5367V0H73.0963V15Z"
              fill="#17181A"
            />
          </svg>
        </div>
        <nav className="hidden md:flex justify-center items-center w-full">
          <ul className="flex gap-4 lg:gap-8 items-center justify-center w-full font-medium text-sm">
            <li>Signup</li>
            <li>Login</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </footer>
      <div className="mx-auto flex flex-col md:flex-row justify-evenly items-center gap-4 lg:gap-10 py-8">
        <p className="text-xs text-gray-400">
          Copyright © 2020.Besnik creative
        </p>
        <div className="hidden md:inline-flex max-w-sm lg:max-w-4xl bg-[#565B58] w-full h-1 "></div>
        <p className="text-xs text-gray-400">Designed by Besnik</p>
      </div>
    </section>
  );
};

export default Footer;
