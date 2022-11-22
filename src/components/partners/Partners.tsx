import React from "react";
import Link from "next/link";
import HeadLine from "../headLine";

const Partners = () => {
  return (
    <div>
      <div className="dark:bg-jacarta-800 bg-light-base">
        <div className="container mt-16 py-10">
          <HeadLine
            text="Partners"
            classes="font-display text-jacarta-700 text-center text-3xl dark:text-white"
          />
          <div className="grid grid-cols-2 py-8 sm:grid-cols-5">
            <Link href="#">
              <img src="/images/partners/partner_logo_1.png" alt="partner 1" />{" "}
            </Link>
            <Link href="#">
              <img src="/images/partners/partner_logo_2.png" alt="partner 1" />{" "}
            </Link>
            <Link href="#">
              <img src="/images/partners/partner_logo_3.png" alt="partner 1" />{" "}
            </Link>
            <Link href="#">
              <img src="/images/partners/partner_logo_4.png" alt="partner 1" />{" "}
            </Link>
            <Link href="#">
              <img src="/images/partners/partner_logo_5.png" alt="partner 1" />{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
