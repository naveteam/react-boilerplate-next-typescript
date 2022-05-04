export const limitString = (text: string, limit: number) => {
  if (!limit || !text || text.length <= limit) {
    return text
  }

  return `${text.slice(0, limit).trim()}...`
}
