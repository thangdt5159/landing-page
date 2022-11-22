import Link from "next/link";
import React from "react";

import { footerMenuList, socialIcons } from "../data/footerData";

const Footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}

      <footer className="dark:bg-jacarta-900 page-footer bg-white">
        <div className="container">
          <div className="grid grid-cols-6 gap-x-7 gap-y-14 pt-24 pb-12 md:grid-cols-12">
            <div className="col-span-3 md:col-span-4">
              {/* <!-- Logo --> */}
              <Link href="#">
                <div className="mb-6 inline-block">
                  <img
                    src="/images/logo.png"
                    className="max-h-7 dark:hidden"
                    alt="Xhibiter | NFT Marketplace"
                  />
                </div>
              </Link>

              <Link href="#">
                <div className=" mb-6 inline-block">
                  <img
                    src="/images/logo-white.png"
                    className="hidden max-h-7 dark:block mb-6"
                    alt="Xhibiter | NFT Marketplace"
                  />
                </div>
              </Link>
              <p className="dark:text-jacarta-300 mb-12">
                Create, sell and collect truly rare digital artworks. Powered by
                blockchain technology.
              </p>

              {/* <!-- Socials --> */}
              <div className="flex space-x-5">
                {socialIcons.map((item) => {
                  const { id, href, text } = item;
                  return (
                    <Link href={href} key={id}>
                      <div className="group cursor-pointer">
                        <svg className="icon group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white">
                          <use xlinkHref={`/icons.svg#icon-${text}`}></use>
                        </svg>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {footerMenuList.map((single) => (
              <div
                className={`col-span-full sm:col-span-3 md:col-span-2 ${single.diffClass}`}
                key={single.id}
              >
                <h3 className="font-display text-jacarta-700 mb-6 text-sm dark:text-white">
                  {single.title}
                </h3>
                <ul className="dark:text-jacarta-300 flex flex-col space-y-1">
                  {single.list.map((item) => {
                    const { id, href, text } = item;
                    return (
                      <li key={id}>
                        <Link href={href}>
                          <div className="hover:text-accent dark:hover:text-white">
                            {text}
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-between space-y-2 py-8 sm:flex-row sm:space-y-0">
            <span className="dark:text-jacarta-400 text-sm">
              <span>© {new Date().getFullYear()} Xhibiter — Made by</span>
              <Link href="https://themeforest.net/user/ib-themes">
                <div className="hover:text-accent dark:hover:text-white">
                  {" "}
                  ib-themes
                </div>
              </Link>
            </span>

            <ul className="dark:text-jacarta-400 flex flex-wrap space-x-4 text-sm">
              <li>
                <Link href="/tarms">
                  <div className="hover:text-accent dark:hover:text-white">
                    Terms and conditions
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/tarms">
                  <div className="hover:text-accent dark:hover:text-white">
                    Privacy policy
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
