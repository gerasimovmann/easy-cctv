<!-- prettier-ignore-start -->
# Проект Easy-CCTV

Данный проект был создан для реальной задачи:  массового выполнения запросов к камерам.
На данный момент проект имеет ограниченный функционал. Только выставление NTP.

### В планах:
 1. Сделать CLI приложение с выбором действия, которое необходимо выполнить для множества камер
 2. Расширить функционал
 3. Найти подход к камерам Keno
 ...etc


# API разных камер

Здесь собрана вся информация о HTTP API для камер разных вендоров.

## Beward

[Beward HTTP API Documentation](/resources/BEWARD_DKS_API_15_eng.pdf)

Данная документация не полная и подходит только для определенной модели.
Другой документации по API не нашел.

Beward HTTP API Documentation - не найдено

Тип авторизации: Basic

### Получение настроек

Пример запроса: 
```
Method: GET
URL: http://${ip}/cgi-bin/systeminfo_cgi?action=get
Request: none
```

Получение информации об NTP:
`/cgi-bin/date_cgi?action=get` 

### Изменение настроек

```
Method: GET
URL: http://${ip}/cgi-bin/date_cgi?action=set&<parameter>=<value>
URL: http://${ip}/cgi-bin/date_cgi?action=set&timezone=21&ntpHost=10.255.3.33
```

## Keno ?

[KENO HTTP API Documentation](/resources/KENO_IPC_API_2018.pdf)

Тип авторизации: Basic (HTTPS) || Digest (HTTP или HTTPS)

Для идентификации камеры KENO: 

```http://${ip}/digest/frmWebApiVersion```

Для получения информации о камере:

```http://${ip}/digest/frmDevicePara```

P.S. На данный момент есть проблема с digest авторизацией c камерами KENO

## Axis
Тип авторизации: Digest

### Получение настроек
Получение всех параметров:
method GET

```http://${ip}/axis-cgi/param.cgi?action=list```

Получение опредленного параметра:
method GET

```http://${ip}/axis-cgi/param.cgi?action=list&group=Time.NTP.Server```

### Изменение настроек
Пример изменения NTP сервера

`http://${ip}/axis-cgi/param.cgi?action=update&Time.NTP.Server=10.255.3.33`

## Hikvision

[Hikvision HTTP API Documentation](/resources/Hikvision_isapi.pdf)

Тип авторизации: Digest

Идентификация камеры:

`http://${ip}/codebase/config.json`


### Получение настроек

Пример получения информации с камеры:
```
Method GET
URL:http://${ip}/ISAPI/System/deviceInfo
URL:http://${ip}/ISAPI/System/deviceInfo
```
### Изменение настроек
Пример изменения Device Name

```
Method PUT
URL: http://${ip}/ISAPI/System/deviceInfo
Content-Type: application/xml
Request: <deviceName>CAM</deviceName>
```

## LTV

[LTV HTTP API Documentation](/resources/LTV_HTTP_API_V.2_20101123.pdf)

Тип авторизации: Basic

### Получение настроек
Пример получения настроек камеры
```
Method: GET
url: http://login:password@${ip}/GetDeviceInfo
Request: none
```
Получение информации об NTP
http://login:password@${ip}/GetDateAndTime

### Изменение настроек

Пример изменения NTP:
```
Method: POST
url: http://login:password@${ip}/SetDateAndTime
Request:
<ntpServer type="string" maxLen="127"><![CDATA[${ip}]]></ntpServer>
```

## RVI 

Идентичная работа как c камерами Dahua

## Dahua

[Dahua HTTP API Documentation](/resources/DAHUA_IPC_HTTP_API_V1.00x.pdf)

Тип авторизации: Digest

Идентификация камеры: 
`http://${ip}/cgi-bin/magicBox.cgi?action=getHardwareVersion`

### Получение настроек

Пример получения параметров NTP:
method GET

`http://${ip}/cgi-bin/configManager.cgi?action=getConfig&name=NTP`
`http://10.55.17.75/cgi-bin/configManager.cgi?action=getConfig&name=NTP`

### Изменение настроек
Пример изменения NTP сервера

`http://${ip}/cgi-bin/configManager.cgi?action=setConfig&NTP.Address=192.168.1.1`

Также, можно добавить параметры путем: `[&<paramName>=<paramValue>...]`

<!-- prettier-ignore-end -->
