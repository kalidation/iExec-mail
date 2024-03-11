import { useEffect } from "react";
import "./Banner.css";

interface IProps {
  address: string;
  isSelected: boolean;
  name?: string;
  onClick: (selectedData: string) => void;
}

const Banner = (props: IProps) => {
  const { name, onClick, address, isSelected } = props;

  useEffect(() => {
    console.log(isSelected);
  }, [isSelected]);

  return (
    <div
      className={isSelected ? "banner-selected" : "banner-not-selected"}
      onClick={() => onClick(address)}
    >
      <p>{name}</p>
      <p>**email protected**</p>
    </div>
  );
};

export default Banner;
