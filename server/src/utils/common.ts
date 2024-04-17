import jwt from "jsonwebtoken";

type Payload = {
  id: string;
  username: string;

  [key: string]: any;
};

export const ACCESS_TOKEN = "access_token";
export const REFRESH_TOKEN = "refresh_token";

export function generateTokens(payload: Payload) {
  const access_token = jwt.sign(payload, ACCESS_TOKEN, { expiresIn: "1m" });
  const refresh_token = jwt.sign(payload, REFRESH_TOKEN, { expiresIn: "1d" });

  return {
    access_token,
    refresh_token,
  };
}
