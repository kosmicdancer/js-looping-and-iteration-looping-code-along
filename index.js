// const gifts = [Ada, Brendan, Ali];
//     function writeCards(gifts) {
//         for(let i = 0, i < gifts.length; i++) {
//             console.log()
//         } 
//     }


    function writeCards(namesArray, event) {
        const messages = []
        for (let i = 0; i < namesArray.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        messages.push(message);
        }
    return messages
    }
    
    function countDown(number) {
        for (let i = number; i >= 0; i--) {
            console.log(i);
        }
    }