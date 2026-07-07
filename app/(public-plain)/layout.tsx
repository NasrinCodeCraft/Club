import '@/app/globals.css'

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {

    return (
        <html>
        <body>
            <div style={{direction:"rtl"}} className="w-full overflow-x-hidden min-h-screen flex flex-col">

                <div className="flex justify-center items-start">
                    {children}
                </div>

            </div>
        </body>
        </html>
    )
}