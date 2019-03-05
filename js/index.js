// Your code goes here
//anchor alerts
const NavASelector = document.querySelectorAll('a');

NavASelector.forEach(function(element){
  element.addEventListener('click',function(){
      element.style.color = 'green'
  } )
})

NavASelector[0].addEventListener('click', function(event){
    alert('You found the home page!');
    event.preventDefault();
});

NavASelector[1].addEventListener('click', function(event){
    alert('What do you want to know about us?');
    event.preventDefault();
});
   
NavASelector[2].addEventListener('click', function(event){
    alert('All the content, none of the stress');
    event.preventDefault();
});
   
NavASelector[3].addEventListener('click', function(event){
    alert('Lemme get those digits girl!');
    event.preventDefault();
});

const textContent = document.querySelector(['.content-section']);


console.log(textContent);

//header image animation
const headerImg = document.querySelector('img');
console.log(headerImg);

headerImg.addEventListener('dblclick', function(event){
    TweenMax.from("#headerImg", 4, {x: 1000, ease: Bounce.easeOut});
})

const section = document.querySelectorAll('h2');

section[0].addEventListener('mousemove',function(){
    console.log(section);
    section[0].style.color = 'teal'

})
section[1].addEventListener('mouseleave',function(){
    console.log(section);
    section[1].style.color = 'crimson'

})

section[2].addEventListener('mouseup',function(){
    console.log(section);
    section[2].style.color = 'green'

})

section[3].addEventListener('mousedown',function(){
    console.log(section);
    section[3].style.backgroundColor = 'purple'

})

const h4Select = document.querySelectorAll('h4')

h4Select[0].addEventListener('mouseover',function(){
    
    h4Select[0].style.color = 'red'

})

h4Select[1].addEventListener('auxclick', function(event){
h4Select[1].style.fontSize ='500px'
})

h4Select[2].addEventListener('mouseenter', function(){
    h4Select[2].style.backgroundColor ='pink'
    })
    


const bodySelect = document.querySelector('body')
console.log(bodySelect);

bodySelect.addEventListener('click', function(event){
    event.stopPropagation();

})
     