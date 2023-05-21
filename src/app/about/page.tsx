import styles from "./page.module.css";
import Navbar from "@/components/Navbar";

const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.center}>
          <div className=" p-8">About</div>
        </div>
      </main>
    </>
  );
};

export default About;
