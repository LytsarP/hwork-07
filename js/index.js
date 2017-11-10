const n = Number(prompt('Input n'));
let fibonacci = [1, 1];
for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
for (let i = 0; i < n; i++) {
    document.write('i: ' + fibonacci[i] + ';' + '<br>');
}