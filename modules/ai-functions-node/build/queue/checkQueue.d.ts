/**
 * ---
 * runEveryPeriod: minute
 * ---
 *
 * cron that runs every minute for executing new puppeteer queue items. It will open it as child process. You can set the amount of tabs it should have as a limit, and it will keep the tabs open afterwards, but after the thing is done it will just remove the item from the `Queue`.
 */
export declare const checkQueue: () => Promise<void>;
//# sourceMappingURL=checkQueue.d.ts.map