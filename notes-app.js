//DOm -- Document Object Model

// Query and remove single element
// const p =  document.querySelector('p');
// console.log(p);
// p.remove();

// Query and remove all elements
const ps = document.querySelectorAll('p');
ps.forEach(function(p){
    p.remove();
})