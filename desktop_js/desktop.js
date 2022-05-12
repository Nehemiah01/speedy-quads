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
    document.querySelector('small').style.color = 'rgba(255, 255, 255, 0.5)'
    document.querySelector('button, #details').style.color = '#fff'

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
    document.querySelector('small').style.color = 'rgba(255, 255, 255, 0.5)'
    
    document.querySelector('button, #details').style.color = '#fff'

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
    document.querySelector('small').style.color = 'rgba(255, 255, 255, 0.5)'
    
    document.querySelector('button, #details').style.color = '#fff'
   
    for (const child of yellow.parentElement.children) {
        child.style.transform = ''   
    }
    yellow.style.transform = 'scale(1.3)'
})
white.addEventListener('click', () => {
    body.classList= 'white'

    white.style.transform = 'scale(1.3)'
    document.querySelector('select').style.borderColor = '#2c3e50'   
    document.querySelector('button, select').style.color = '#2c3e50'
    document.querySelector('small').style.color = '#2c3e50'
    document.querySelector('#details').style.color = '#2c3e50'
  
    for (const child of white.parentElement.children) {
        child.style.transform = ''   
    }
    white.style.transform = 'scale(1.3)'
})


const hamburger = document.getElementById('hamburger')
hamburger.addEventListener('click', toggler = (e) => {
    // console.log("hello")
    hamburger.classList.toggle('cancel')
})

let heroImage = document.querySelector('#skate-1')

let select = document.querySelector('select')

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
