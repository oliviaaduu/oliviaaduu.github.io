import { EMAIL, GITHUBURL, LINKEDINURL } from '../constants';
import Image from 'react';
import '../styles/Links.css';
import mailImg from "../images/mail.png";
import gitHubImg from "../images/github.png";
import linkedInImg from "../images/linkedin.png";


function Links() {
  return (
    <div className="Links">
      <p>© Olivia Du, May 2022.</p>
      <p>
        {EMAIL}
        <img src={mailImg}/>
      </p>
      <a href= {GITHUBURL}>
          <img src={gitHubImg}/>
          {/* Github */}
      </a>
      <a href={LINKEDINURL}>
        <img src={linkedInImg}/>
          {/* LinkedIn */}
      </a>
    </div>
  );
}

export default Links;
