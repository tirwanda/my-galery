const mainPicture = document.querySelector('img.mainPicture');
const thumbs = document.querySelectorAll('.thumb');
const container = document.querySelector('.container');

container.addEventListener('click', function(e){
    if (e.target.className == 'thumb'){
        //mainPicture.setAttribute('src', 'assets/' + e.target.alt + '.jpg');
        mainPicture.src = e.target.src;
        mainPicture.classList.add('fade');

        setTimeout(function(){
            mainPicture.classList.remove('fade');
        },500)

        thumbs.forEach(function(thumb){
            // if (thumb.classList.contains('active')){
            //     thumb.classList.remove('active');
            // }

            thumb.className = 'thumb';
        });

        e.target.classList.add('active');
    }
})
