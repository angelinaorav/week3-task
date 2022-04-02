//select movie poster original image
let moviePoster = document.querySelector('.movie-poster-container img');

//select modal window layer
let modal = document.querySelector('#myModal');
//select close button
let closenBtn = document.querySelector('.closeBtn');
//select modal window image
let modalImage = document.querySelector('.movie-poster-container img-modal');

moviePoster.addEventListener('click', ()=> {
    console.log('image clicked');
    modal.style.display = 'block';
    modalImage.src = moviePoster.src;
});

closenBtn.addEventListener('click', ()=> {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if(event.target === modal){
        modal.style.display = 'none';
    }
});
/*console.log(modal);*/
