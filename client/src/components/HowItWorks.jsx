import '../css/HowItWorks.css';

const HowItWorks = () => {
  return (
    <div id="how-it-works">
      <div>
        <h3 className="instructions">Dropping a Seed is as easy as counting to three!</h3>
      </div>
      <div className="card-one">
        <h3 className="step-1">1.</h3>
        <p className="one">Simply login and begin posting. If you're not a registered user, follow the prompt to create an account!</p>
      </div>
      <div className="card-two">
        <h3 className="step-2">2.</h3>
        <p className="two">Once you're logged in, start creating your post. Type a few lines you wish to share and add a picture of your plant!</p>
      </div>
      <div className="card-three">
        <h3 className="step-three">3.</h3>
        <p className="three">Hit the publish button to see your post go LIVE. Feel free to browse other peopl's posts.</p>
      </div>
    </div>
  ) 
};
export default HowItWorks;
