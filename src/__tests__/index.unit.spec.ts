import { test } from "..";

it("runs", () => {
  const msg = test();

  expect(msg).toBe("test");
});
