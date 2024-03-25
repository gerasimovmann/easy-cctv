import request from "./request.mjs"
import writeData from "./writeFile.mjs"

const beward = async (ip) => {
  console.log("Функция beward готова", ip)

  const data = ""
  const method = "GET"
  const head = {
    method,
  }
  const urlAction = `http://${ip}/cgi-bin/date_cgi?action=set&timezone=21&ntpHost=10.255.3.33`
  const urlInfo = `http://${ip}/cgi-bin/date_cgi?action=get`

  const write = (text) => {
    writeData(`${ip};${text}`)
  }
  const update = await request("basic", urlAction, ip, head, write)
  const get = await request("basic", urlInfo, ip, head, write)
  if (get) {
    return get
  }
}

export default beward
