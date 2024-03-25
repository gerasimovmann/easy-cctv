import fs from "fs/promises"
const createCsv = async () => {
  const path = "files/new_data.csv"
  const headData = "ip;ntp data;\n"

  try {
    const createFile = await fs.writeFile(path, headData)
    if (createFile) {
      console.log("Файл создан")
    }
  } catch (error) {
    console.log("Произошла ошибка", error.message)
  }
}

export default createCsv
