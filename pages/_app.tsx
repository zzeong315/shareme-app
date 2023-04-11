import { SWRConfig } from "swr";
import "../global.css";

export default function App({ Component, pageProps }: any) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(url).then((response) => response.json())
      }}
    >
      <div className="w-full max-w-xl mx-auto font-poppins">
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  );
}
