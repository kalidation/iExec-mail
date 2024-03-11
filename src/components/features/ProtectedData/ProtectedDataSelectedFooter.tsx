import { Button } from "../../common/Button/Button";
import { useAppSelector } from "../../../redux/App/typedHooks";
import { addIcon } from "../../../assets/images";

interface IProps {
  handleForme: () => void;
  handleSelectProtectedData: (string?: string) => void;
  handleGrantAccess: () => void;
}

const AddNew = (): JSX.Element => (
  <>
    <img src={addIcon} height={16} width={16} />
    <span
      style={{
        textDecoration: "underline",
        color: "#FCD15A",
      }}
    >
      Add new
    </span>
  </>
);

const ProtectedDataSelectedFooter = (props: IProps) => {
  const { handleForme, handleSelectProtectedData, handleGrantAccess } = props;
  const { isLoading } = useAppSelector((state) => state.grantAccess);

  return (
    <div className="add-new-container">
      <div className="add-new" onClick={handleForme}>
        <AddNew />
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
          label={isLoading ? "Initializing..." : "Share Acccess"}
          style={{ backgroundColor: "#FCD15A" }}
          onClick={handleGrantAccess}
          isAnimateHover
          isActive={!isLoading}
        />
      </div>
    </div>
  );
};

export default ProtectedDataSelectedFooter;
