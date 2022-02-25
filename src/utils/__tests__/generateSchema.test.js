import { generateSchema } from "../generateSchema";
import RichTextEditor from "react-rte";

const inputFixture = [
  {
    question: "問：虎乳靈芝有甚麼功效？",
    answer: RichTextEditor.createValueFromString(
      '<p>答：潤肺止咳，有指可紓緩濕疹及其他皮膚問題。<a href="https://www.hk01.com/a/708678">按此瀏覽潤肺止咳湯水食譜</a></p>',
      "html"
    ),
  },
  {
    question: "問：非洲海底椰有甚麼功效？",
    answer: RichTextEditor.createValueFromString(
      "<p>答：潤肺止咳，口感粗糙似木片。</p>",
      "html"
    ),
  },
];

const outputFixture =
  '<div name="FAQ" class="schema-faq-code" itemscope="" itemtype="https://schema.org/FAQPage"><div itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question" class="faq-question"><h3 itemprop="name" class="faq-q">問：虎乳靈芝有甚麼功效？</h3><div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><p itemprop="text" class="faq-a">答：潤肺止咳，有指可紓緩濕疹及其他皮膚問題。<a href="https://www.hk01.com/a/708678">按此瀏覽潤肺止咳湯水食譜</a></p></div></div><div itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question" class="faq-question"><h3 itemprop="name" class="faq-q">問：非洲海底椰有甚麼功效？</h3><div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><p itemprop="text" class="faq-a">答：潤肺止咳，口感粗糙似木片。</p></div></div></div>';

describe("generateSchema", () => {
  it("generate FAQ schema correct", () => {
    expect(generateSchema(inputFixture)).toStrictEqual(outputFixture);
  });
});
