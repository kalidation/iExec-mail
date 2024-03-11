import { Button } from "../../common/Button/Button";
import { useAppSelector } from "../../../redux/App/typedHooks";
import ProtectedDataSelectedFooter from "./ProtectedDataSelectedFooter";

interface IProps {
  isForm: boolean;
  selectedProtectedData?: string;
  handleProtectData: () => void;
  handleForme: () => void;
  handleSelectProtectedData: (selectedData?: string) => void;
  handleGrantAccess: () => void;
}

const ProtectedDataFooter = (props: IProps) => {
  const {
    handleForme,
    handleProtectData,
    isForm,
    selectedProtectedData,
    handleSelectProtectedData,
    handleGrantAccess,
  } = props;

  const {
    fetchProtectedDataState: { data: protectedData },
    protectDataState,
  } = useAppSelector((state) => state.data);

  if (isForm) {
    return (
      <Button
        data-testid={"button-form"}
        label={
          protectDataState.isLoading ? "Initializing..." : "Protect my Address"
        }
        onClick={handleProtectData}
        isAnimateHover
        isActive={!protectDataState.isLoading}
      />
    );
  }

  if (protectedData) {
    if (selectedProtectedData) {
      return (
        <ProtectedDataSelectedFooter
          handleForme={handleForme}
          handleSelectProtectedData={handleSelectProtectedData}
          handleGrantAccess={handleGrantAccess}
        />
      );
    }
  } else {
    return (
      <Button
        label={"Protect my Address"}
        onClick={handleForme}
        isAnimateHover
        isActive
      />
    );
  }
};

export default ProtectedDataFooter;