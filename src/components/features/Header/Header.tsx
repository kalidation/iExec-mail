import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../redux/App/typedHooks";
import { Button } from "../../common/Button/Button";
import { useAuth } from "../../../redux/features/Auth/useAuth";
import { logo } from "../../../assets/images";
import HeaderRight from "./HeaderRight";
import "./Header.css";

const HeaderLogo = (): JSX.Element => (
  <>
    <img height={28} width={28} alt="logo" src={logo} />
    <h2>Secret Mail</h2>
  </>
);

const Header = () => {
  const { adress } = useAppSelector((state) => state.app);
  const { isLoading } = useAppSelector((state) => state.auth);

  const { connectToMetaMask } = useAuth();

  const { t } = useTranslation("enNS");

  return (
    <header className="header">
      <div className="logo">
        <HeaderLogo />
      </div>
      {adress ? (
        <HeaderRight address={adress} />
      ) : (
        <Button
          label={
            isLoading ? t("button.iniitalizing") : t("button.connect-wallet")
          }
          onClick={connectToMetaMask}
          isAnimateHover
          isActive
          style={{
            height: 38,
          }}
        />
      )}
    </header>
  );
};

export default Header;
