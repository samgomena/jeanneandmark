import Image from "next/image";

import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import Link from "next/link";

const gistesy = localFont({ src: "../../Gistesy.ttf" });

const Registry: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-between items-center p-12 sm:p-20">
        <div className="pb-4">
          <p
            className={`${gistesy.className} text-[#a58953] text-[3rem] sm:text-6xl`}
          >
            Donations Welcome
          </p>
        </div>
        <div className="flex justify-center items-center relative px-16 flex-col">
          <div className=" lg:p-8 p-4 rounded-xl shadow-xl">
            <Link href="https://venmo.com/u/Jeanne-Schneider-2" className="p-6">
              <Image
                src="/venmo.png"
                alt="venmo QR code"
                width={180}
                height={37}
                priority
              />
            </Link>
          </div>
          <div className="pb-10">
            <Link href="https://venmo.com/u/Jeanne-Schneider-2" className="p-6">
              <Image
                src="/venmo-logo.png"
                alt="venmo logo"
                width={100}
                height={50}
              />
            </Link>
          </div>
        </div>
        <div className="text-center text-2xl">
          <p>
            Donations here will help fund a few small honeymoon trips for Jeanne
            and Mark as well as a new washer and dryer for their home.
          </p>
        </div>
      </main>
    </>
  );
};

export default Registry;
