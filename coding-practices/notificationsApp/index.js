const Notification = (props) => {
  //  Write your code here.
  const { text, cssColor, imgSrc } = props;
  const ele = (
    <div className={cssColor}>
      <img src={imgSrc} />
      <p>{text}</p>
    </div>
  );
  return ele;
};

const element = (
  //  Write your code here.
  <div className="notifications-bg-container">
    <h1>Notifications</h1>
    <div>
      <Notification
        text="Information Message"
        cssColor="bg-1"
        imgSrc="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        text="Success Message"
        cssColor="bg-2"
        imgSrc="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        text="Warning Message"
        cssColor="bg-3"
        imgSrc="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        text="Error Message"
        cssColor="bg-4"
        imgSrc="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
