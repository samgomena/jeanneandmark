"use client";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import localFont from "next/font/local";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Registry", href: "/registry", current: false },
];

const gistesy = localFont({ src: "../Gistesy.ttf" });

// @ts-expect-error
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="shadow-lg">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-[6rem]">
                    <Link
                      className="text-[#a58953] text-xl font-medium"
                      href="/about"
                    >
                      About
                    </Link>

                    <Link href="/">
                      <div className="flex flex-shrink-0 items-center">
                        <div
                          className={`${gistesy.className} text-[#a58953] text-4xl`}
                        >
                          Jeanne & Mark
                        </div>
                      </div>
                    </Link>

                    <Link
                      className="text-[#a58953] text-xl font-medium"
                      href="/registry"
                    >
                      Registry
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                className="text-[#a58953] block rounded-md px-3 py-2 text-base font-medium"
                href="/"
              >
                Home
              </Link>

              <Link
                className="text-[#a58953] block rounded-md px-3 py-2 text-base font-medium"
                href="/about"
              >
                About
              </Link>

              <Link
                className="text-[#a58953] block rounded-md px-3 py-2 text-base font-medium"
                href="/registry"
              >
                Registry
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
