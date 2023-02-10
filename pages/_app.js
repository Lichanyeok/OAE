import "../styles/globals.css";
import AppLayout from "./components/layout/AppLayout";
import "../public/static/fonts/style.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}

export default MyApp;
