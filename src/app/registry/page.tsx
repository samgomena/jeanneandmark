import Image from "next/image";

import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import Link from "next/link";
import styles from "./page.module.css";

const gistesy = localFont({ src: "../../Gistesy.ttf" });

const Registry: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className="flex justify-center items-center relative px-16 flex-col">
          <div className="pb-4">
            <p className={`${gistesy.className} text-[#a58953] text-6xl`}>
              Donations Welcome
            </p>
          </div>
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
          <div>
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
      </main>
    </>
  );
};

export default Registry;
