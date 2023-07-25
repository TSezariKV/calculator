const buttons = document.querySelectorAll('.btn')
const screen = document.querySelector('.screen')
const allClear = document.querySelector('.clear-btn')
const deleteButton = document.querySelector('.delete-btn')
const equalButton = document.querySelector('.equal-btn')
const themeContainer = document.querySelector('.theme')
const darkButton = document.querySelector('.dark-btn')
const lightButton = document.querySelector('.light-btn')
const calculatorContainer = document.querySelector('.container')
const buttonsContainer = document.querySelector('.buttons')
const redButton = document.querySelector('.btn-red')
let previousValue = document.querySelector('.previous-value')

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        let value = e.target.dataset.num
        screen.value += value
    })
    lightButton.addEventListener('click', function(){
        calculatorContainer.classList.add('light')
        button.classList.add('light')
        themeContainer.classList.add('light')
        buttonsContainer.classList.add('light')
        lightButton.style.color = 'rgb(185, 185, 185)'
        darkButton.style.color = 'black'
        screen.style.color = 'black'
    })
    darkButton.addEventListener('click', function(){
        calculatorContainer.classList.remove('light')
        button.classList.remove('light')
        themeContainer.classList.remove('light')
        buttonsContainer.classList.remove('light')
        darkButton.style.color = 'rgb(185, 185, 185)'
        lightButton.style.color = 'black'
        screen.style.color = 'white'
    })
})

equalButton.addEventListener('click', function(){
    if(screen.value){
        screen.value = eval(screen.value)
    }
})

allClear.addEventListener('click', function(){
    screen.value = ''
})
deleteButton.addEventListener('click', function(){
    screen.value = screen.value.substring(0, (screen.value).length - 1)
})
