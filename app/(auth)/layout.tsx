import Image from "next/image"
import Logo from "@/components/ui/logo"
import AuthBg from "@/public/images/auth-bg.svg"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className="absolute w-full z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Site branding */}
            <div className="shrink-0 mr-4">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="relative grow flex">

        <div className="absolute left-0 -translate-x-1/3 bottom-0 pointer-events-none" aria-hidden="true">
          <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 opacity-70 blur-[160px]"></div>
        </div>

        {/* Content */}
        <div className="w-full">

          <div
            className="h-full flex flex-col justify-center before:min-h-[4rem] md:before:min-h-[5rem] before:flex-1 after:flex-1">

            <div className="px-4 sm:px-6">
              <div className="w-full max-w-sm mx-auto">
                <div className="py-16 md:py-20">

                  {children}

                </div>
              </div>
            </div>

          </div>

        </div>

        


      </main>
    </>
  )
}
