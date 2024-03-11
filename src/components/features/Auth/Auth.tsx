import Card from "../../common/Card/Card";
import { AuthContent } from "./AuthContent";
import { Button } from "../../common/Button/Button";

interface IProps {
  user: string;
  isLoading: boolean;
  connectToMetaMask: () => void;
}

const Auth = (props: IProps) => {
  const { connectToMetaMask, isLoading, user } = props;

  return (
    <Card
      user={user}
      content={<AuthContent />}
      footer={
        <Button
          label={isLoading ? "Initializing..." : "Connect Wallet"}
          onClick={connectToMetaMask}
          isAnimateHover
          isActive={!isLoading}
        />
      }
    />
  );
};

export default Auth;
