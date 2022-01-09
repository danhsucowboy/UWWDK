export const displayAddress = (address: string, prefixDigit: number = 6, postfixDigit: number = 4) => {
  return `${address.slice(0, prefixDigit)}...${address.slice(-postfixDigit)}`
}
