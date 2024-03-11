import { useTranslation } from "react-i18next";
import "./Banner.css";

interface IProps {
  address: string;
  isSelected: boolean;
  name?: string;
  onClick: (selectedData: string) => void;
}

const Banner = (props: IProps) => {
  const { name, onClick, address, isSelected } = props;
  const { t } = useTranslation("enNS");

  return (
    <div
      className={isSelected ? "banner-selected" : "banner-not-selected"}
      onClick={() => onClick(address)}
    >
      <p>{name}</p>
      <p>{t("banner.email-protected")}</p>
    </div>
  );
};

export default Banner;
