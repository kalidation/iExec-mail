import { useTranslation } from "react-i18next";
import "./Card.css";
import Typography from "../Typography/Typography";

interface IProps {
  user: string;
  content: JSX.Element | JSX.Element[];
  footer?: JSX.Element | JSX.Element[];
}

const Card = (props: IProps) => {
  const { user, content, footer } = props;
  const { t } = useTranslation("enNS");

  return (
    <div className="card">
      <div className="card-container">
        <Typography
          variant="h3"
          style={{
            alignSelf: "start",
          }}
        >
          {t("card.grant-access")}
        </Typography>
        <Typography variant="body2" className="card-user">
          <span>{user}</span>
          {" " + t("card.user-access")}
        </Typography>
        <div className="card-content">{content}</div>
        <div className="card-footer">{footer}</div>
      </div>
    </div>
  );
};

export default Card;
