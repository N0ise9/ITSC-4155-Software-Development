"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/no-var-requires
const yelp = require("yelp-fusion");
const fs = __importStar(require("fs"));
const dotenv = __importStar(require("dotenv"));
// check discord for yelp API key to put in the env file
dotenv.config();
const blah = process.env.YELP_API_KEY;
console.info(blah);
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
    .then(async (response) => {
    const result = response.jsonBody.businesses;
    const prettyJson = JSON.stringify(result, null, 2);
    fs.appendFile("./src/services/yelp/outputYelp.json", prettyJson, (err) => {
        if (err) {
            console.info(err);
        }
    });
    console.info("1");
})
    .catch((e) => {
    console.info(e);
});
