import { Button, ConfigProvider, theme } from "antd";
import "./App.css";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { bsc, opBNB, bscTestnet } from "wagmi/chains";
import CreateRedEnvelopePage from "./pages/CreateRedEnvelope";
import RulePage from "./pages/rule";

function App() {
  const config = getDefaultConfig({
    appName: "My RainbowKit App",
    projectId: "YOUR_PROJECT_ID",
    chains: [bsc, opBNB, bscTestnet],
    ssr: true, // If your dApp uses server side rendering (SSR)
  });
  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <ConfigProvider
            theme={{
              algorithm: theme.darkAlgorithm,
              // token: {
              //   colorTextBase: "#fff",
              //   colorBgBase: "rgb(24, 27, 44)",
              //   colorPrimary: "#00b96b",
              //   // colorBgContainer: "linear-gradient(to right, rgb(97, 96, 243)",
              // },
            }}
          >
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<CreateRedEnvelopePage />} />
                <Route path="/rule" element={<RulePage />} />
                {/* <Route path="/bar" element={<Bar />} /> */}
              </Routes>
            </BrowserRouter>
            {/* <div className="App">
              <Button type="primary">Button</Button>
              <ConnectButton />;
            </div> */}
          </ConfigProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
