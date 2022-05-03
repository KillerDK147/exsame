import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment, useEffect } from "react";
import Menu from "../comp/Menu";
import { useState } from "react";
import { getCurrentUser } from "../service/authService";
function MyApp({ Component, pageProps }) {
  const [bruger, setBruger] = useState({});
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    setBruger(getCurrentUser());
  }, []);
  return (
    <Fragment>
      <Menu bruger={bruger}>
        <Component {...pageProps} />
      </Menu>
    </Fragment>
  );
}

export default MyApp;
