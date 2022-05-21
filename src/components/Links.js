import { EMAIL, GITHUBURL, LINKEDINURL } from '../constants';
import Image from 'react';
import '../styles/Links.css';
import MyResume from "../Du, Olivia - May 2022.pdf";
// import mailImg from "../images/mail.svg";
// import gitHubImg from "../images/github.svg";
// import linkedInImg from "../images/linkedin.svg";

import mailImg from "../images/mail.png";
import gitHubImg from "../images/github.png";
import linkedInImg from "../images/linkedin.png";
import resumeImg from "../images/resume.png";

function Links() {
  return (
    <div className="Links">
      <div className='email'>
        <p>
          <img src={mailImg}/>
          {EMAIL}
        </p>
      </div>
      <a href={MyResume} download>
        <img src={resumeImg}/>
      </a>
      <a href={GITHUBURL}>
          <img src={gitHubImg}/>
      </a>
      <a href={LINKEDINURL}>
        <img src={linkedInImg}/>
      </a>
    </div>
  );
}

export default Links;
