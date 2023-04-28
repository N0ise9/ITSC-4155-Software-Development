/* eslint-disable sort-keys */
import type { GoogleParameters } from "serpapi";
import { getJson } from "serpapi";
import * as fs from "fs";
import * as dotenv from "dotenv";

dotenv.config();

fs.readFile("./src/services/foodsCollection/foods.json", "utf-8", (err, data) => {
  if (err) {
    console.info(err);
  }

  const dataToJson = JSON.parse(data);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataToJson.forEach((element: any) => {
    const params = {
      api_key: process.env.SERPAPI_KEY,
      q: element.food,
      location: "Charlotte, North Carolina, United States",
      google_domain: "google.com",
      gl: "us",
      hl: "en",
      tbm: "isch",
      start: 0,
      num: "1",
    } satisfies GoogleParameters;

    getJson("google", params, (json) => {
      // searches google for 1 food and 100 pictures of that food are returned
      // "image_results" is an array of objects, each object has a "position"(to be stopped at 1)
      // and it also has a "thumbnail" and "original"
      // append this through fs
      element["thumbnail"] = json.images_results[0].thumbnail;
      // eslint-disable-next-line no-console
      console.log(json.images_results[0].thumbnail);
      fs.appendFile(
        "./src/services/foodsCollection/modifiedFoods.json",
        JSON.stringify(element, null, 2),
        (err: unknown) => {
          if (err) {
            console.info(err);
          }
        }
      );
    });
  });
});
