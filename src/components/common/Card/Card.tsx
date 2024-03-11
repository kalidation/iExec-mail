import { useTranslation } from "react-i18next";
import "./Card.css";

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
        <h1
          style={{
            alignSelf: "start",
          }}
        >
          {t("card.grant-access")}
        </h1>
        <p className="card-user">
          <span>{user}</span>
          {" " + t("card.user-access")}
        </p>
        <div className="card-content">{content}</div>
        <div className="card-footer">{footer}</div>
      </div>
    </div>
  );
};

export default Card;
