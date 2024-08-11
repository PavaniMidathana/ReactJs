const element = (
  <div className="congratulations-card-container-bg">
    <h1 className="congratulations-card-heading">Congratulations</h1>
    <div class="congratulations-card-inner-card-bg">
      <img
        className="congratulations-card-inner-card-img1"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="congratulations-card-inner-card-name">Kiran V</h1>
      <p className="congratulations-card-inner-card-desc">
        Vishnu Institute of Computer Education and Technology,Bhimavaram
      </p>
      <img
        className="congratulations-card-inner-card-img2"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
