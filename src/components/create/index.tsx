import {
  Form,
  InputNumber,
  Select,
  Typography,
  Image,
  Space,
  Flex,
  Input,
  Button,
  InputNumberProps,
} from "antd";
import { useState } from "react";
const { Option } = Select;
const { Title, Text } = Typography;

const boxStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: 6,
  border: "1px solid #40a9ff",
};

const CreateRedEnvelope = () => {
  const [amount, setAmount] = useState<string | number | null>("");
  const [form] = Form.useForm();
  const suffixSelector = (
    <Form.Item name="symbol" noStyle>
      <Select style={{ width: 200, textAlign: "right" }} defaultValue="USTD">
        <Option value="USTD">
          <Space>
            <Image
              width={20}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            USTD
          </Space>
        </Option>
        <Option value="PEG">
          <Space>
            <Image
              width={20}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            PEG
          </Space>
        </Option>
      </Select>
    </Form.Item>
  );
  const onNetworkChange = (value: string) => {
    switch (value) {
      case "1":
        form.setFieldsValue({ chainId: "1" });
        break;
      case "56":
        form.setFieldsValue({ chainId: "56" });
        break;
      case "137":
        form.setFieldsValue({ chainId: "137" });
        break;
      case "204":
        form.setFieldsValue({ chainId: "204" });
        break;
      default:
    }
  };
  const onChange: InputNumberProps["onChange"] = (value) => {
    console.log("changed", value);
    setAmount(value);
  };
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <>
      <Title>创建红包</Title>
      <Form
        form={form}
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        initialValues={{ chainId: "56", symbol: "USTD" }}
      >
        {/* <Form.Item rules={[{ required: true }]}>
          <Flex gap={8} align="center" style={boxStyle}>
            <Text style={{ width: 120, paddingLeft: 15 }}>网络</Text>
            <Select
              style={{ width: "100%", textAlign: "right" }}
              defaultValue="BNB"
              variant="borderless"
            >
              <Option value="BNB">
                <Space>
                  <Image
                    width={20}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                  BNB Chain
                </Space>
              </Option>
              <Option value="ETH">
                <Space>
                  <Image
                    width={20}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                  Ethereum
                </Space>
              </Option>
            </Select>
          </Flex>
        </Form.Item> */}

        <Form.Item name="chainId" rules={[{ required: true }]}>
          <Select
            placeholder="Select a option and change input text above"
            onChange={onNetworkChange}
            allowClear
          >
            <Option value="56">BNB Chain</Option>
            <Option value="1">Ethereum</Option>
            <Option value="137 ">Polygon</Option>
            <Option value="204">opBNB</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="count"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <InputNumber
            size="large"
            placeholder="large size"
            min={1}
            max={65535}
            style={{ width: "100%" }}
            prefix={<div>红包数量</div>}
          />
        </Form.Item>
        <Form.Item rules={[{ required: true }]} name="amount">
          <InputNumber
            size="large"
            placeholder="large size"
            prefix={<div>总金额</div>}
            style={{ width: "100%" }}
            addonAfter={suffixSelector}
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item>
          <Flex justify="space-between" align="center">
            <Button type="text" style={{ padding: 0 }}>
              高级选项
            </Button>
            <Text>BaoBao余额: 7233.43886282</Text>
          </Flex>
        </Form.Item>
        <Form.Item>
          <Text>{Number(amount)}</Text>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block size="large">
            发送
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateRedEnvelope;
