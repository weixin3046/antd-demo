import { Space, Typography } from "antd";

const { Title, Text, Paragraph } = Typography;
const contentStyle: React.CSSProperties = {
  //   textAlign: "center",
  minHeight: "100vh",
  color: "#fff",
  padding: "20px",
  background: "rgb(24, 27, 44)",
};

const RulePage = () => {
  return (
    <Typography style={contentStyle}>
      <Title level={3} style={{ textAlign: "center", color: "#fff" }}>
        红包规则
      </Title>
      <Space direction="vertical">
        <Text strong style={{ fontSize: 18, color: "rgb(161, 165, 170)" }}>
          1.任何人都可以创建红包，设定总金额、红包数量后即可发送。
        </Text>
        <Text strong style={{ fontSize: 18, color: "rgb(161, 165, 170)" }}>
          2.每个红包中的金额是随机的，所有领取者领到的金额可能会有不同。
        </Text>
        <Text strong style={{ fontSize: 18, color: "rgb(161, 165, 170)" }}>
          3.红包发出后，所有获得红包连接的用户都可以领取。
        </Text>
        <Text strong style={{ fontSize: 18, color: "rgb(161, 165, 170)" }}>
          4.红包创建后24小时内未领完，红包将会过期，剩余金额将会退还给发送者。
        </Text>
      </Space>
    </Typography>
  );
};

export default RulePage;
