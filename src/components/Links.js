import { EMAIL, GITHUBURL, LINKEDINURL } from '../constants';
import '../styles/Links.css';

function Links() {
  return (
    <div className="Links">
      <p>Olivia Du, May 2022.</p>
      {/* <img src="images/Gmail-logo.png"/>  */}
      <p>{EMAIL}</p>
      <a href= {GITHUBURL}>
          {/* <img src="images/GitHub-Mark-120px-plus.png"/> */}
          Github
      </a>
      <a href={LINKEDINURL}>
          {/* <img src="images/LI-In-Bug.png"/> */}
          LinkedIn
      </a>
    </div>
  );
}

export default Links;
