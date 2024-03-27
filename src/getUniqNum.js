export function getUniqNumber(length) {
    const arr = Array.from({ length: length }, (_, i) => i);
    let res = '';

    for (let i = 0; i < length; i++){
        const index = Math.floor(Math.random() * arr.length);
        res += arr[index];
        arr.splice(index, 1);
    }

    return `${parseInt(res, 10)}`.length == length ? `${parseInt(res, 10)}`.split('') : getUniqNumber(length);
}