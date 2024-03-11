import { idenIcon, logoutIcon } from "../../../assets/images";
import { truncateAddress } from "../../../utils/transformes";

interface IProps {
  address: string;
}

const HeaderRight = ({ address }: IProps) => {
  return (
    <div className="address-container">
      <div className="address">
        <p>{truncateAddress(address)}</p>
        <img height={24} width={24} alt="iden-icon" src={idenIcon} />
      </div>
      <img
        alt="logout-icon"
        src={logoutIcon}
        onClick={() => {
          /** logout */
          return;
        }}
      />
    </div>
  );
};

export default HeaderRight;
