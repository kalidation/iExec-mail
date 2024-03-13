import { useTranslation } from "react-i18next";
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
    handleSelectProtectedData,
    handleGrantAccess,
  } = props;

  const { t } = useTranslation("enNS");

  const {
    fetchProtectedDataState: { data: protectedData },
    protectDataState,
  } = useAppSelector((state) => state.data);

  if (isForm) {
    return (
      <Button
        data-testid={"button-form"}
        label={
          protectDataState.isLoading
            ? t("button.iniitalizing")
            : t("button.protected-address")
        }
        onClick={handleProtectData}
        isAnimateHover
        isActive={!protectDataState.isLoading}
      />
    );
  }

  if (protectedData?.length) {
      return (
        <ProtectedDataSelectedFooter
          handleForme={handleForme}
          handleSelectProtectedData={handleSelectProtectedData}
          handleGrantAccess={handleGrantAccess}
        />
      );
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
