# IPTV


## https://m3u.ibert.me/

1. get m3u & txt list
```js
const a = Array.from(document.querySelectorAll('table')[1].querySelectorAll('tbody > tr'))
.map(t => {
    return {
        channel: t.querySelector('td').innerText,
        m3u: t.querySelectorAll('td > a')[0].href,
        txt: t.querySelectorAll('td > a')[1].href
    }
})
JSON.stringify(a)
```
