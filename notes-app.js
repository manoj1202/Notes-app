//DOm -- Document Object Model

// Query and remove single element
// const p =  document.querySelector('p');
// console.log(p);
// p.remove();

// Query and remove all elements
// const ps = document.querySelectorAll('p');
// ps.forEach(function(p){
//    p.textContent = '*************____________**************'
//     // p.remove();
//    // console.log(p.textContent);
// })

// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'this is the new paragraph'
// document.querySelector('body').appendChild(newParagraph)

document.querySelector('#create-note').addEventListener('click', function(e){
    e.target.textContent = "the button is clicked";

})
document.querySelector('#remove-all').addEventListener('click', function(){
    document.querySelectorAll('.notes').forEach(function(note){
        note.remove();
    })
})