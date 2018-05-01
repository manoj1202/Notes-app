const para = document.querySelectorAll('p')

para.forEach(function(p){
    if(p.textContent.includes('the')){
        console.log(p);
        p.remove();
    }
})
