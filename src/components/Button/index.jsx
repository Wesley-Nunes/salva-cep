import "../../styles/global.css";

const Button = (props) => {
  const action = props.btn;
  return (
    <button type="submit" className="mediumFontSize">
      {action}
    </button>
  );
};

export default Button;
