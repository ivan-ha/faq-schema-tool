import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const AddButton = ({ onClick }) => (
  <Button
    type="primary"
    icon={<PlusOutlined />}
    onClick={onClick}
    block
    id="add-question-btn"
  >
    增加問題
  </Button>
);

export default AddButton;
