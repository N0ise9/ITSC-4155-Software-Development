export async function waitForAllPromises<Item, AsyncResponse>(
  items: Array<Item> | ReadonlyArray<Item>,
  asyncFunc: (item: Item) => Promise<AsyncResponse>
): Promise<Array<AsyncResponse>> {
  const promises = [];
  for (const item of items) {
    promises.push(asyncFunc(item));
  }
  return await Promise.all(promises);
}
