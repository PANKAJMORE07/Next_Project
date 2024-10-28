import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Fixed Nav/Logo Section */}
      <div className="fixed top-0 left-0 right-0 bg-white z-50 px-4 py-3">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto">
          <Image
            src="/LOGO.jpg"
            alt="Company Logo"
            width={35}
            height={35}
            className="rounded-lg"
            priority
          />
          <button className="bg-red-500 text-white px-6 py-2 rounded-full">
            Adjust Gas Fee
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 pt-[72px]">
        <div className="container mx-auto px-4">
          {/* Main Content Container - Added min-h-screen */}
          <div className="min-h-[calc(100vh-72px)]">  {/* This ensures main content takes up full viewport height minus header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4 leading-tight text-black">
                Pay $BNB to Check wallets for Flash USDT & illicit funds
              </h1>
              <p className="text-gray-600 text-lg">
                Protecting users and businesses from unwitting participation in financial crimes.
              </p>
            </div>

            {/* Dashboard Image */}
            <div className="mb-8">
              <Image
                src="https://amlcheck.in/static/media/cover.ef538f1256b3dd19f911.jpg"
                alt="Dashboard visualization"
                width={800}
                height={400}
                className="rounded-lg w-full"
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 px-4 mt-16">
              <div className="flex justify-center">
                <button className="bg-red-500 text-white py-3 rounded-full text-lg font-medium w-1/2">
                  Pay $BNB
                </button>
              </div>
              <button className="flex items-center justify-center gap-2 text-black font-medium">
                For Businesses <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white text-sm py-4">
        <div className="container mx-auto px-6 space-y-10 py-6">
          {/* Logo and Company Info */}
          <div className="mb-4">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={35}
              height={35}
              className="rounded-lg mb-4 opacity-90 filter grayscale brightness-150"
              priority
            />
            <h3 className="font-bold mb-2">SAFELEMENT LIMITED,</h3>
            <p className="text-gray-400">
              UNIT H 3/F SHEK KOK ROAD 8, TSEUNG KWAN O, N.T HONG KONG
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-2">
            <a href="/regulatory" className="hover:text-gray-300">
              Regulatory framework
            </a>
            <a href="/agreement" className="hover:text-gray-300">
              User Agreement
            </a>
            <a href="/privacy" className="hover:text-gray-300">
              Privacy Policy
            </a>
          </div>

          {/* Copyright */}
          <div className="mt-4 text-gray-400">
            © 2024 $BNB-Bot
            <div className="h-px bg-gray-700 mt-4"></div> 
          </div>
        </div>
      </footer>
    </div>
  );
}
