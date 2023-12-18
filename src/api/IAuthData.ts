export interface IAuthData {
  type: "bearer";
  access_token: string;
  refresh_token: string;
  expiry: string;
}
