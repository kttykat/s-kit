import { AppPropsType } from "next/dist/shared/lib/utils";
import "../styles/globals.css";
import Toast from "../ui/Toast";

export default function MyApp({ Component, ...pageProps }: AppPropsType) {
  return (
    <>
      <div className="window">
        <Toast/>
        <Component />
      </div>
    </>
  );
}
