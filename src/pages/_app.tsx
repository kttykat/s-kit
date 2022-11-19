import { AppPropsType } from "next/dist/shared/lib/utils";
import { layoutHandler } from "../lib/handler";
import Toast from "../ui/Toast";
import "../styles/globals.css";

export default function MyApp({
  Component,
  router,
  ...pageProps
}: AppPropsType) {
  const layout = layoutHandler(router.pathname);
  const _ = () => (
    <>
      <Toast />
      <Component {...pageProps} />
    </>
  );
  
  return layout ? (
    <>
      <layout.Layout>{_()}</layout.Layout>
    </>
  ) : (
    <>
      <div className="window">{_()}</div>
    </>
  );
}
