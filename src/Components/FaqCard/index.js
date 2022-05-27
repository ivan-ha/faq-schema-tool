import "./index.css";
import { Card, Input } from "antd";
import RichTextEditor from "react-rte";
import { DeleteOutlined } from "@ant-design/icons";

const toolbarConfig = {
  display: ["LINK_BUTTONS"],
};

const FaqCard = ({
  questionPlaceholder,
  answerPlaceholder,
  value,
  onQuestionChange,
  onAnswerChange,
  onDeleteClick,
}) => {
  const title = (
    <Input
      placeholder={questionPlaceholder}
      value={value.question}
      onChange={(e) => onQuestionChange(e.target.value)}
    />
  );

  return (
    <Card
      title={title}
      style={{ marginBottom: 12 }}
      size="small"
      extra={
        <DeleteOutlined
          key="delete"
          onClick={onDeleteClick}
          style={{ marginLeft: 10 }}
        />
      }
      hoverable
    >
      <RichTextEditor
        value={value.answer}
        onChange={onAnswerChange}
        toolbarConfig={toolbarConfig}
        placeholder={answerPlaceholder}
        className="text-editor"
      />
    </Card>
  );
};

export default FaqCard;
