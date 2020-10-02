import { ToastProvider } from "react-toast-notifications";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../styles/theme.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider
      autoDismiss={true}
      placement="bottom-right"
      autoDismissTimeout={5000}
    >
      <Component {...pageProps} />
    </ToastProvider>
  );
}

export default MyApp;
