/**
 * All possible user types
 *
 * - *DEFAULT_ADMIN* --> Root user
 * - *ADMIN* --> Administartor over the system, chosen by the root (DEFAULT_ADMIN)
 * - *VET* --> has a group of users, and has contact to the ADMINs
 * - *USER* --> is only aware of his own VET, and or contact to the ADMIN.
 */
export enum RoleType {
  DEFAULT_ADMIN = 0,
  ADMIN = 1,
  VET = 2,
  USER = 3,
}

export class RoleModel {
  /**
   * Determines if the role id provided is a DEFAULT_ADMIN id.
   *
   * @param roleId the role id to be tested.
   * @returns true if the role id is a DEFAULT_ADMIN role id. Otherwise false.
   */
  async isDefaultAdmin(roleId: number): Promise<boolean> {
    return roleId === RoleType.DEFAULT_ADMIN;
  }
}
