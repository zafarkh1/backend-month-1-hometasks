import jwt from "jsonwebtoken";

export const sign = (payload) => jwt.sign(payload, "@SD$5hbfbjh4");
export const verify = (token) => jwt.verify(token, "@SD$5hbfbjh4");