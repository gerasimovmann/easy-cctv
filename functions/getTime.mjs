const getTime = () => {
  const now = new Date()
  // Получаем год, месяц и день
  let year = now.getFullYear()
  let month = now.getMonth() + 1
  let day = now.getDate()

  // Получаем часы, минуты и секунды
  let hours = now.getHours()
  let minutes = now.getMinutes()
  let seconds = now.getSeconds()

  // Форматируем время, чтобы иметь две цифры для каждого разряда
  hours = hours < 10 ? "0" + hours : hours
  minutes = minutes < 10 ? "0" + minutes : minutes
  seconds = seconds < 10 ? "0" + seconds : seconds
  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`
}
export default getTime
