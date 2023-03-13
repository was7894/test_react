import React from "react";
import { Form, Input, Button, ConfigProvider, Upload, Divider, InputNumber } from "antd";

const onFinish = function (val) {
  console.log(val);
  return;
};

const UploadPage = () => {
  return (
    <div className="App">
      <ConfigProvider theme={{ token: { colorPrimary: "#ffc2c2" } }}>
        {/* onfinish -> 폼에작성된 value들을전송 */}
        <Form name="upload" style={{ maxWidth: 600 }} onFinish={onFinish}>
          <Form.Item label="Username" name="userName" rules={[{ required: true, message: "이름을 입력하세요" }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Password" name="passWord" rules={[{ required: true, message: "비밀번호를 입력하세요" }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item
          /*  wrapperCol={{
            offset: 8,
            span: 16,
          }} */
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </div>
  );
};
export default UploadPage;
