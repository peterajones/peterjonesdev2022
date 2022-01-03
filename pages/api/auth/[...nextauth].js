import NextAuth from "next-auth"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"
import EmailProvider from "next-auth/providers/email"
import GithubProvider from "next-auth/providers/github"
import GitlabProvider from "next-auth/providers/gitlab"
// import { signIn } from "next-auth/react";

export default NextAuth({
  // DB Adapter
  adapter: MongoDBAdapter(clientPromise),
  // Custom signIn page
  pages: {
    signIn: '/signin'
  },
  // Configure one or more authentication providers
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GitlabProvider({
      clientId: process.env.GITLAB_CLIENT_ID,
      clientSecret: process.env.GITLAB_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
})