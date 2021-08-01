import "../../styles/global.css";

const Button = (props) => {
  const action = props.btnname;
  const click = props.onclick;

  return (
    <button type="submit" className="mediumFontSize" onClick={click}>
      {action}
    </button>
  );
};

export default Button;
