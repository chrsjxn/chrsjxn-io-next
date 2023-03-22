import { Polaroid } from "@/components/Polaroid/Polaroid";
import githubProfile from "@/public/images/githubProfile.jpg";
import styles from './about.module.css'

export default function About() {
  return <>
    <h1>Chris Jackson <span className={styles.pronouns}>(he/they)</span></h1>
    <div className={styles.polaroidWrapper}>
      <Polaroid src={githubProfile} alt="self portrait, github profile pic" style="">
        Hello!
      </Polaroid>
    </div>
    <p>
      I am a Staff Software Engineer, focused on web technology, tooling, and 
      performance. Formerly: DoorDash, Zendesk.
    </p>
    <p>I love code review, with an emphasis on useful and empathetic feedback.</p>
    <p>I believe diverse voices improve products, teams, and the world.</p>
    <p>
      Find me elsewhere:{" "}
      <a href="https://github.com/chrsjxn" rel="noopener noreferrer">github</a>{" "}
      -{" "}
      <a href="https://twitter.com/c_jackson_js" rel="noopener noreferrer">twitter</a>
    </p>
  </>
}