import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ROUTES_URL, USER_ID_MOCK } from "./routes";

const Home = () => {
  const { t } = useTranslation("enNS");

  return (
    <div className="home-container">
      <Link
        to={{
          pathname: ROUTES_URL.AUTH_ROUTE,
          search: `?user=${USER_ID_MOCK}`,
        }}
      >
        {t("home.authorize")}
      </Link>
    </div>
  );
};

export default Home;
