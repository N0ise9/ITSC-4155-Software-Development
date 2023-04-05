// eslint-disable-next-line @typescript-eslint/no-var-requires
const yelp = require("yelp-fusion");
import * as fs from "fs";
import * as dotenv from "dotenv";

// check discord for yelp API key to put in the env file
dotenv.config();
const blah = process.env.YELP_API_KEY;
console.log(blah);

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
  .then(async (response: any) => {
    const result = response.jsonBody.businesses;
    const prettyJson = JSON.stringify(result, null, 2);
    // TODO: data.json is for testing, change to outputYelp.json
    fs.appendFile("./data.json", prettyJson, (err: any) => {
      if (err) {
        console.log(err);
      }
    });
    console.log("1");
  })
  .catch((e: any) => {
    console.log(e);
  });
