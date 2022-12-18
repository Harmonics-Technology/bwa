import React, { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  XMarkIcon,
  Bars3CenterLeftIcon,
} from "@heroicons/react/20/solid";
import { classNames } from "utilities/funtions";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Domains", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];



export const Header: React.FC = () => {
  return (
    <Disclosure as="nav" className="flex-shrink-0 bg-secondary">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Logo section */}
              <div className="flex items-center px-2 lg:px-0 xl:w-64">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-auto"
                    src="https://s3-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/397/400/original/Build-With-Assembly-Logo-black.png?1619213119"
                    alt="Your Company"
                  />
                </div>
              </div>

              
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-primary p-2 text-white hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3CenterLeftIcon
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              {/* Links section */}
              <div className="hidden lg:block lg:w-80">
                <div className="flex items-center justify-end">
                  <div className="flex">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="rounded-md px-3 py-2 text-sm font-medium text-black hover:text-white"
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-4 flex-shrink-0">
                    <div>
                      <Menu.Button className="flex rounded-full bg-indigo-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-white bg-primary"
                      : "text-black hover:text-white hover:bg-primary",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-indigo-800 pt-4 pb-3">
              <div className="space-y-1 px-2">
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-primary hover:text-white"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
