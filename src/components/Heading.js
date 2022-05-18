import '../styles/Heading.css';
import sunImg from "../images/sun.png";
import cloudImg from "../images/cloud.png";
import catImg from "../images/cat.png";
import flowerImg from "../images/flower.png";
import heartImg from "../images/heart.png";

function Heading() {
  return (
    <div className="Heading">
      <img src={catImg}/>
      <img src={cloudImg}/>
      <h2>olivia du</h2>
      <img src={heartImg}/>
      <img src={sunImg}/>
      <img src={flowerImg}/>

    </div>
  );
}

export default Heading;