import { Button, ConfigProvider } from "antd";
import "./App.css";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  ConnectButton,
  getDefaultConfig,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { bsc, opBNB, bscTestnet } from "wagmi/chains";
import CreateRedEnvelopePage from "./pages/CreateRedEnvelope";

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
          <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<CreateRedEnvelopePage />} />
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
