import request from "./request.mjs"
import writeData from "./writeFile.mjs"

const axis = async (ip) => {
  console.log("Функция axis готова", ip)

  const data = ""
  const method = "GET"
  const head = {
    method,
  }
  const urlAction = `http://${ip}/axis-cgi/param.cgi?action=update&Time.NTP.Server=10.255.3.33&Time.SyncSource=NTP&Time.POSIXTimeZone=RusS-03:00:00nde`
  const urlInfo = `http://${ip}/axis-cgi/param.cgi?action=list&group=Time.NTP.Server`

  const write = (text) => {
    writeData(`${ip};${text}`)
  }
  const update = await request("digest", urlAction, ip, head, write)
  const get = await request("digest", urlInfo, ip, head, write)
  if (get) {
    return get
  }
}

export default axis
