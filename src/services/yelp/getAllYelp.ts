// eslint-disable-next-line @typescript-eslint/no-var-requires
const yelp = require("yelp-fusion");
import * as fs from "fs";
import * as dotenv from "dotenv";

// check discord for yelp API key to put in the env file
dotenv.config();
const blah = process.env.YELP_API_KEY;

const searchRequest = {
  // free api is limited to 50 at once, expands to 1000 if approved
  limit: 50,
  location: "charlotte, nc",
  // offset only goes up to 1000
  offset: 0,
};

const client = yelp.client(blah);

client
  .search(searchRequest)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  .then(async (response: any) => {
    const result = response.jsonBody.businesses;
    const prettyJson = JSON.stringify(result, null, 2);
    fs.appendFile("./src/services/yelp/outputYelp.json", prettyJson, (err: unknown) => {
      if (err) {
        console.info(err);
      }
    });
    console.info("1");
  })
  .catch((e: unknown) => {
    console.info(e);
  });
