import Loader from "components/loader/loader";
import NotFound from "components/notFound/notFound";
import OrganizationData from "components/organization/organization";
import Pagination from "components/pagination/pagination";
import UserData from "components/user/user";
import { ErrorResponse } from "interfaces/errorResponse";
import { Organization } from "interfaces/organization";
import { StandardResponse } from "interfaces/standardResponse";
import { Categories } from "pages/index";
import React from "react";

interface Props {
  data: StandardResponse | Organization | ErrorResponse;
  category: string;
  loading: boolean;
}

export const SearchResult = ({ data, category, loading }: Props) => {
  console.log({ data });

  const renderSwitch = () => {
    console.log(data);
    const error = data as ErrorResponse;
    const userResponse = data as StandardResponse;
    if (error.message == "Not Found" || userResponse.total_count == 0) {
      return (
        <NotFound
          message={error.message}
          documentation_url={error.documentation_url}
        />
      );
    }

    switch (category) {
      case Categories.USERS:
        return (data as StandardResponse).items.map((item, index) => {
          return <UserData data={item} />;
        });
      case Categories.ORGANIZATION:
        return <OrganizationData data={data as Organization} />;
      default:
        return (data as StandardResponse).items.map((item, index) => {
          return <UserData data={item} />;
        });
    }
  };
  return (
    <>
      <div className="border-b border-t border-gray-200 pl-4 pr-6 pt-4 pb-4 sm:pl-6 lg:pl-8 xl:border-t-0 xl:pl-6 xl:pt-6">
        <div className="flex items-center">
          <h1 className="flex-1 text-lg font-medium">{category}</h1>
        </div>
      </div>
      <div className="overflow-hidden bg-white shadow sm:rounded-md">
        <ul className="divide-y divide-gray-200 border-b border-gray-200">
          {loading ? <Loader /> : renderSwitch()}
        </ul>
      </div>
      {(data as StandardResponse).total_count > 0 && (
        <Pagination total_count={(data as StandardResponse).total_count} />
      )}
    </>
  );
};
