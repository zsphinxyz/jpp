import NextAuth from "next-auth"
import authConfig from "./auth.config"

export const { handlers: { GET, POST }, auth, } = NextAuth({
  secret: 'LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=',
  ...authConfig,
})