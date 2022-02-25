import { Card, Input } from "antd";
import RichTextEditor from "react-rte";
import { useState } from "react";

const toolbarConfig = {
  display: ["LINK_BUTTONS"],
};

const FaqCard = ({ titlePlaceholder }) => {
  const title = <Input placeholder={titlePlaceholder} />;
  const [value, setValue] = useState(RichTextEditor.createEmptyValue());

  const handleChange = (v) => {
    console.log(v.toString("html"));
    setValue(v);
  };

  return (
    <Card title={title} style={{ marginBottom: 12 }}>
      <RichTextEditor
        value={value}
        onChange={handleChange}
        toolbarConfig={toolbarConfig}
      />
    </Card>
  );
};

export default FaqCard;
