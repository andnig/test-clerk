import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
    "/api/user/created",
    "/api/billing/new-tier",
    "/api/billing/webhook",
    "/sign-up/(.*)",
    "/sign-in/(.*)",
    "/sign-in",
    "/sign-out",
    "/forgot-password",
])

export default clerkMiddleware((auth, req) => {
    if (isPublicRoute(req)) return // if it's a public route, do nothing
    console.log(
        "Protecting route",
        req.nextUrl.origin + "" + req.nextUrl.pathname,
        auth().sessionId
    )
    auth().protect() // for any other route, require auth
})

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
