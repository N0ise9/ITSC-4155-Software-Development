import * as fs from "fs";

fs.readFile("./src/services/yelp/outputYelp.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  const dataToJson = JSON.parse(data);
  const newArray = dataToJson.map(
    (object: {
      id: string;
      name: string;
      image_url: string;
      url: string;
      review_count: number;
      categories: string[];
      rating: number;
      price: string;
      location: string[];
      phone: string;
      display_phone: string;
    }) => {
      const { id, name, image_url, url, review_count, categories, rating, price, location, phone, display_phone } =
        object;
      // eslint-disable-next-line sort-keys
      return { id, name, image_url, url, review_count, categories, rating, price, location, phone, display_phone };
    }
  );

  fs.appendFile("./src/services/yelp/cleanedYelp.json", JSON.stringify(newArray, null, 2), (err: any) => {
    if (err) {
      console.log(err);
    }
  });
});
