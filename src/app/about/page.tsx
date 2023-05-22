import styles from "./page.module.css";
import localFont from "next/font/local";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const gistesy = localFont({ src: "../../Gistesy.ttf" });

const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div>
          <div className="flex items-center justify-center flex-col">
            <p className={`${gistesy.className} text-[#a58953] text-6xl pb-16`}>
              Celebrate With Us!
            </p>
            <p className="text-2xl text-center pb-4">
              Please join us for drinks and live music as we celebrate our
              wedding with family and friends.
            </p>
            <p className="text-2xl text-center pb-4">June | 04 | 23</p>
            <p className="text-2xl text-center pb-4 ">7:00 PM</p>
            <p className="text-2xl text-center pb-4">
              <Link href="https://goo.gl/maps/HUFbVDAk2jrYvrM86" rel="noopener">
                Avanti Restaurant
              </Link>
              <span className="inline-flex p-2">
                <ArrowUpRightIcon className="inline-block h-4 w-4" />
              </span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
