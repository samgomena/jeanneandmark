import Navbar from "@/components/Navbar";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className="flex justify-center items-center flex-col relative py-8">
          <div>
            <Image
              src="/jeanneandmarkheader.png"
              alt="Hello"
              width={750}
              height={750}
              priority
            />
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="text-2xl">June | 04 | 23</p>
            <p className="text-2xl">7:00 PM</p>
            <p className="text-2xl">Avanti Restaurant</p>
          </div>
        </div>
      </main>
    </>
  );
}
