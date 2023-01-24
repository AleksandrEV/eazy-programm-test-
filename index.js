const inputNode = document.querySelector('.input')
const btnNode = document.querySelector('.btn')
const outputNode = document.querySelector('.output')

btnNode.addEventListener('click', function() {
   const answer = inputNode.value;
   let output = 'Ответ правильный';

   if (answer !== '2023') {
      output = 'Ответ неправильный';
   }

   output.innerHTML = output;
});