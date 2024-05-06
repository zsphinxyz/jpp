import NextAuth from "next-auth"
import authConfig from "./auth.config"
import {apiRoutes, authRoutes, publicRoutes} from '@/routes'
import { NextResponse, type NextRequest } from "next/server"

const {auth} = NextAuth(authConfig)

// @ts-ignore
export default auth ( (req) => {
    const DEFAULT_REDIRECT_PAGE = '/role'
    const {nextUrl} = req;
    const isLoggedIn = !!req.auth;

    const isApiRoute = nextUrl.pathname.startsWith(apiRoutes);
    const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoutes = authRoutes.includes(nextUrl.pathname)

    if (isPublicRoutes) {
        return null;
    }

    if (isApiRoute) {
        return null;
    }

    if (isAuthRoutes) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_REDIRECT_PAGE, nextUrl))
        }
        return null;
    }

    if (!isLoggedIn && !isPublicRoutes) {
        return NextResponse.redirect(new URL('/sign-in', req.url));
    }

})

export const config = {
    matcher:  ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
