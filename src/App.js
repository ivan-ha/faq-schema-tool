import { Col, Row } from "antd";
import FaqCard from "./Components/FaqCard";
import AddButton from "./Components/AddButton";
import { useState } from "react";
import RichTextEditor from "react-rte";
import * as R from "ramda";

const initialFaqValue = {
  question: "",
  answer: RichTextEditor.createEmptyValue(),
};

const App = () => {
  const [faq, setFaq] = useState([initialFaqValue]);

  const handleQuestionChange = (question, index) => {
    setFaq((prevFaq) =>
      R.adjust(index, (item) => ({ ...item, question }), prevFaq)
    );
  };

  const handleAnswerChange = (answer, index) => {
    setFaq((prevFaq) =>
      R.adjust(index, (item) => ({ ...item, answer }), prevFaq)
    );
  };

  const handleAddButtonClick = () => {
    setFaq((prevFaq) => [...prevFaq, initialFaqValue]);
  };

  console.log(faq);

  return (
    <>
      <Row>
        <Col span={24}>
          <h1>FAQ Schema 生成器</h1>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          {faq.map((f, index) => (
            <FaqCard
              questionPlaceholder={`問題 ${index + 1}`}
              answerPlaceholder={`答案 ${index + 1}`}
              value={f}
              onQuestionChange={(question) =>
                handleQuestionChange(question, index)
              }
              onAnswerChange={(answer) => handleAnswerChange(answer, index)}
            />
          ))}
          <AddButton onClick={handleAddButtonClick} />
        </Col>
        <Col span={12}>
          <div>hihi</div>
        </Col>
      </Row>
    </>
  );
};

export default App;
