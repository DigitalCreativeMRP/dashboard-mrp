import { type DefaultSession } from "next/auth";
export type ExtendedUser = DefaultSession["user"] & {
  // you can add whatever here
  role: string;
  something: string;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
