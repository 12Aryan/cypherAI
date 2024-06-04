export const formatResponse = (response: string): string => {
  let formatted = response.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
  formatted = formatted.replace(/\*(.*?)\*/g, "<br>$1");
  formatted = formatted.replace(
    /\[([^[]+)\]\(([^)]+)\)/g,
    '<a  href="$2">$1</a>'
  );
  formatted = formatted.replace(/^\* (.*)$/gm, "<li>$1</li>");
  formatted = "<ul>" + formatted + "</ul>";
  formatted = formatted.replace(/^## (.*?)$/gm, "<h2>$1</h2>");

  return formatted;
};


