let check = `
Ваша оценка - 120 баллов

Отзыв по пунктам ТЗ:

Выполненные пункты:
1) студент засабмитил в rs app ссылку на своё CV, задеплоенное на gh-pages

2) вёрстка валидная. Для проверки валидности вёрстки используйте сервис https://validator.w3.org/. Валидной вёрстке соответствует надпись "Document checking completed. No errors or warnings to show." В таком случае баллы за пункт требований выставляем полностью. Если есть предупреждения - warnings, но нет ошибок - errors, выставляем половину баллов за пункт требований

3) header, main, footer

4) элемент nav

5) только один заголовок h1

6) заголовки h2

7) в footer есть ссылка на гитхаб автора работы, год создания приложения, логотип курса со ссылкой на курс. Если ссылка в футере ведёт на курс stage0, это не ошибка.

8) для оформления СV используются css-стили

9) при уменьшении масштаба страницы браузера вёрстка размещается по центру по горизонтали, а не сдвигается в сторону

10) на странице СV есть фото или аватарка автора, пропорции изображения не искажены (т.е. картинка не деформирована, если её размер изменён, сохраняются пропорции исходного изображения), у изображения есть атрибут alt.

11) навигация, контакты для связи и перечень навыков оформлены в виде списка ul > li или ul > li > a. Также допускается использование нумерованого списка ol > li или ol > li > a

12) краткую информацию о себе

13) контакты для связи

14) перечень навыков

15) пример кода. Код добавляется при помощи символов и тегов, а не картинкой

16) информацию об образовании и уровне английского

17) CV выполнено на английском языке

`;

console.log(check);
