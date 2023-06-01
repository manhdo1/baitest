import { Button, Form, Input } from "antd";
import { Modal } from "antd";
import { useState } from "react";
import { Radio } from "antd";
import { notification } from "antd";
import React, { useMemo } from "react";
const Context = React.createContext({
  name: "Thông",
});
const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
    if (values.username === "admin" && values.password === "admin") {
      setIsModalOpen(true);
    } else {
      openNotification("topLeft");
    }
  };

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.error({
      message: `Lỗi đăng nhập`,
      description: "Thông tin đăng nhập không chính xác",
      placement,
    });
  };
  const contextValue = useMemo(
    () => ({
      name: "Ant Design",
    }),
    []
  );

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
      <Modal
        title="Chọn chức năng"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Radio.Group onChange={onChange} value={value}>
          <div>
            <Radio value={1}>Quản trị </Radio>
          </div>
          <Radio value={2}>Vận hành</Radio>
        </Radio.Group>
      </Modal>
      <Context.Provider value={contextValue}>
        {contextHolder}
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "tài khoản là bắt buộc!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Mật khẩu là bắt buộc!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <a>Quên mật khẩu</a>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </Context.Provider>
    </>
  );
};

export default Login;
