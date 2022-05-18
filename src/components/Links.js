import { EMAIL, GITHUBURL, LINKEDINURL } from '../constants';
import Image from 'react';
import '../styles/Links.css';
import mailImg from "../images/mail.png";
import gitHubImg from "../images/github.png";
import linkedInImg from "../images/linkedin.png";

function Links() {
  return (
    <div className="Links">
      <div className='email'>
        <p>
          <img src={mailImg}/>
          {EMAIL}
        </p>
      </div>
      
      <a href= {GITHUBURL}>
          <img src={gitHubImg}/>
      </a>
      <a href={LINKEDINURL}>
        <img src={linkedInImg}/>
      </a>
    </div>
  );
}

export default Links;
