
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
            <SignIn
                fallbackRedirectUrl="/"
                appearance={{
                    elements: {
                        socialButtonsBlockButtonText: "text-sm",
                        formButtonPrimary: "text-sm p-3 mb-0",
                        formButtonReset: "text-sm p-3 mb-0",
                        input: "text-sm p-3 mt-0",
                        form: "gap-4",
                        logoBox: "h-8",
                        headerTitle: "text-xl",
                        headerSubtitle: "text-sm",
                    },
                }}
            />
        </div>
    )
}
