import { ReaderProps } from "ai-types";
/**
NB: this thing doesn't know about the basepath, it allows any path in the project.

Idea: would it be easy to allow for path outside of project as well?
 */
export declare const getReaderPageProps: (projectRelativeFilePath?: string, basePath?: string, isAdmin?: boolean) => Promise<{
    props: {
        notFound: boolean;
        notFoundReason: string;
        projectRelativeFilePath: null;
    };
} | {
    props: ReaderProps;
}>;
//# sourceMappingURL=getReaderPageProps.d.ts.map