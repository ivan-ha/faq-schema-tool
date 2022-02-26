import { Button, Popconfirm } from "antd";
import { ClearOutlined } from "@ant-design/icons";
import { useState } from "react";

const ResetButton = ({ onResetConfirm }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Popconfirm
      title="你確定要清除所有嗎？"
      visible={visible}
      okText="是"
      cancelText="否"
      onConfirm={() => {
        setVisible(false);
        onResetConfirm();
      }}
      onCancel={() => setVisible(false)}
    >
      <Button
        type="primary"
        icon={<ClearOutlined />}
        onClick={() => setVisible(true)}
        block
        danger
      >
        清除所有
      </Button>
    </Popconfirm>
  );
};

export default ResetButton;
