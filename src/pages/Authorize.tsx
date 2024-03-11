import { ProtectDataParams } from "@iexec/dataprotector";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import Auth from "../components/features/Auth/Auth";
import { useAuth } from "../redux/features/Auth/useAuth";
import { useAppSelector } from "../redux/App/typedHooks";
import { useData } from "../redux/features/data/useData";
import { ProtectedData } from "../components/features/ProtectedData/ProtectedData";
import { useGrantAccess } from "../redux/features/grantAccess/useGrantAccess";
import { AUTHORIZED_APP } from "../utils/constants";

const Authorize = () => {
  const { t } = useTranslation("enNS");
  const [searchParams] = useSearchParams();
  const user = searchParams.get("user");

  const app = useAppSelector((state) => state.app);
  const auth = useAppSelector((state) => state.auth);

  const [isForm, setIsForm] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [selectedProctedData, setSelectedProtectedData] = useState<string>();

  const { connectToMetaMask } = useAuth();
  const { protectData } = useData();
  const { grantAccess } = useGrantAccess();

  const handleProtectData = () => {
    if (email) {
      const formData: ProtectDataParams = {
        data: {
          email,
        },
        name,
      };
      protectData(formData).then(() => {
        handleForme();
      });
    }
  };

  const handleOnChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const handleSelectProtectedData = (selectedData?: string) => {
    setSelectedProtectedData(selectedData);
  };

  const handleForme = () => {
    setIsForm((prev) => !prev);
  };

  const handleGrantAccess = () => {
    if (user && selectedProctedData)
      grantAccess({
        authorizedApp: AUTHORIZED_APP,
        authorizedUser: user,
        protectedData: selectedProctedData,
      });
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <h2>{t("auth.titles.head")}</h2>
        <h4>{t("auth.titles.sub")}</h4>
      </div>
      <div>
        {user && !app.adress && (
          <Auth
            user={user}
            isLoading={auth.isLoading}
            connectToMetaMask={connectToMetaMask}
          />
        )}
        {user && app.adress && (
          <ProtectedData
            user={user}
            email={email}
            name={name}
            isForm={isForm}
            selectedProtectedData={selectedProctedData}
            handleOnChangeEmail={handleOnChangeEmail}
            handleOnChangeName={handleOnChangeName}
            handleForme={handleForme}
            handleProtectData={handleProtectData}
            handleSelectProtectedData={handleSelectProtectedData}
            handleGrantAccess={handleGrantAccess}
          />
        )}
      </div>
    </div>
  );
};

export default Authorize;
