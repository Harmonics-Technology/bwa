import { Organization } from "interfaces/organization";
import { render } from "test";

import OrganizationData from "./organization";

const mockData: Organization = {
  login: "kleffcollage",
  id: 93976954,
  node_id: "O_kgDOBZn5eg",
  url: "https://api.github.com/orgs/kleffcollage",
  repos_url: "https://api.github.com/orgs/kleffcollage/repos",
  events_url: "https://api.github.com/orgs/kleffcollage/events",
  hooks_url: "https://api.github.com/orgs/kleffcollage/hooks",
  issues_url: "https://api.github.com/orgs/kleffcollage/issues",
  members_url: "https://api.github.com/orgs/kleffcollage/members{/member}",
  public_members_url:
    "https://api.github.com/orgs/kleffcollage/public_members{/member}",
  avatar_url: "https://avatars.githubusercontent.com/u/93976954?v=4",
  description: null,
  is_verified: false,
  has_organization_projects: true,
  has_repository_projects: true,
  public_repos: 1,
  public_gists: 0,
  followers: 0,
  following: 0,
  html_url: "https://github.com/kleffcollage",
  created_at: new Date("2021-11-09T09:13:07Z").toLocaleString(),
  updated_at: new Date("2022-05-10T14:50:38Z").toLocaleString(),
  type: "Organization",
};

describe("OrganizationData component tests", () => {
  const view = render(<OrganizationData data={mockData} />);
  it("renders without crashing", () => {
    expect(view).toBeTruthy();
  });

  it("snapshot test", () => {
    expect(view).toMatchSnapshot();
  });
});
