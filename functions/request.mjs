import { clientBasic, clientDigest } from "./fetchClient.mjs"

const request = async (type, url, ip, head, callBack) => {
  const typesClient = {
    basic: clientBasic,
    digest: clientDigest,
  }

  try {
    const request = await await typesClient[type].fetch(url, { ...head, timeout: 3000 })
    if (request.status === 200) {
      const data = await request.text()
      const resultCallback = await callBack(data.trim())
      return data
    }
  } catch (error) {
    if (error instanceof DOMException && error.name == "AbortError") {
      console.log(`${ip} for ${cameras[key].vendor} is not available`)
      return
    } else {
      console.log(`${ip}: ${error}`)
      return
    }
  }
}

export default request
