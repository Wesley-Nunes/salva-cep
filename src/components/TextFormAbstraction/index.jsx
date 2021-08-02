// Form manager
import { useField } from "formik";

// Components
import Button from "../Button";

// Style
import "../../styles/global.css";

// This abstraction will handle any type of input that receives text
const TextFormAbstraction = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name} className="mediumFontSize">
        {label}
      </label>
      <input {...field} {...props} className="mediumFontSize" />
      <Button {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};

export default TextFormAbstraction;
