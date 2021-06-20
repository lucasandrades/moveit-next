import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { CompletedChallegens } from '../components/CompletedChallegens'
import { Countdown } from '../components/Countdown'

import styles from '../styles/pages/Home.module.css'

export default function Home(){
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallegens />
          <Countdown />
        </div>
        <div>

        </div>
      </section>
    </div>
  );
}