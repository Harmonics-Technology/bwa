import { ChevronRightIcon, LinkIcon } from "@heroicons/react/20/solid";
import { Organization } from "interfaces/organization";
import React from "react";
import { classNames } from "utilities/funtions";

interface OrganizationProps {
  data: Organization;
}

export default function OrganizationData({ data }: OrganizationProps) {
  return (
    <li>
      <a href={data.html_url} className="block hover:bg-gray-50">
        <div className="flex items-center px-4 py-4 sm:px-6">
          <div className="flex min-w-0 flex-1 items-center">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12 rounded-full"
                src={data.avatar_url}
                alt=""
              />
            </div>
            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
              <div>
                <p className="truncate text-sm font-medium text-indigo-600">
                  {data.login}
                </p>
                <p className="mt-2 flex items-center text-sm text-gray-500">
                  <LinkIcon
                    className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                    aria-hidden="true"
                  />
                  <span className="truncate">{data.html_url}</span>
                </p>
              </div>
              <div className="hidden md:block">
                <div>
                  <p className="text-sm text-gray-900">
                    Followers: {data.followers}
                  </p>
                  <p className="mt-2 flex items-center text-sm text-gray-500">
                    {/* <CheckCircleIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400" aria-hidden="true" /> */}
                    Date Created: <time>{data.created_at}</time>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ChevronRightIcon
              className="h-5 w-5 text-green-400"
              aria-hidden="true"
            />
          </div>
        </div>
      </a>
    </li>
  );
}
