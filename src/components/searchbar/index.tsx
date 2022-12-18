import { Combobox } from "@headlessui/react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import { useNavigation, useLocation } from 'react-router';
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

interface SearchBarProps {
  selectedCategory: string;
  setCategory: (category: string) => void;
}

interface category {
  name: string;
  value: string;
}

const categories: category[] = [
  { name: "Users", value: "USERS" },
  { name: "Organization", value: "ORGANIZATION" },
];

export function SearchBar({ selectedCategory, setCategory }: SearchBarProps) {
  const [search, setSearch] = React.useState("");

  return (
    <div className="flex justify-center items-center px-10">
      <div className="flex flex-wrap items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
        <div className="flex flex-1 justify-center lg:justify-end">
          <div className="w-full px-2 lg:px-6">
            <label htmlFor="search" className="sr-only">
              Search {selectedCategory}
            </label>
            <div className="relative text-primary focus-within:text-gray-400">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <input
                id="search"
                name="search"
                className="block w-full rounded-md border border-transparent bg-primary bg-opacity-10 py-2 pl-10 pr-3 leading-5 text-primary placeholder-primary focus:bg-white focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                placeholder={`Search ${selectedCategory.toLocaleLowerCase()}`}
                type="search"
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
          <Combobox as="div" value={selectedCategory} onChange={setCategory}>
            <div className="relative mt-1">
              <Combobox.Input
                className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                onChange={(event) => setCategory(event.target.value)}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Combobox.Button>

              {categories.length > 0 && (
                <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {categories.map((category) => (
                    <Combobox.Option
                      key={category.value}
                      value={category.value}
                      className={({ active }) =>
                        classNames(
                          "relative cursor-default select-none py-2 pl-3 pr-9",
                          active ? "bg-indigo-600 text-white" : "text-gray-900"
                        )
                      }
                    >
                      {({ active, selected }) => (
                        <>
                          <div className="flex items-center">
                            <span
                              className={classNames(
                                "inline-block h-2 w-2 flex-shrink-0 rounded-full",
                                selected ? "bg-green-400" : "bg-gray-200"
                              )}
                              aria-hidden="true"
                            />
                            <span
                              className={classNames(
                                "ml-3 truncate",
                                selected && "font-semibold"
                              )}
                            >
                              {category.name}
                            </span>
                          </div>

                          {selected && (
                            <span
                              className={classNames(
                                "absolute inset-y-0 right-0 flex items-center pr-4",
                                active ? "text-white" : "text-indigo-600"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          )}
                        </>
                      )}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              )}
            </div>
          </Combobox>
        </div>
        <Link to={`/${search}`} className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-6 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span>Search</span>
        </Link>
      </div>
    </div>
  );
}
