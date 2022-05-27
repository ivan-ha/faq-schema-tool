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
  '<div name="FAQ" class="schema-faq-code" itemscope="" itemtype="https://schema.org/FAQPage"><div itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question" class="faq-question"><h3 itemprop="name" class="faq-q" style="font-weight:bold;">問：虎乳靈芝有甚麼功效？</h3><div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><p itemprop="text" class="faq-a" style="margin-bottom:16px;">答：潤肺止咳，有指可紓緩濕疹及其他皮膚問題。<a href="https://www.hk01.com/a/708678" style="color:#0033e8">按此瀏覽潤肺止咳湯水食譜</a></p></div></div><div itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question" class="faq-question"><h3 itemprop="name" class="faq-q" style="font-weight:bold;">問：非洲海底椰有甚麼功效？</h3><div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><p itemprop="text" class="faq-a" style="margin-bottom:16px;">答：潤肺止咳，口感粗糙似木片。</p></div></div></div>';

const outputFixtureWhite =
  '<div name="FAQ" class="schema-faq-code" itemscope="" itemtype="https://schema.org/FAQPage" style="background-color:white;"><div itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question" class="faq-question"><h3 itemprop="name" class="faq-q" style="font-weight:bold;">問：虎乳靈芝有甚麼功效？</h3><div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><p itemprop="text" class="faq-a" style="margin-bottom:16px;">答：潤肺止咳，有指可紓緩濕疹及其他皮膚問題。<a href="https://www.hk01.com/a/708678" style="color:#0033e8">按此瀏覽潤肺止咳湯水食譜</a></p></div></div><div itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question" class="faq-question"><h3 itemprop="name" class="faq-q" style="font-weight:bold;">問：非洲海底椰有甚麼功效？</h3><div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><p itemprop="text" class="faq-a" style="margin-bottom:16px;">答：潤肺止咳，口感粗糙似木片。</p></div></div></div>';

describe("generateSchema", () => {
  it("generate FAQ schema correctly", () => {
    expect(generateSchema({ value: inputFixture })).toStrictEqual(
      outputFixture
    );
    expect(
      generateSchema({ value: inputFixture, isWhiteBackground: false })
    ).toStrictEqual(outputFixture);
  });

  it("generate FAQ schema with white background correctly", () => {
    expect(
      generateSchema({ value: inputFixture, isWhiteBackground: true })
    ).toStrictEqual(outputFixtureWhite);
  });

  it("ignore generate empty question", () => {
    expect(
      generateSchema({
        value: [
          ...inputFixture,
          {
            question: "",
            answer: RichTextEditor.createValueFromString(
              "<p>答：潤肺止咳，口感粗糙似木片。</p>",
              "html"
            ),
          },
        ],
      })
    ).toStrictEqual(outputFixture);
  });

  it("ignore generate empty answer", () => {
    expect(
      generateSchema({
        value: [
          ...inputFixture,
          {
            question: "問：虎乳靈芝有甚麼功效？",
            answer: RichTextEditor.createValueFromString("<p><br></p>", "html"),
          },
        ],
      })
    ).toStrictEqual(outputFixture);
  });
});
