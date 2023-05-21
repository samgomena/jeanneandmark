import Image from "next/image";

import styles from "./page.module.css";
import Navbar from "@/components/Navbar";

const Registry: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.center}>
          <div className=" lg:p-8 p-4 rounded-xl shadow-xl">
            <Image
              src="/venmo.png"
              alt="venmo QR code"
              width={180}
              height={37}
              priority
            />
          </div>
        </div>

        {/* <div className={styles.grid}>
          <p>Donations welcomed</p>
        </div> */}
      </main>
    </>
  );
};

export default Registry;
