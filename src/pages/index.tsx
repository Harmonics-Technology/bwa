import { Container, Header, Main, SearchBar } from "components";
import { SearchResult } from "components/searchresult";
import { Organization } from "interfaces/organization";
import { StandardResponse } from "interfaces/standardResponse";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchOrganization, fetchUsers } from "utilities/funtions";

export const Categories = {
  USERS: "USERS",
  ORGANIZATION: "ORGANIZATION",
  REPOSITORY: "REPOSITORIES",
  COMMIT: "COMMITS",
  ISSUE: "ISSUES",
};

export default function Index() {
  const { searchQuery } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const [category, setCategory] = useState<string>(Categories.USERS);
  const [searchResult, setSearchResult] =
    useState<StandardResponse | Organization>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    let data: any;
    switch (category) {
      case Categories.USERS:
        data = await fetchUsers(searchQuery, page);
        setSearchResult(data);
        setLoading(false);
        return;
      case Categories.ORGANIZATION:
        data = await fetchOrganization(searchQuery);
        setLoading(false);
        setSearchResult(data);
        return;
      default:
        data = await fetchUsers(searchQuery, page);
        setSearchResult(data);
        setLoading(false);
        return;
    }
  };

  useEffect(() => {
    console.log("searchQuery", searchQuery);
    if (searchQuery) {
      fetchData();
    }
  }, [searchQuery, category, page]);

  return (
    <Container>
      <Header />
      <Main>
        <SearchBar selectedCategory={category} setCategory={setCategory} />
        {searchResult && (
          <SearchResult
            data={searchResult}
            category={category}
            loading={loading}
          />
        )}
      </Main>
    </Container>
  );
}
