------
# Проектная работа 12 
## v0.0.3
Данная проектная работа предназначена для отработки навыков создания серверных приложений с помощью фреймворка Express.js.
Для установки проекта необходимо:
1. клонировать данный репозиторий командой git clone.
2. Установить npm командой npm i.
3. Запустить сборку командой npm run dev или npm run start.

После запуска приложения, адрес localhost:3000 загружает фронтенд проекта Mesto;

При GET запросе по адресу *localhost:3000/users* сервер возвращает JSON-объект из файла users.json;

При GET запросе по адресу *localhost:3000/users/8340d0ec33270a25f2413b69* сервер возвращает JSON-объект пользователя с переданным после *users* идентификатором;

При GET запросе по адресу *localhost:3000/cards сервер возвращает JSON-объект из файла cards.json;

Если пользователя с запрошенным идентификатором нет сервер возвращает 404 статус ответа и JSON: { "message": "Нет пользователя с таким id" };

При запросе на несуществующий адрес, сервер возвращает 404 статус ответа и JSON: { "message": "Запрашиваемый ресурс не найден" }.

___________
