// const reverse = (rev) => {
//     const arr = rev.split('')
//     const ar = arr.reverse()
//     const final = ar.join('')

//     console.log(final);
// }
// reverse('WORD')



// const shit = (arr) => {
//     const rev = arr.split('')
//     row = rev.reverse()
//     const fine = row.join('')
//     console.log(fine);
// }

// shit('FUCK')


// function fuckedup(wow) {
//     const clas = wow.split('')
//     classno = clas.reverse()
//     const finall = classno.join('')
//     console.log(finall);
// }
// fuckedup('ZAIFAL')




// let Fock = (koroche) => {
//     const koro = koroche.split('').reverse()
//     const shit = koro.join('')
//     console.log(shit);
// }

// Fock('ZADOLBALO')



(function (str) {
 let reversed = '';
 for(let character of str) {
    reversed = character + reversed
 }
 console.log({
    reversed_value: reversed
 })
})('GREETINGS!')