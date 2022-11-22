/* eslint-disable @next/next/no-img-element */
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

// import MblNavbar from "./mblNavbar";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [scroll, setScroll] = useState(false);

  const handleSticky = function () {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const handleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
  }, []);

  return (
    <div>
      <header
        className={
          scroll
            ? "js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors js-page-header--is-sticky"
            : "js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors"
        }
      >
        <div className="flex items-center justify-between px-6 py-6 xl:px-24">
          {/* <!-- Logo --> */}
          <Link href="/">
            <div className="shrink-0">
              <img
                src="/images/logo.png"
                alt=""
                className="max-h-7 h-auto dark:hidden"
              />
              <img
                src="/images/logo-white.png"
                className="max-h-7 h-auto hidden dark:block"
                alt="Xhibiter | NFT Marketplace"
              />
            </div>
          </Link>

          <div className="flex items-center justify-between gap-1 xl:px-6 xl:gap-6">
            <button className="hover:text-accent transition-colors font-semibold">
              <a href="https://google.com" target="blank">
                Marketplace
              </a>
            </button>
            <button className="hover:text-accent transition-colors font-semibold">
              <a href="https://google.com" target="blank">
                Launchpad
              </a>
            </button>
            <button
              className="js-dark-mode-trigger border-jacarta-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
              onClick={() => {
                handleTheme();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-jacarta-700 dark-mode-light h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:hidden"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-jacarta-700 dark-mode-dark hidden h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:block dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
