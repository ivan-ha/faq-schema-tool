import { Button } from "antd";
import { SaveOutlined } from "@ant-design/icons";
import { useState } from "react";

const SaveButton = ({ onClick }) => {
  const [saved, setSaved] = useState(false);

  const handleClick = () => {
    setSaved(true);
    onClick();
    setTimeout(() => setSaved(false), 1000);
  };

  return (
    <Button
      type="primary"
      icon={<SaveOutlined />}
      onClick={handleClick}
      block
      loading={saved}
    >
      {saved ? "儲存成功" : "儲存"}
    </Button>
  );
};

export default SaveButton;
