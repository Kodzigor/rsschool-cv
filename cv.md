---
---

# Igor Kodzhebash

## Contact information

- Telegram: @SkipMyBash
- Email: igorkodzebash@gmail.com
- GitHub: https://github.com/Kodzigor
- LinkedIn: https://www.linkedin.com/in/igor-kodzebash-5356091a5/

## About Me

My goal is to became a senior Frontend developer. I love learning and discovering something new for myself.

## Skills

- HTML
- CSS
- JS(ES6)
- Figma
- Git

## Code

```
function FindIntersection(strArr) {
  let inter = strArr[0]
    .split(',')
    .map(el => el.trim())
    .filter(el =>
      strArr[1]
        .split(',')
        .map(el => el.trim())
        .includes(el),
    );
  return inter;
}
FindIntersection(['89, 1,6, 3, 4, 7, 13', '1, 2, 4, 13, 15, 89. 95, 74, 6']);

```
