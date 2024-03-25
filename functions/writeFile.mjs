import fs from "fs/promises"
import getTime from "./getTime.mjs"

const writeData = async (stringData) => {
  try {
    const writeData = await fs.appendFile("files/new_data.csv", `${stringData};\n`)
  } catch (error) {
    console.log("Произошла ошибка", error.message)
  }
}

export default writeData
