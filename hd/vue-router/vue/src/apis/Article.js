const host = ` http://localhost:3002/article`
const all = () => {
    return fetch(host).then(r=>r.json())
}

const find = id => {
    return fetch(host+`/${id}`).then(r=>r.json())
}
export default {all,find}