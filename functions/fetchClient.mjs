import DigestClient from "digest-fetch"

const clientDigest = new DigestClient("admin", "admin", { algorithm: "MD5" })
const clientBasic = new DigestClient("admin", "admin", { basic: true })

export { clientBasic, clientDigest }
