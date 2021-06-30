"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleModel = exports.RoleType = void 0;
/**
 * All possible user types
 *
 * - *DEFAULT_ADMIN* --> Root user
 * - *ADMIN* --> Administartor over the system, chosen by the root (DEFAULT_ADMIN)
 * - *VET* --> has a group of users, and has contact to the ADMINs
 * - *USER* --> is only aware of his own VET, and or contact to the ADMIN.
 */
var RoleType;
(function (RoleType) {
    RoleType[RoleType["DEFAULT_ADMIN"] = 0] = "DEFAULT_ADMIN";
    RoleType[RoleType["ADMIN"] = 1] = "ADMIN";
    RoleType[RoleType["VET"] = 2] = "VET";
    RoleType[RoleType["USER"] = 3] = "USER";
})(RoleType = exports.RoleType || (exports.RoleType = {}));
class RoleModel {
    /**
     * Determines if the role id provided is a DEFAULT_ADMIN id.
     *
     * @param roleId the role id to be tested.
     * @returns true if the role id is a DEFAULT_ADMIN role id. Otherwise false.
     */
    isDefaultAdmin(roleId) {
        return __awaiter(this, void 0, void 0, function* () {
            return roleId === RoleType.DEFAULT_ADMIN;
        });
    }
}
exports.RoleModel = RoleModel;
//# sourceMappingURL=roleModel.js.map