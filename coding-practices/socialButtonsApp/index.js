const Button = (props) => {
  //  Write your code here.
  const { text, color } = props;
  if (color === "primary") {
    return <button className="btn btn-primary m-3">{text}</button>;
  } else if (color === "warning") {
    return <button className="btn btn-warning text-light m-3">{text}</button>;
  } else if (color === "light") {
    return <button className="btn btn-light m-3">{text}</button>;
  }
};

const element = (
  //  Write your code here.
  <div class="social-buttons-bg-container">
    <h1 class="social-buttons-heading">Social Buttons</h1>
    <div class="social-buttons-btn-container">
      <Button text="Like" color="warning" />
      <Button text="Comment" color="light" />
      <Button text="Share" color="primary" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
