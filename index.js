// Code your solutions in this file

  //Write cards()
const writeCards = (arr,event) => {
    const messages = []
    for(let i = 0; i < arr.length;i++) {
           const greetingMessage = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`
           messages.push(greetingMessage)
    }
    return messages
}
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"))

//countdown ()
//logs each number when counting down. from the number provided
function countDown(num) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  }
  
  countDown(5);
