import { DefaultModelType } from "model-types";
/**

Model for a Queue system so you can execute functions when ram is available


 */
export interface Queue extends DefaultModelType {
    startedAt?: number;
    type?: "puppeteer";
    /**
     * notify via email, for now, after n seconds, if the queue item has not been executed before that.
     */
    notifyLateAfterSeconds?: number;
    hasNotifiedLate?: boolean;
    /**
     * notify via email, for now
     */
    shouldNotifyOnResult?: boolean;
    /**
     * device authToken of who executed this
     * not necesarily a `Person` yet, because it may be done unauthenticated.
     */
    executionAuthToken: string;
    functionName: string;
    parameters: any[];
}
//# sourceMappingURL=Queue.d.ts.map