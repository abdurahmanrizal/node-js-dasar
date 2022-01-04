import dns from "dns/promises"

const address = await dns.lookup('www.ruangdengar.id')

console.info(address.address)