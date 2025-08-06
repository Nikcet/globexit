# Решение тестового задания №1. Frontend


### Инструкция по запуску проекта (client)

1. Перейдите в папку `client`:
   ```
   cd client
   ```
2. Установите зависимости:
   ```
   npm install
   ```
3. Запустите проект:
   ```
   npm run start
   ```
4. Откроется браузер по умолчанию и перейдет по адресу http://localhost:3001 (так как сервер запускается на 3000 порту).

---

### Структура fronend-части проекта

```
client/
├── package.json
├── package-lock.json
├── README.md
├── public/
└── src/
    ├── App.css
    ├── App.test.tsx
    ├── App.tsx
    ├── index.css
    ├── index.tsx
    ├── react-app-env.d.ts
    ├── reportWebVitals.ts
    ├── setupTests.ts
    ├── assets/
    │   ├── fonts/
    │   │   ├── fonts.css
    │   │   ├── proximanova_black.otf
    │   │   ├── proximanova_black.ttf
    │   │   ├── proximanova_blackit.otf
    │   │   ├── proximanova_bold.otf
    │   │   ├── proximanova_boldit.otf
    │   │   ├── proximanova_extrabold.otf
    │   │   ├── proximanova_light.otf
    │   │   └── proximanova_regular.ttf
    │   └── images/
    │       ├── close-icon.svg
    │       ├── mail-icon.svg
    │       ├── phone-icon.svg
    │       └── search-icon.svg
    ├── components/
    │   ├── SearchBar.css
    │   ├── SearchBar.tsx
    │   ├── StatusMessage.css
    │   ├── StatusMessage.tsx
    │   ├── UserCard.css
    │   ├── UserCard.tsx
    │   ├── UserList.css
    │   ├── UserList.tsx
    │   ├── UserPopup.css
    │   └── UserPopup.tsx
    ├── hooks/
    │   ├── useSearch.ts
    │   └── useUsers.ts
    ├── types/
    │   ├── components.ts
    │   └── user.ts
    └── utils/
        └── api.ts
```

