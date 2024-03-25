import { clientBasic, clientDigest } from "./fetchClient.mjs"
import axis from "./axis.mjs"
import beward from "./beward.mjs"
import dahua from "./dahua.mjs"
import hikvision from "./hikvision.mjs"
import ltv from "./ltv.mjs"

const defineCamera = async (ip) => {
  const cameras = [
    {
      vendor: "axis",
      method: clientDigest,
      url: `http://${ip}/axis-cgi/param.cgi?action=list&group=Layout.Axis`,
      action: axis,
    },
    {
      vendor: "beward",
      method: clientBasic,
      url: `http://${ip}/cgi-bin/systeminfo_cgi?action=get`,
      action: beward,
    },
    {
      vendor: "hikvision",
      method: clientDigest,
      url: `http://${ip}/ISAPI/System/time`,
      action: hikvision,
    },
    {
      vendor: "ltv",
      method: clientBasic,
      url: `http://${ip}/GetDeviceInfo`,
      action: ltv,
    },
    {
      vendor: "dahua",
      method: clientDigest,
      url: `http://${ip}/OutsideCmd`,
      action: dahua,
    },
  ]

  for (const key in cameras) {
    if (cameras[key].method) {
      try {
        const request = await cameras[key].method.fetch(cameras[key].url, { timeout: 3000 })
        if (request.status === 200) {
          const reqToCam = await cameras[key].action(ip, cameras[key])
        }
      } catch (error) {
        if (error instanceof DOMException && error.name == "AbortError") {
          console.log(`Error: Host is not available ${ip}`, error)
          return
        } else {
          console.log(`Error ${ip}`, error.cause)
          return
        }
      }
    }
  }
}

export default defineCamera
