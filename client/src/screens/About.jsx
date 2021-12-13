import account from "../assets/account.png";
import './css/About.css';

const About = () => {
  return (
    <div>
    <div className="about">
      <article className="happy-quote">"You cant' buy happiness, but you can buy plants, and that's pretty much the same thing."</article>
      <h5>Maison des Plantes is operated by a plant enthusiast and parent who firmly believes in the transformative powers of owning a plant.</h5>
      <h6>The aim is simple: connect people through their passion of indoor plants while bringing people one step closer to happiness.</h6>
      </div>
      <a href="https://www.thesill.com/" target="_blank" rel="norefferer"><img className="the-sill" src={account} alt="The-Sill"/></a>
</div>
)
}