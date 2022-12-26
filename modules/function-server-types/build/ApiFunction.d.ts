/**
 * TODO: get rid of `TsFunctionFrontmatterConfig` and put here
 */
export declare type ApiFunction = {
    (): any;
} & ApiFunctionParameters;
export declare type ApiFunctionParameters = {
    isPublic?: boolean;
    /**
     * If it's a slug without TLD, the function will be on on a landing page without its own domain
     * If it's a slug with TLD, it can get it's own domain
     * If domain is given, function is wrapped into `sdk-public-tools`, wrapped with:
     *
     * - providing email and other required credentials
     * - adding to queue if server is busy
     *
     * Later I can wrap this even more with monetisation and 'tool-owner', so I can let others do the same with a single click (promote after form is filled is like "learn more about how to earn money with the new AI tech revolution (or so)")
     */
    domain?: string;
    /**
     * - If true, usage will be counted in `UsageReport`
     * - If "isSuccessful", usage will be counted only if this function returns `.isSuccessful: true`
     *
     * NB: not sure if the latter is needed
     *
     */
    isPaid?: true | "isSuccessful";
    /**
     * Cost per execution in EURO CENT
     *
     * e.g. 0.05 means that 2000 executions cost 1 euro.
     */
    price?: number;
    allowedRoles?: string[];
};
//# sourceMappingURL=ApiFunction.d.ts.map