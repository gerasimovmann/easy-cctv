import defineCamera from "./functions/defineCamera.mjs"
import { data } from "./data/data.mjs"
import createCsv from "./functions/createCsv.mjs"

createCsv()

for (let i = 0; i < data.length; i++) {
  const result = await defineCamera(data[i])
}
