import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstName: "Muhammad", lastName: "Omer", email:"iser@mail.com"};

  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn} /> {/* Sidebar call */}

        <div className="flex size-full flex-col"> 
          <div className="root-layout">
            <Image src='/icons/logo.svg' width={30} height={30} alt="logo" />
            <div>
              <MobileNavbar user={loggedIn}/> {/* Mobile navbar call */}
            </div>
          </div>

          {children}

        </div>
    </main>
  );
}
