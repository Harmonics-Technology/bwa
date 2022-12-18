export function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const URLS = {
    USERS: `${process.env.REACT_APP_GITHUB_BASE_URL}/search/users?q=`,
    REPOSITORIES: `${process.env.REACT_APP_GITHUB_BASE_URL}/search/repositories?q=`,
    COMMITS: `${process.env.REACT_APP_GITHUB_BASE_URL}/search/commits?q=`,
    ISSUES: `${process.env.REACT_APP_GITHUB_BASE_URL}/search/issues?q=`,
    ORGANIZATIONS: `${process.env.REACT_APP_GITHUB_BASE_URL}/orgs/`,
  };

  export const fetchUsers = async (searchQuery,page) => {
    const response = await fetch(`${URLS.USERS}${searchQuery}&per_page=10&page=${page}`);
    const data = await response.json();
    console.log(data);
    return data;
  };

  export const fetchOrganization = async (searchQuery) => {
    const response = await fetch(`${URLS.ORGANIZATIONS}${searchQuery}`);
    const data = await response.json();
    console.log(data);
    return data;
  }