const Box = (props) => {
  //  Write your code here.
  const { text, cssClass } = props;
  const el = <div className={cssClass}>{text}</div>;
  return el;
};

const element = (
  //  Write your code here.
  <div class="boxes-bg-container">
    <h1>Boxes</h1>
    <div class="boxes-container">
      <Box text="Small" cssClass="bg-1" />
      <Box text="Medium" cssClass="bg-2" />
      <Box text="Large" cssClass="bg-3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
