import Link from "next/link"
import Image from "next/image"

export function MainSiteHeader() {
  return (
    <header className="bg-black/50 backdrop-blur-sm fixed w-full top-0 z-40">
      {/* Mobile Header */}
      <div className="md:hidden">
        <div className="h-12 flex items-center justify-center px-4 relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-tech-gold"></div>
          <Link href="/" className="flex items-center gap-2">
            <div className=" flex items-center justify-center relative">
              <Image src="/logo.png" alt="Logo" width={48} height={48} className="w-10 h-10" />
            </div>
          </Link>
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-blue-600"></div>
        </div>
      </div>

      {/* Desktop/Tablet Header */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 py-3 max-w-[1150px]">
          <div className="flex items-center justify-center">
            {/* Logo and Brand - Centered */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="flex items-center justify-center">
                  <Image src="/logo.png" alt="Logo" width={48} height={48} className="w-10 h-10" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
