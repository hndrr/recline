/**
 * Utility functions for sanitizing user input
 */

/**
 * Removes control characters and non-printable characters from text
 * while preserving newlines.
 */
export function sanitizeUserInput(text: string): string {
  return text
    .replace(/\r\n/g, "\n") // Normalize line endings
    .split("")
    .filter((char) => {
      const code = char.charCodeAt(0);
      return code === 0x0A // preserve newline
        || (code > 0x1F && code !== 0x7F); // remove control chars
    })
    .join("")
    .trim();
}

/**
 * Removes any shell prompt artifacts from terminal output
 */
export function sanitizeTerminalOutput(text: string): string {
  return text
    .replace(/\r/g, "") // Remove standalone CR
    .replace(/[%$#>]\s*$/, "") // Remove shell prompts
    .split("")
    .filter((char) => {
      const code = char.charCodeAt(0);
      return code === 0x0A // preserve newline
        || (code > 0x1F && code !== 0x7F); // remove control chars
    })
    .join("")
    .trim();
}
