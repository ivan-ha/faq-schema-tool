const schemaPrefix =
  '<div name="FAQ" class="schema-faq-code" itemscope="" itemtype="https://schema.org/FAQPage">';
const schemaPrefixWhite =
  '<div name="FAQ" class="schema-faq-code" itemscope="" itemtype="https://schema.org/FAQPage" style="background-color:white;">';
const schemaSuffix = "</div>";
const itemPrefix =
  '<div itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question" class="faq-question">';
const itemSuffix = "</div>";
const questionPrefix = '<h3 itemprop="name" class="faq-q" style="font-weight:bold;">';
const questionSuffix = "</h3>";
const answerPrefix =
  '<div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><p itemprop="text" class="faq-a" style="margin-bottom:16px;">';
const answerSuffix = "</div>";

const generateSchema = ({ value, isWhiteBackground }) => {
  return (
    (isWhiteBackground ? schemaPrefixWhite : schemaPrefix) +
    value
      .map(
        (v) =>
          itemPrefix +
          questionPrefix +
          v.question +
          questionSuffix +
          answerPrefix +
          v.answer.toString("html").replace("<p>", "").replace("\">", "\" style=\"color:#0033e8\">") +
          answerSuffix +
          itemSuffix
      )
      .join("") +
    schemaSuffix
  );
};

export { generateSchema };
