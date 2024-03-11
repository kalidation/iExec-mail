import { useAppSelector } from "../../../redux/App/typedHooks";

export const AuthContent = () => {
  const auth = useAppSelector((state) => state.auth);
  const app = useAppSelector((state) => state.app);

  const renderMessage = () => {
    if (auth.isError && auth.error) {
   
      return auth.error;
    }

    if (app.message.length > 0) {
      return app.message;
    }
   
    return "Connect your wallet to continue.";
  };

  return (
    <div>
      {renderMessage()}
    </div>
  );
};
