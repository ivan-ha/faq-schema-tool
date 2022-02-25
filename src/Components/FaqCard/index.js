import "./index.css";
import { Card, Input } from "antd";
import RichTextEditor from "react-rte";

const toolbarConfig = {
  display: ["LINK_BUTTONS"],
};

const FaqCard = ({
  questionPlaceholder,
  answerPlaceholder,
  value,
  onQuestionChange,
  onAnswerChange,
}) => {
  const title = (
    <Input
      placeholder={questionPlaceholder}
      value={value.question}
      onChange={(e) => onQuestionChange(e.target.value)}
    />
  );

  return (
    <Card title={title} style={{ marginBottom: 12 }} size="small">
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
