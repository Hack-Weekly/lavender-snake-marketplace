import { Deta } from "deta";
import { env } from "~/env.mjs";

//  Deta Base is a fully-managed, fast, scalable and secure NoSQL database
//  with a focus on end-user simplicity. It offers a UI through which you
//  can easily see, query, update and delete records in the database.
//  https://deta.space/docs/en/reference/base/sdk

//  Deta Drive is a managed, secure and scalable file storage service with
//  a focus on end-user simplicity.
//
//  https://deta.space/docs/en/reference/drive/sdk

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
export const deta = Deta(env.DETA_ACCESS_KEY);

export const itemDb = deta.Base("items");
export const profileDb = deta.Base("profiles");
export const orderDb = deta.Base("orders");
export const userDb = deta.Base("users");
