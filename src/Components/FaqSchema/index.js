import { Card, Button } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import { useCopyToClipboard } from "react-use";
import { generateSchema } from "../../utils/generateSchema";

const FaqSchema = ({ value }) => {
  const [, copyToClipboard] = useCopyToClipboard();

  const schema = generateSchema(value);

  const handleCopyClick = () => {
    copyToClipboard(String(schema));
  };

  return (
    <>
      <Card style={{ marginBottom: 12 }} size="small">
        <code>{schema}</code>
      </Card>

      <Button
        type="primary"
        icon={<CopyOutlined />}
        onClick={handleCopyClick}
        block
      >
        複製源碼
      </Button>
    </>
  );
};

export default FaqSchema;
