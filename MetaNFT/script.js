const numberBlock = document.querySelectorAll('.roadmap__number');
const btnHover = document.querySelector('.discord__btn');
const discordIconBlack = document.querySelector('.discord__icon-black');
const discordIcon= document.querySelector('.discord__icon');

numberBlock.forEach(block => {
    block.addEventListener('focus', function() {
        block.style.background = '#8DFD1B';
        block.style.color = 'black';
        
        
    })  
});

btnHover.addEventListener('mouseover', function(){
    discordIconBlack.classList.add('discord__hiden');
    discordIcon.classList.remove('discord__hiden')
}) 

btnHover.addEventListener('mouseout', function(){
    discordIcon.classList.add('discord__hiden');
    discordIconBlack.classList.remove('discord__hiden')
}) 