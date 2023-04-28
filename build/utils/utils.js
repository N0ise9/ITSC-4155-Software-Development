"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForAllPromises = void 0;
async function waitForAllPromises(items, asyncFunc) {
    const promises = [];
    for (const item of items) {
        promises.push(asyncFunc(item));
    }
    return await Promise.all(promises);
}
exports.waitForAllPromises = waitForAllPromises;
