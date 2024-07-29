import React, { useState } from "react";
import { Typography, Button } from "potion-ui";
import { MdOutlineAddBox } from "react-icons/md";

interface NavItem {
  label: string;
  href: string;
  current?: boolean;
}

interface NavbarProps {
  logo: string;
  brandName: string;
  navItems: NavItem[];
  ctaButtonLabel: string;
  onCtaClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  logo,
  brandName,
  navItems,
  ctaButtonLabel,
  onCtaClick,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt={`${brandName} Logo`} />
          <Typography
            variant="h2"
            className="self-center text-2xl font-semibold whitespace-nowrap "
          >
            {brandName}
          </Typography>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="hidden sm:block">
            <Button
              variant="info"
              size="small"
              label={ctaButtonLabel}
              onClick={onCtaClick}
              iconLeft={MdOutlineAddBox}
            />
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`block py-2 px-3 ${
                    item.current
                      ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                      : "text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  }`}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="block md:hidden">
            <Button
              className="w-full my-2"
              variant="info"
              size="small"
              label={ctaButtonLabel}
              onClick={onCtaClick}
              iconLeft={MdOutlineAddBox}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
