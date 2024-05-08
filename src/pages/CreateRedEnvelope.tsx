import { Layout } from "antd";
import CreateRedEnvelope from "../components/create";
import { ConnectButton } from "@rainbow-me/rainbowkit";
const { Content } = Layout;

const contentStyle: React.CSSProperties = {
  //   textAlign: "center",
  minHeight: 120,
  lineHeight: "100vh",
  color: "#fff",
  padding: "20px",
  background: "#fff",
};

const CreateRedEnvelopePage = () => {
  return (
    <Content style={contentStyle}>
      <CreateRedEnvelope />
      {/* <ConnectButton /> */}
    </Content>
  );
};

export default CreateRedEnvelopePage;
