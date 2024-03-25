import request from "./request.mjs"
import writeData from "./writeFile.mjs"

const hikvision = async (ip) => {
  console.log("Функция hikvision готова", ip)

  const data1 = "<Time><timeMode>NTP</timeMode><timeZone>CST-3:00:00</timeZone></Time>"
  const data2 =
    "<NTPServer><id>1</id><addressingFormatType>ipaddress</addressingFormatType><ipAddress>10.255.3.33</ipAddress><portNo>123</portNo><synchronizeInterval>1440</synchronizeInterval></NTPServer>"
  const headAction = {
    method: "PUT",
    headers: {
      "Content-Type": "application/xml",
    },
  }
  const urlAction1 = `http://${ip}/ISAPI/System/time`
  const urlAction2 = `http://${ip}/ISAPI/System/time/ntpServers/1`
  const urlInfo = `http://${ip}/ISAPI/System/time/ntpServers/1`

  const write = (text) => {
    const newText = text.split("\n")
    writeData(`${ip};${newText[4].trim()}`)
  }

  const update1 = await request("digest", urlAction1, ip, { ...headAction, body: data1 }, write)
  const update2 = await request("digest", urlAction2, ip, { ...headAction, body: data2 }, write)
  const get = await request("digest", urlInfo, ip, { method: "GET" }, write)
  return get
}

export default hikvision
