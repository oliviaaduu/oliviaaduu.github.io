import {AOELINK, EWBLINK, INTRO, ORIANALINK, CSLINK, ACMLINK } from '../constants';
import '../styles/About.css';

function About() {
    return (
      <div className="about">
          <p>{INTRO}</p>
          <p>I’m spending this summer as a Cybersecurity Software Engineering Intern @ Lyft! During the school year, you can find me at rehearsal with <a href={ORIANALINK}>Oriana Choir</a>, 
          working on the Malawi Sanitation Project with <a href={EWBLINK}>USC Engineers Without Borders</a>, or hanging out with some other powerful women in STEM with <a href={AOELINK}>Alpha Omega Epsilon Sorority</a>. 
          I might also be holding office hours for <a href={CSLINK}>CS104</a>: Data Structures and Object Oriented Design, 
          or managing the social media platforms for <a href={ACMLINK}>USC ACM</a>. 
          Otherwise, I’ll be basking in the sun on a picnic blanket with a good friend, a novel, or my paints, or learning something cool and new like trying to play Taylor Swift songs on the ukulele. 
          (Or if I'm at home, I'm probably bothering my cats.)
          </p>
      </div>
    );
  }
  
  export default About;
  