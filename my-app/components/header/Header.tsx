'use client';

import { useAuth } from "@/lib/hook/useAuth";
import Image from "next/image";
import Link from "next/link";

export const HomeHeader = () => {
  const { loggedInUser } = useAuth();
  console.log({loggedInUser})
  return (
    <>
      <section className="bg-linear-to-r from-secondary-950 via-secondary-900 to-secondary-800 h-10 text-white">
        <div className="mx-auto w-full px-10 flex justify-between items-center h-full">
          <p className="text-lg font-semibold italic text-shadow">
            Free Delivery over purchase of NPR. 10,000
          </p>
          <nav>
            <ul className="flex gap-5">
              <li>
                <Link
                  className="text-green-50 underline italic text-sm"
                  href={"/privacy-policy"}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-green-50 underline italic text-sm"
                  href={"/terms-and-conditions"}
                >
                  Terms and conditions
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <header className="bg-white dark:bg-primary-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link className="block text-teal-400 dark:text-teal-400" href="/">
                <Image
                  src={"/images/logo.png"}
                  width={60}
                  height={60}
                  alt="logo"
                  className="size-15 rounded-full"
                />
              </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      Careers
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      History
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      Services
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      Projects
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                {loggedInUser ? (
                  <>{loggedInUser?.firstName + " " + loggedInUser?.lastName}</>
                ) : (
                  <>
                    <Link
                      className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm dark:hover:bg-teal-500"
                      href="/login"
                    >
                      Login
                    </Link>

                    <div className="hidden sm:flex">
                      <a
                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                        href="#"
                      >
                        Register
                      </a>
                    </div>
                  </>
                )}
              </div>

              <div className="block md:hidden">
                <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}