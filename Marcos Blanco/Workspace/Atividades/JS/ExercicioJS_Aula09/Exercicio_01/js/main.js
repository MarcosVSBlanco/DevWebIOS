const valores = [17, 43, 8, 4, 97, 56, 29]
valores.forEach(parImpar)
function parImpar(item) {
    if (item % 2 == 0)
        console.log(`número par ${item}`)
    else {
        console.log(`número impar ${item}`)
    }
}