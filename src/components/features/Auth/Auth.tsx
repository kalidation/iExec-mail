import { useTranslation } from "react-i18next";
import Card from "../../common/Card/Card";
import { AuthContent } from "./AuthContent";
import { Button } from "../../common/Button/Button";

interface IProps {
  user: string;
  isLoading: boolean;
  connectToMetaMask: () => void;
}

const Auth = (props: IProps) => {
  const { connectToMetaMask, isLoading, user } = props;
  const { t } = useTranslation("enNS")

  return (
    <Card
      user={user}
      content={<AuthContent />}
      footer={
        <Button
          label={isLoading ? t("button.iniitalizing") : t("button.connect-wallet")}
          onClick={connectToMetaMask}
          isAnimateHover
          isActive={!isLoading}
        />
      }
    />
  );
};

export default Auth;
