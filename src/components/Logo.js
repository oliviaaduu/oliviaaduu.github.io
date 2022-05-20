import { EMAIL, GITHUBURL, LINKEDINURL } from '../constants';
import Image from 'react';
import '../styles/Logo.css';
import logoImg from "../images/logo.png";

function Logo() {
  return (
    <div className="Logo">
        <img src={logoImg} id="logoimg"/>
    </div>
  );
}

export default Logo;
