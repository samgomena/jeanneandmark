import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.center}>
          {/* <div className=" p-8 rounded-xl shadow-xl"> */}
          <Image
            src="/jeanneandmarkheader.png"
            alt="Hello"
            width={750}
            height={750}
            priority
          />
          {/* </div> */}
        </div>
      </main>
    </>
  );
}
