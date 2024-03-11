import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../redux/App/typedHooks";
import { ProtectedDataForm } from "./ProtectedDataForm";
import ProtectedDataList from "./ProtectedDataList";

import "./ProtectedData.css";

interface IProps {
  email: string;
  isForm: boolean;
  name?: string;
  selectedProtectedData?: string;
  handleSelectProtectedData: (selectedData: string) => void;
  handleOnChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnChangeName: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProtectedDataContent = (props: IProps) => {
  const {
    isForm,
    handleOnChangeEmail,
    handleOnChangeName,
    email,
    name,
    handleSelectProtectedData,
    selectedProtectedData,
  } = props;

  const {
    fetchProtectedDataState: { data: protectedData },
  } = useAppSelector((state) => state.data);

  const { t } = useTranslation("enNS");

  const renderMessageInfo = () => {
    if (!protectedData?.length) {
      if (isForm) {
        return (
          <div data-testId="form-protect-message">
            {t("protected-data.protect-data-message")}
          </div>
        );
      } else {
        return (
          <div data-testId="no-data-message">
            {t("protected-data.no-protected-data")}
          </div>
        );
      }
    }

    return null;
  };

  return (
    <div className="protected-data">
      {renderMessageInfo()}
      {!isForm && protectedData && (
        <ProtectedDataList
          handleSelectProtectedData={handleSelectProtectedData}
          protectedData={protectedData}
          selectedProtectedData={selectedProtectedData}
        />
      )}
      {isForm && (
        <div
          style={{
            marginTop: "2Opx",
          }}
        >
          <ProtectedDataForm
            email={email}
            name={name}
            handleOnChangeEmail={handleOnChangeEmail}
            handleOnChangeName={handleOnChangeName}
          />
        </div>
      )}
    </div>
  );
};

export default ProtectedDataContent;
