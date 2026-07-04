import '@/app/globals.css'

import ClubHeader from "@/assets/public-components/ClubHeader";
import Menu from "@/assets/public-components/Menu";
import ClubFooter from "@/assets/public-components/ClubFooter";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {

    // const session = null
    const session = {
        user: {
            name: "Nasrin",
            email: "test@test.com",
            image: null,
        },
        expires: "2026-12-31T23:59:59.999Z",
    }
    return (
        <html>
        <body>
            <div style={{direction:"rtl"}} className="min-h-screen flex flex-col">
                <header>
                    <ClubHeader auth={session}/>
                    {session ? (
                        <Menu auth={session}/>
                    ) : (
                        <div className="xl:hidden">
                            <Menu auth={session}/>
                        </div>
                    )}
                </header>
                <div className="flex flex-1 justify-center items-start">
                    {children}
                </div>
                <footer>
                    <ClubFooter/>
                </footer>
            </div>
        </body>
        </html>
    )
}