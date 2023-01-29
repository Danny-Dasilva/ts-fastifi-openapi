"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZodUser = exports.UserRef = exports.UserObject = void 0;
const typebox_1 = require("@sinclair/typebox");
const zod_1 = require("zod");
function StringUnion(values) {
    return { enum: values };
}
const T = StringUnion(["A", "B", "C"]);
exports.UserObject = typebox_1.Type.Object({
    name: typebox_1.Type.String(),
    mail: typebox_1.Type.Optional(typebox_1.Type.String({ format: "email" })),
    foo: typebox_1.Type.Optional(typebox_1.Type.String(T)),
}, { $id: "UserObject" });
exports.UserRef = typebox_1.Type.Ref(exports.UserObject);
exports.ZodUser = zod_1.z.object({
    mail: zod_1.z.string().email(),
    name: zod_1.z.string(),
    foo: zod_1.z.string()
});
//# sourceMappingURL=user.schema.js.map