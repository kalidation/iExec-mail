import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../redux/App/typedHooks";

export const AuthContent = () => {
  const auth = useAppSelector((state) => state.auth);
  const app = useAppSelector((state) => state.app);
  const {t} = useTranslation("enNS")

  const renderMessage = () => {
    if (auth.isError && auth.error) {
   
      return auth.error;
    }

    if (app.message.length > 0) {
      return app.message;
    }
   
    return  t("auth.connect-wallet")
  };

  return (
    <div>
      {renderMessage()}
    </div>
  );
};
