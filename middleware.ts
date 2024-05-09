// import { authMiddleware } from "@clerk/nextjs/server";
//
// export default authMiddleware({});
//
// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };
//

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/sign-in(.*)"]);

export default clerkMiddleware(
  (auth, req) => {
    if (isPublicRoute(req)) return;
    auth().protect();
  },
  {
    debug: true,
  },
);

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
