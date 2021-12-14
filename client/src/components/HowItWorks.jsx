import "../css/HowItWorks.css";
import account from "../assets/account.png";

const HowItWorks = () => {
  return (
    <div>
      <div id="how-it-works">
        <h3 id="section" className="instructions">
          Dropping a Seed is as easy as counting to three!
        </h3>
      </div>
      <div className="monstera">
        <img src={account} id="leaf" alt="leaf"/>
      </div>
      <div id="post-instructions">
        <div className="card-one">
          <h3 className="step-1">1.</h3>
          <p className="one">
            Simply login and begin posting. If you're not a registered user,
            follow the prompt to create an account!
          </p>
        </div>
        <div className="card-two">
          <h3 className="step-2">2.</h3>
          <p className="two">
            Once you're logged in, start creating your post. Type a few lines
            you wish to share and add a picture of your plant!
          </p>
        </div>
        <div className="card-three">
          <h3 className="step-3">3.</h3>
          <p className="three">
            Hit the publish button to see your post go LIVE. Feel free to browse
            other member's posts. ☺
          </p>
        </div>
      </div>
    </div>
  );
};
export default HowItWorks;
