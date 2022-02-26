import { Affix, Col, Row } from "antd";
import FaqCard from "./Components/FaqCard";
import AddButton from "./Components/AddButton";
import ResetButton from "./Components/ResetButton";
import SaveButton from "./Components/SaveButton";
import FaqSchema from "./Components/FaqSchema";
import { useState } from "react";
import RichTextEditor from "react-rte";
import * as R from "ramda";
import { useLocalStorage } from "react-use";

const initialFaqValue = {
  question: "",
  answer: RichTextEditor.createEmptyValue(),
};

const faqToString = (faq) =>
  faq.map((f) => ({ ...f, answer: f.answer.toString("html") }));

const App = () => {
  const [storage, setStorage] = useLocalStorage(
    "faq-schema",
    faqToString([initialFaqValue])
  );
  const [faq, setFaq] = useState(
    storage.map((v) => ({
      ...v,
      answer: RichTextEditor.createValueFromString(v.answer, "html"),
    }))
  );

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

  const handleResetConfirm = () => {
    setFaq([initialFaqValue]);
    setStorage(faqToString([initialFaqValue]));
  };

  const handleSaveButtonClick = () => {
    setStorage(faqToString(faq));
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <h1>FAQ Schema 生成器</h1>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          {faq.map((faqItem, index) => (
            <FaqCard
              questionPlaceholder={`問題 ${index + 1}`}
              answerPlaceholder={`答案 ${index + 1}`}
              value={faqItem}
              onQuestionChange={(question) =>
                handleQuestionChange(question, index)
              }
              onAnswerChange={(answer) => handleAnswerChange(answer, index)}
              key={index}
            />
          ))}
          <Affix offsetBottom={10}>
            <Row gutter={[8, 8]}>
              <Col span={24}>
                <AddButton onClick={handleAddButtonClick} />
              </Col>
              <Col span={12}>
                <SaveButton onClick={handleSaveButtonClick} />
              </Col>
              <Col span={12}>
                <ResetButton onResetConfirm={handleResetConfirm} />
              </Col>
            </Row>
          </Affix>
        </Col>
        <Col span={12}>
          <Affix offsetTop={54}>
            <h2>Schema 源碼</h2>
            <FaqSchema value={faq} />
          </Affix>
        </Col>
      </Row>
    </>
  );
};

export default App;
