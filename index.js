document.addEventListener('DOMContentLoaded', function(){
  let message = document.createElement('p')
  message.innerHTML = 'hello'
  console.log(message)  

  let root = document.querySelector('#root')
  console.log(root)

  root.appendChild(message)
  let fortunes = ['great life', ]
  let meow = document.querySelector('#meow')
  let cat = document.querySelector('#cat')

  cat.addEventListener("click", function(){
    meow.play()
  })
})

