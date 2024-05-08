import { Layout } from "antd";

const { Content } = Layout;

const contentStyle: React.CSSProperties = {
  //   textAlign: "center",
  minHeight: "100vh",
  color: "#fff",
  padding: "20px",
  background: "rgb(24, 27, 44)",
};

const CustomContent = ({ children }: { children: React.ReactNode }) => {
  return <Content style={contentStyle}>{children}</Content>;
};

export default CustomContent;
