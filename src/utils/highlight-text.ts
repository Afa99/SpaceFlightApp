export const highlightText = (
  tagName = "span",
  textSource: string,
  keyword: string,
  className: string
) => {
  const splited = textSource.split(keyword);
  const formated = splited.map((text, index) =>
    index !== splited.length - 1
      ? `${text}<${tagName} className=${className}>${keyword}</${tagName}>`
      : text
  );
  const result = formated.join("");
  return result;
};
