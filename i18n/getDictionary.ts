export async function getDictionary(locale: string) {
  const messages = await import(`../messages/${locale}.json`);
  return messages.default;
}
