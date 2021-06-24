"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNewUserValid = void 0;
/**
 * Given some user test to see if they have all the correct attribute and exist.
 *
 * @param newUser A new user to be tested.
 * @returns true if the new user if valid. Otherwise false.
 */
const isNewUserValid = (newUser) => {
    return (dataExists(newUser.username) &&
        dataExists(newUser.password) &&
        dataExists(newUser.email) &&
        dataExists(newUser.fname) &&
        dataExists(newUser.lname));
};
exports.isNewUserValid = isNewUserValid;
/**
 * Given some piece of data ensure it is not null or undefined.
 *
 * @param data Some random data to be tested.
 * @returns true if the data is not null or undefined. Otherwise false.
 */
const dataExists = (data) => data !== null && data !== undefined;
//# sourceMappingURL=userValidation.js.map