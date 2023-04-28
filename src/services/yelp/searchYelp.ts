// eslint-disable-next-line @typescript-eslint/no-var-requires
const yelp = require("yelp-fusion");
import * as dotenv from "dotenv";

// check discord for yelp API key to put in the env file
dotenv.config();
const blah = process.env.YELP_API_KEY;

export async function searchYelp(searchTerm: string) {
  const searchRequest = {
    // free api is limited to 50 at once, expands to 1000 if approved
    limit: 3,
    location: "charlotte, nc",
    term: searchTerm,
  };

  const client = yelp.client(blah);

  const returnResult = await client.search(searchRequest);
  const result = returnResult.jsonBody.businesses;
  //const prettyJson = JSON.stringify(result, null, 2);
  return result;
}
