import { Layout } from "antd";
import FaqCard from "./Components/FaqCard";

const faq = [...Array(10).keys()];

const App = () => {
  return (
    <Layout>
      <h1>FAQ Schema 生成器</h1>
      {faq.map((f, index) => (
        <FaqCard titlePlaceholder={`問題 ${index + 1}`} />
      ))}
    </Layout>
  );
};

export default App;
