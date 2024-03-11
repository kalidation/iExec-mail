import "./Card.css";

interface IProps {
  user: string;
  content: JSX.Element | JSX.Element[];
  footer?: JSX.Element | JSX.Element[];
}

const Card = (props: IProps) => {
  const { user, content, footer } = props;

  return (
    <div className="card">
      <div className="card-container">
        <h1
          style={{
            alignSelf: "start",
          }}
        >
          Grant Access
        </h1>
        <p className="card-user">
          <span>{user}</span> would like to get access to you, using iExec
          secured email service.
        </p>
        <div className="card-content">{content}</div>
        <div className="card-footer">{footer}</div>
      </div>
    </div>
  );
};

export default Card;
