import { Button } from "antd";
import { SaveOutlined } from "@ant-design/icons";

const SaveButton = ({ onClick }) => (
  <Button type="primary" icon={<SaveOutlined />} onClick={onClick} block>
    儲存
  </Button>
);

export default SaveButton;
