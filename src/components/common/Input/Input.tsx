import "./input.css";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = (props: IProps) => {
  const { label, name, placeholder, type ,...rest } = props;

  return (
    <div className="custom-input">
      <label htmlFor={name}>{ label }</label>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        id={name}
        {...rest}
      />
    </div>
  );
};

export default Input;
