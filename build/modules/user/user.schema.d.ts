import { Static } from "@sinclair/typebox";
import { z } from 'zod';
export declare const UserObject: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    mail: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    foo: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const UserRef: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    mail: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    foo: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type UserType = Static<typeof UserRef>;
export declare const ZodUser: z.ZodObject<{
    mail: z.ZodString;
    name: z.ZodString;
    foo: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    mail: string;
    foo: string;
}, {
    name: string;
    mail: string;
    foo: string;
}>;
export type ZodUserType = z.infer<typeof ZodUser>;
