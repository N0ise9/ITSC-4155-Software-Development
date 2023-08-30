"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const express_1 = __importDefault(require("express"));
const node_path_1 = __importDefault(require("node:path"));
const routes_1 = __importDefault(require("./routes/routes"));
const express_session_1 = __importDefault(require("express-session"));
const app = (0, express_1.default)();
/* eslint-disable no-console */
function test() {
    return "test";
}
exports.test = test;
app.use((0, express_session_1.default)({
    cookie: { maxAge: 60 * 60 * 1000 },
    resave: false,
    saveUninitialized: false,
    secret: "ao4sidjos5iadj7aosidwoi",
}));
app.set("view engine", "ejs");
app.set("views", node_path_1.default.join(__dirname, "/views"));
app.use("/css", express_1.default.static(__dirname + "/public/css"));
app.use("/js", express_1.default.static(__dirname + "/public/js"));
app.use("/images", express_1.default.static(__dirname + "/public/images"));
app.use(express_1.default.urlencoded({ extended: true }));
//app.use("/", testRoutes);
app.use("/", routes_1.default);
app.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log("Server is running");
});
