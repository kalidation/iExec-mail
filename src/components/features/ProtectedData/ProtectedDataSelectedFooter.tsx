import { Button } from "../../common/Button/Button";
import { useAppSelector } from "../../../redux/App/typedHooks";
import { addIcon } from "../../../assets/images";
import { useTranslation } from "react-i18next";
import { COLORS } from "../../../utils/constants";

interface IProps {
  handleForme: () => void;
  handleSelectProtectedData: (string?: string) => void;
  handleGrantAccess: () => void;
}

const AddNew = ({ title }: { title: string }): JSX.Element => (
  <>
    <img src={addIcon} height={16} width={16} />
    <span
      style={{
        textDecoration: "underline",
        color: COLORS.yellow,
      }}
    >
      {title}
    </span>
  </>
);

const ProtectedDataSelectedFooter = (props: IProps) => {
  const { handleForme, handleSelectProtectedData, handleGrantAccess } = props;
  const { isLoading } = useAppSelector((state) => state.grantAccess);
  const { t } = useTranslation("enNS");

  return (
    <div className="add-new-container">
      <div className="add-new" onClick={handleForme}>
        <AddNew title={t("protected-data.add-new")} />
      </div>
      <div className="add-new-button-group">
        <Button
          label="Cancel"
          onClick={() => handleSelectProtectedData(undefined)}
          style={{
            backgroundColor: "transparent",
            border: "1px solid white",
          }}
          isActive
        />
        <Button
          label={
            isLoading ? t("button.iniitalizing") : t("button.share-access")
          }
          style={{ backgroundColor: COLORS.yellow }}
          onClick={handleGrantAccess}
          isAnimateHover
          isActive={!isLoading}
        />
      </div>
    </div>
  );
};

export default ProtectedDataSelectedFooter;
