import jwt from "jsonwebtoken";

const sign = async (payload) => {
	return jwt.sign(payload, 'developer')
}

const verify = async (authorization) => {
  return jwt.verify(authorization, "developer");
};

export {sign, verify}