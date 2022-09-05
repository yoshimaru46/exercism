export function commands(num: number): string[] {
  const commands = [];
  if (num & 1) commands.push("wink");
  if (num & 2) commands.push("double blink");
  if (num & 4) commands.push("close your eyes");
  if (num & 8) commands.push("jump");
  if (num & 16) commands.reverse();
  return commands;
}
