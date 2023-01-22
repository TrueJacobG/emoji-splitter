function getEmoji(n) {
  let emojis = ["🥺", "❤️", "🥰", "🫣", "😅", "🤷🏻‍♀️", "👀", "😡", "👉🏼", "👈🏼"];
  if (n < 0 || n >= emojis.length) return emojis[0];
  return emojis[n];
}

export function formatWords(words, choice) {
  let emoji = getEmoji(parseInt(choice));
  let result = "";
  words
    .trim()
    .replace(/\s\s+/g, " ")
    .split(" ")
    .forEach((e) => {
      result += emoji + " " + e + " ";
    });
  result += emoji;

  return result;
}
