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

  const renderMessageInfo = () => {
    if (!protectedData?.length) {
      if (isForm) {
        return (
          <div data-testId="form-protect-message">
            Protect your address with iExec. Your email address stays secret,
            only your name will be shared with the organization.
          </div>
        );
      } else {
        return (
          <div data-testId="no-data-message">
            You have no protected address yet
          </div>
        );
      }
    }

    return null
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
