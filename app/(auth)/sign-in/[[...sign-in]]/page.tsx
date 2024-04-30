
import { SignIn } from "@clerk/nextjs"

export default function SignInPage({
    params,
    searchParams,
}: {
    params: { signin: string }
    searchParams?: { [key: string]: string | undefined }
}) {
    return (
        <div className="">
            <SignIn />
        </div>
    )
}
