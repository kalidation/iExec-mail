import { ProtectedData } from "@iexec/dataprotector";
import Banner from "../../common/Banner/Banner";
import "./ProtectedData.css";

interface IProps {
  protectedData: ProtectedData[];
  selectedProtectedData?: string;
  handleSelectProtectedData: (selectedData: string) => void;
}

const ProtectedDataList = (props: IProps) => {
  const { protectedData, handleSelectProtectedData, selectedProtectedData } =
    props;

  return (
    <div className="list-data" data-testId="list-data">
      {protectedData.map((data) => {
        return (
          <Banner
            onClick={handleSelectProtectedData}
            key={data.creationTimestamp}
            name={data.name}
            address={data.address}
            isSelected={data.address === selectedProtectedData}
          />
        );
      })}
    </div>
  );
};

export default ProtectedDataList;
