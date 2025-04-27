# Декомпозиция задач

1. **main: Настройка проекта**

   - Инициализировать проект с React, TypeScript, module CSS.
   - Установить зависимости: `react`, `react-dom`, `classnames`, `react-router-dom` (для роутинга).
   - Создать базовую структуру проекта: `src/App.tsx`, `src/pages`, `src/components`.

2. **ui-kit: Реализация меню и роутинга**

   - Создать компонент `Menu` в `src/components/Menu`.
   - Настроить роутинг в `App.tsx` с использованием `react-router-dom` для перехода между страницами.
   - Реализовать маршруты для всех страниц: welcome, headings, text, paragraphs, buttons, cards, badges, toast.

3. **feature/welcome: Реализация страницы приветствия**

   - Создать страницу `WelcomePage.tsx` в `src/pages`.
   - Добавить большую надпись "UI KIT" и ФИО исполнителя.
   - Стилизовать страницу согласно дизайну.

4. **feature/headings: Реализация компонента Headings и страницы**

   - Создать компонент `Heading` в `src/components/Heading` с файлами `Heading.tsx` и `Heading.module.scss`.
   - Реализовать вариативность через пропсы (например, `level`, `weight`).
   - Использовать TypeScript, `classnames` и упрощённый БЭМ.
   - Создать страницу `HeadingsPage.tsx` в `src/pages` с примерами использования.

5. **feature/text: Реализация компонента Text и страницы**

   - Создать компонент `Text` в `src/components/Text` с файлами `Text.tsx` и `Text.module.scss`.
   - Поддерживать пропсы для размера, цвета, начертания.
   - Использовать TypeScript, `classnames` и упрощённый БЭМ.
   - Создать страницу `TextPage.tsx` в `src/pages` с примерами использования.

6. **feature/paragraphs: Реализация компонента Paragraphs и страницы**

   - Создать компонент `Paragraph` в `src/components/Paragraph` с файлами `Paragraph.tsx` и `Paragraph.module.scss`.
   - Реализовать вариативность через пропсы (например, `size`, `align`).
   - Использовать TypeScript, `classnames` и упрощённый БЭМ.
   - Создать страницу `ParagraphsPage.tsx` в `src/pages` с примерами использования.

7. **feature/buttons: Реализация компонента Buttons и страницы**

   - Создать компонент `Button` в `src/components/Button` с файлами `Button.tsx` и `Button.module.scss`.
   - Поддерживать пропсы для размера, варианта, состояния (`disabled`).
   - Использовать TypeScript, `classnames` и упрощённый БЭМ.
   - Создать страницу `ButtonsPage.tsx` в `src/pages` с примерами использования.

8. **feature/cards: Реализация компонента Cards и страницы**

   - Создать компонент `Card` в `src/components/Card` с файлами `Card.tsx` и `Card.module.scss`.
   - Реализовать вариативность через пропсы (например, `variant`, `shadow`).
   - Использовать TypeScript, `classnames` и упрощённый БЭМ.
   - Создать страницу `CardsPage.tsx` в `src/pages` с примерами использования.

9. **feature/badges: Реализация компонента Badges и страницы**

   - Создать компонент `Badge` в `src/components/Badge` с файлами `Badge.tsx` и `Badge.module.scss`.
   - Поддерживать пропсы для цвета, размера, формы.
   - Использовать TypeScript, `classnames` и упрощённый БЭМ.
   - Создать страницу `BadgesPage.tsx` в `src/pages` с примерами использования.

10. **feature/toast: Реализация компонента Toast и страницы**

    - Создать компонент `Toast` в `src/components/Toast` с файлами `Toast.tsx` и `Toast.module.scss`.
    - Реализовать вариативность через пропсы (например, `type`, `position`).
    - Использовать TypeScript, `classnames` и упрощённый БЭМ.
    - Создать страницу `ToastPage.tsx` в `src/pages` с примерами использования.

11. **feature/deployment: Развертывание на GitHub Pages**

    - Установить пакет `gh-pages`.
    - Настроить скрипты в `package.json` для деплоя (`deploy`, `predeploy`).
    - Опубликовать проект на GitHub Pages.
    - Добавить ссылку на стенд в README.

12. **feature/readme: Оформление README**

    - Описать проект, его цель и структуру.
    - Включить декомпозицию задач (как выше).
    - Добавить инструкции по запуску проекта (`npm install`, `npm start`).
    - Указать ссылку на GitHub Pages.
