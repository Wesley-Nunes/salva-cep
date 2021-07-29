import Button from "./components/Button";

import "./style.css";

// This abstraction will handle any type of input that receives text
const TextFormAbstraction = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const btn = props.btn;
  return (
    <>
      <label htmlFor={props.id || props.name} className="mediumFontSize">
        {label}
      </label>
      <input {...field} {...props} className="mediumFontSize" />
      <Button btn={btn} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};

export default TextFormAbstraction;
