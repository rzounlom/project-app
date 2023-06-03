import { SignJWT, jwtVerify } from "jose";

import bcrypt from "bcrypt";
import { db } from "./db";

export const hashPassword = (password: string) => bcrypt.hash(password, 10);
