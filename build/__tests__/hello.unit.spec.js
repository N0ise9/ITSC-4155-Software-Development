"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_1 = require("../hello");
it("prints Hello World", () => {
    const message = (0, hello_1.helloWorld)();
    expect(message).toBe("Hello World");
});
