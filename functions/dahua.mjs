import request from "./request.mjs"
import writeData from "./writeFile.mjs"

const dahua = async (ip) => {
  console.log("Функция Dahua готова", ip)

  const data = ""
  const method = "GET"
  const head = {
    method,
  }
  const urlAction = `http://${ip}/cgi-bin/configManager.cgi?action=setConfig&NTP.Address=10.255.3.33&NTP.TimeZone=3&NTP.Enable=true`
  const urlInfo = `http://${ip}/cgi-bin/configManager.cgi?action=getConfig&name=NTP.Address`

  const write = async (text) => {
    writeData(`${ip};${text}`)
  }
  const update = await request("digest", urlAction, ip, head, write)
  const get = await request("digest", urlInfo, ip, head, write)
  return get
}

export default dahua
