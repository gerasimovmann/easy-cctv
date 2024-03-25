import request from "./request.mjs"
import writeData from "./writeFile.mjs"

const ltv = async (ip) => {
  console.log("Функция LTV готова", ip)

  const data1 = `<timeZone type="string" maxLen="127"><![CDATA[MSK-3]]></timeZone>`
  const data2 = `<type type="synchronizeType">NTP</type>
    <ntpServer type="string" maxLen="127"><![CDATA[10.255.3.33]]></ntpServer>`
  const headAction = {
    method: "POST",
    headers: {
      "Content-Type": "application/xml",
    },
  }
  const urlAction = `http://${ip}/SetDateAndTime`
  const urlInfo = `http://${ip}/GetDateAndTime`

  const write = (text) => {
    const newData = text.split("\n")
    writeData(`${ip};${newData[19].trim()}`)
  }

  const update1 = await request("basic", urlAction, ip, { ...headAction, body: data1 }, write)
  const update2 = await request("basic", urlAction, ip, { ...headAction, body: data2 }, write)
  const get = await request("basic", urlInfo, ip, { method: "GET" }, write)

  return Promise.all([update1, update2, get])
}

export default ltv
