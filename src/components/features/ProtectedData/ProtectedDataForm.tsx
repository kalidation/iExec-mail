import Input from "../../common/Input/Input";

interface IProps {
  email?: string;
  name?: string;
  handleOnChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnChangeName: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProtectedDataForm = (props: IProps) => {
  const { email, name, handleOnChangeEmail, handleOnChangeName } = props;

  return (
    <div className="protected-data-form">
      <Input
        label="Email Address (secret)"
        name="email"
        type="email"
        placeholder="johndoe@gmail.com"
        value={email}
        onChange={handleOnChangeEmail}
      />
      <Input
        label="Name (public)"
        name="name"
        type="text"
        placeholder="John Doe"
        value={name}
        onChange={handleOnChangeName}
      />
    </div>
  );
};
