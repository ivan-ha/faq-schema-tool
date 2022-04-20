import { Card, Button } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import { useCopyToClipboard } from "react-use";
import { generateSchema } from "../../utils/generateSchema";
import { useState } from "react";

const FaqSchema = ({ value, isWhiteBackground }) => {
  const [copied, setCopied] = useState(false);
  const [, copyToClipboard] = useCopyToClipboard();

  const schema = generateSchema({ value, isWhiteBackground });

  const handleCopyClick = () => {
    copyToClipboard(String(schema));
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <>
      <Card
        style={{ marginBottom: 12, height: 500, overflow: "scroll" }}
        size="small"
      >
        <code>{schema}</code>
      </Card>

      <Button
        type="primary"
        icon={<CopyOutlined />}
        onClick={handleCopyClick}
        block
        loading={copied}
        id="copy-btn"
      >
        {copied ? "複製成功" : "複製源碼"}
      </Button>
    </>
  );
};

export default FaqSchema;
