"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {NAV_LINKS} from "@/constants"
import Button from "@/app/components/Button";

export default function Navbar() {
  return (
    <nav className = "flexBetween max-container padding-container relative z-30 py-5">
        <Link href ='/'>
          <Image src = '/logo_B.png' alt='logo' width ={120} height = {400} />
        </Link>
        
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="regular-16
              Otext-gray-50 flexCenter cursor-pointer pb-1.5 transition-all 
              hover:font-bold">
              {link.label}
            </Link>
            ))}
        </ul>

        <div className="1g:flexCenter hidden">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>
        
    </nav>
  );
}
