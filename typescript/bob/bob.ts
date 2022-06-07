const hearsBoring = (speech: string): boolean => {
  return speech.length === 0 || /^\s*$/.test(speech);
};
const hearsFreaky = (speech: string): boolean => {
  return /[A-Z]/.test(speech) && speech === speech.toUpperCase();
};
const hearsInquisitive = (speech: string): boolean => {
  return speech.endsWith("?");
};

export function hey(message: string): string {
  if (hearsBoring(message)) {
    return "Fine. Be that way!";
  }
  if (hearsFreaky(message) && hearsInquisitive(message)) {
    return "Calm down, I know what I'm doing!";
  }
  if (hearsFreaky(message)) {
    return "Whoa, chill out!";
  }
  if (hearsInquisitive(message.trimRight())) {
    return "Sure.";
  }
  return "Whatever.";
}
