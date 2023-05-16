Главная страница
    • Отображает постраничный список товаров из каталога https://dummyjson.com/products
    • Каждый товар содержит:
        ◦ Название
        ◦ Описание
        ◦ Стоимость
        ◦ Изображение (поле thumbnail)
        ◦ Переход к редактированию товара
    • Содержит поле для фильтрации товаров по названию, описанию и стоимости. По мере набора текста в поле список товаров должен фильтроваться.

Страница редактирование товара
    • Редактирование полей:
        ◦ Название (текст)
        ◦ Описание (многострочный текст)
        ◦ Стоимость (число)
        ◦ Ссылка на изображение
        ◦ Элементы управления сохранить и отменить
    • При сохранении отправляет запрос https://dummyjson.com/products/{id} с измененными данными.
    • При успешном сохранении происходит переход на главную страницу, где видны изменения.
    • При ошибке запроса пользователю выводится сообщение, изменения не сбрасываются.
    
    
    Установка
Откройте проект в редакторе кода, перейдите в ветку main и откройте два терминала и выполните следующие команды:
В терминале запустите приложение
npm i && npm start
