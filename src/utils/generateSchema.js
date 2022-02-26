const schemaPrefix =
  '<div name="FAQ" class="schema-faq-code" itemscope="" itemtype="https://schema.org/FAQPage">';
const schemaSuffix = "</div>";
const itemPrefix =
  '<div itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question" class="faq-question">';
const itemSuffix = "</div>";
const questionPrefix = '<h3 itemprop="name" class="faq-q">';
const questionSuffix = "</h3>";
const answerPrefix =
  '<div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><p itemprop="text" class="faq-a">';
const answerSuffix = "</div>";

const generateSchema = (value) => {
  return (
    schemaPrefix +
    value
      .map(
        (v) =>
          itemPrefix +
          questionPrefix +
          v.question +
          questionSuffix +
          answerPrefix +
          v.answer.toString("html").replace("<p>", "") +
          answerSuffix +
          itemSuffix
      )
      .join("") +
    schemaSuffix
  );
};

export { generateSchema };