import { test } from "..";
// This file will be deleted in the future
// It is only here for github workflow success

it("does a thing", () => {
  const msg = test();

  expect(msg).toBe("test");
});
