let lightBlue = document.getElementById('light-blue')
let pink = document.getElementById('pink')
let yellow = document.getElementById('yellow')
let white = document.getElementById('grey')

let body = document.querySelector('body')

console.log(body.style.backgroundColor)

lightBlue.addEventListener('click', () => {
    body.classList = '';

    document.querySelector('select').style.borderColor = 'rgba(255, 255, 255, 0.5)'   
    document.querySelector('button, select').style.color = 'rgba(255, 255, 255, 0.5)'
    document.querySelector('button').style.color = '#fff'
    
    for (const link of document.querySelectorAll('a')) {
        link.style.color = '#fff'    
    }
    for (const child of lightBlue.parentElement.children) {
        child.style.transform = ''   
    }
    lightBlue.style.transform = 'scale(1.3)'

})
pink.addEventListener('click', () => {
    body.classList = 'pink'

    pink.style.transform = 'scale(1.3)'
    document.querySelector('select').style.borderColor = 'rgba(255, 255, 255, 0.5)'   
    document.querySelector('button, select').style.color = 'rgba(255, 255, 255, 0.5)'
    document.querySelector('button').style.color = '#fff'
    for (const link of document.querySelectorAll('a')) {
        link.style.color = '#fff'    
    }
    for (const child of pink.parentElement.children) {
        child.style.transform = ''   
    }
    pink.style.transform = 'scale(1.3)'
})
yellow.addEventListener('click', () => {
    body.classList = 'yellow';

    yellow.style.transform = 'scale(1.3)'
    document.querySelector('select').style.borderColor = 'rgba(255, 255, 255, 0.5)'   
    document.querySelector('button, select').style.color = 'rgba(255, 255, 255, 0.5)'
    document.querySelector('button').style.color = '#fff'
    for (const link of document.querySelectorAll('a')) {
        link.style.color = '#fff'    
    }
    for (const child of yellow.parentElement.children) {
        child.style.transform = ''   
    }
    yellow.style.transform = 'scale(1.3)'
})
white.addEventListener('click', () => {
    body.classList= 'white'

    white.style.transform = 'scale(1.3)'
    document.querySelector('select').style.borderColor = '#000'   
    document.querySelector('button, select').style.color = '#000'
    for (const link of document.querySelectorAll('a')) {
        link.style.color = '#000'    
    }
    for (const child of white.parentElement.children) {
        child.style.transform = ''   
    }
    white.style.transform = 'scale(1.3)'
})


let heroImage = document.querySelector('#skate-1')

let select = document.querySelector('select')
let option1 = document.querySelector('option:first-child')
let option2 = document.querySelector('option:nth-of-type(2)')
let option3 = document.querySelector('option:nth-of-type(3)')
let option4 = document.querySelector('option:nth-of-type(4)')


console.log(option1)


select.addEventListener('change', (e) => {
    e.preventDefault()
    console.log('hello')
    
    if (select.value == 'lg') {
        heroImage.style.transform = 'scale(1.3)'
    }
    else if (select.value == 'md') {
        heroImage.style.transform = 'scale(1.0)'
    }
    else if (select.value == 'sm') {
        heroImage.style.transform = 'scale(0.8)' 
    }
    else if (select.value == 'mn') {
        heroImage.style.transform = 'scale(0.6)' 
    }
})
