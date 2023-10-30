/* eslint-disable @typescript-eslint/no-namespace */

export namespace Authenticate {
  export type IAuthToken = {
    id: string;
    email: string;
  };
  export type IAuthenticatedUser = {
    user: IAuthToken;
  };
}
