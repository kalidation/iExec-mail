import { useTranslation } from "react-i18next";
import Input from "../../common/Input/Input";

interface IProps {
  email?: string;
  name?: string;
  handleOnChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnChangeName: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProtectedDataForm = (props: IProps) => {
  const { email, name, handleOnChangeEmail, handleOnChangeName } = props;
  const { t } = useTranslation("enNS");

  return (
    <div className="protected-data-form">
      <Input
        label={t("protected-data.input-email.label")}
        name="email"
        type="email"
        placeholder={t("protected-data.input-email.placeholder")}
        value={email}
        onChange={handleOnChangeEmail}
      />
      <Input
        label={t("protected-data.input-name.label")}
        name="name"
        type="text"
        placeholder={t("protected-data.input-name.placeholder")}
        value={name}
        onChange={handleOnChangeName}
      />
    </div>
  );
};
