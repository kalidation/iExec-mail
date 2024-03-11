import { ProtectDataParams } from "@iexec/dataprotector";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../redux/features/Auth/useAuth";
import { useAppSelector } from "../redux/App/typedHooks";
import { useData } from "../redux/features/data/useData";
import { ProtectedData } from "../components/features/ProtectedData/ProtectedData";

import Auth from "../components/features/Auth/Auth";
import { useGrantAccess } from "../redux/features/grantAccess/useGrantAccess";

const Titles = (): JSX.Element => (
  <>
    <h2>Secret Email Service</h2>
    <h4>
      iExec creates the technologies for individuals and organizations to
      create, protect and develop their digital estate.
    </h4>
  </>
);

const Authorize = () => {
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
        authorizedApp: "web3mail.apps.iexec.eth",
        authorizedUser: user,
        protectedData: selectedProctedData,
      });
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <Titles />
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
