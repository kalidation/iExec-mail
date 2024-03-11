import Card from "../../common/Card/Card";
import ProtectedDataContent from "./ProtectedDataContent";
import ProtectedDataFooter from "./ProtectedDataFooter";

interface IProps {
  user: string;
  email: string;
  name: string;
  isForm: boolean;
  selectedProtectedData?: string;
  handleOnChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnChangeName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectProtectedData: (selectedData?: string) => void;
  handleProtectData: () => void;
  handleForme: () => void;
  handleGrantAccess: () => void;
}

export const ProtectedData = (props: IProps) => {
  const {
    user,
    email,
    handleOnChangeEmail,
    handleOnChangeName,
    isForm,
    name,
    handleForme,
    handleProtectData,
    handleSelectProtectedData,
    handleGrantAccess,
    selectedProtectedData,
  } = props;

  return (
    <Card
      user={user}
      content={
        <ProtectedDataContent
          email={email}
          name={name}
          isForm={isForm}
          selectedProtectedData={selectedProtectedData}
          handleOnChangeEmail={handleOnChangeEmail}
          handleOnChangeName={handleOnChangeName}
          handleSelectProtectedData={handleSelectProtectedData}
        />
      }
      footer={
        <ProtectedDataFooter
          isForm={isForm}
          selectedProtectedData={selectedProtectedData}
          handleForme={handleForme}
          handleProtectData={handleProtectData}
          handleSelectProtectedData={handleSelectProtectedData}
          handleGrantAccess={handleGrantAccess}
        />
      }
    />
  );
};
