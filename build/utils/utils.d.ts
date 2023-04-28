export declare function waitForAllPromises<Item, AsyncResponse>(items: Array<Item> | ReadonlyArray<Item>, asyncFunc: (item: Item) => Promise<AsyncResponse>): Promise<Array<AsyncResponse>>;
