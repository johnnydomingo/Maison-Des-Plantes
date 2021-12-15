import account from "../assets/account.png";
import '../css/About.css';

const About = () => {
  return (
    <div>
      <div className="who-we-are">Who we are..</div>
      <div className="about">
      {/* <a href="https://www.thesill.com/" ><img className="the-sill" src={account} alt="The-Sill"/></a> */}
      <article id="happy-quote">"You can't buy happiness, but you can buy plants, and that's pretty much the same thing."</article>
      <h5 id="who">Maison des Plantes is operated by a plant enthusiast and parent who firmly believes in the transformative powers of owning a plant.</h5>
      <h6 id="aim">The aim is simple: connect people through their passion of indoor plants while bringing people one step closer to happiness.</h6>
      </div>
      <a href="https://www.thesill.com/" ><img className="the-sill" src={account} alt="The-Sill" /></a>
      <div className="click">click me</div>
</div>
)
}

export default About;