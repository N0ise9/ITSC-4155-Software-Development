import { UserInSite } from "../utils/types";
import { UserInSiteBuilder } from "../../.jest/Builder";
import falso from "@ngneat/falso";

jest.mock("../utils/types");

function makeUserInSite(user: UserInSite = UserInSiteBuilder.single(), overrides?: Partial<UserInSite>);

describe("Algorithm", () => {
  it("Produces correct math.", async () => {});
});
