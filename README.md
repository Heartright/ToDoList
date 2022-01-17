# Todo list

## :clipboard: Функционал
Приложение работает на запросах, все todo элементы хранятся в массе на сервере. 
Можно добавить\выполнить\удалять задачи, ниже описаны детали работы приложения.

Запросы на frontend-е:
- `addTodo` - отправляет POST запрос для хранения todo элементов в массиве в backend-е
- `toggleTodo` - отправляет PATCH запрос в backend и меняет свойство completed, в зависимости от того выполнена задача или нет.
- `deleteTodo` - отправляет запрос DELETE в backend и удаляет todo элемент.

Методы в backend-е :
- `findAll` - возвращает весь массив todos, который хранится в статичном поле класса.
- `createTodo` - добавляет в массив новый элемент todo с (id, состоянием задачи и текстом).
- `toggleTodo/deleteTodo` - эти методы либо удаляют существующий элемент, либо изменяют.

## :memo: Перед работой с проектом необходимо
1. Создать react приложение через `npx create-react-app appname` запускать необходимо командой `npm start` перейдя в папку client в терминале
2. Создать приложение nestjs `npm i -g @nestjs/cli` `nest new project-name` запустить можно `npm start dev:run` перейдя в папку server в терминале.
3. Так же необходимо установить библиотеку axios `npm install axios` для работы с запросами в папку client как и все остальные библиотеки ниже.
4. Для работы c элементами `npm install @mui/material` `npm install @material-ui/core` `npm install @mui/icons-material` и для работы со стилями `npm install --save styled-components`

 
## :hammer_and_wrench: Стек 
 - React
 - TypeScript
 - Nestjs, 
 - Material UI,
 - Style components

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://raw.githubusercontent.com/Heartright/stack_icon/6dab1175d1a19e38473a987cb1818b1a2141a265/react-logo.svg" width="100"><img src="https://raw.githubusercontent.com/Heartright/stack_icon/6dab1175d1a19e38473a987cb1818b1a2141a265/ts-logo.svg" width="70">
&nbsp;
<img src="https://raw.githubusercontent.com/Heartright/stack_icon/6dab1175d1a19e38473a987cb1818b1a2141a265/nestjs-logo.svg" width="70">
&nbsp;
<img src="https://raw.githubusercontent.com/Heartright/stack_icon/6dab1175d1a19e38473a987cb1818b1a2141a265/material-ui-logo.svg" width="80">
&nbsp;&nbsp;
<img src="https://raw.githubusercontent.com/Heartright/stack_icon/6dab1175d1a19e38473a987cb1818b1a2141a265/styled-components-logo.svg" width="65">











