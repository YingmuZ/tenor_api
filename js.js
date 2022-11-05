const getImage = document.getElementById('search-button');
const catImage = document.getElementsByClassName('cat-image');


getImage.addEventListener('click', function(){
    

    for(i=0; i<8; i++){
        catImage[i].innerText = '';
    }

    let tenorAPI = new XMLHttpRequest();
    tenorAPI.open('GET', 'https://tenor.googleapis.com/v2/search?q=cat-meme-gifs&key=AIzaSyA-CVblzuphWGswFyh2RiYtmiNtj-2nc7E&limit=8')
    tenorAPI.responseType = 'json';
    tenorAPI.onreadystatechange = function(){
        if(tenorAPI.readyState === 4 && tenorAPI.status === 200){
            // console.log(tenorAPI.response)
            let eightImages = tenorAPI.response['results'];
            // console.log(eightImages[0].media_formats.gif['url']);

            for(i=0; i<8; i++){
                let placedImage = document.createElement('img');
                placedImage.setAttribute('src', eightImages[i].media_formats.gif['url'])
                // console.log(placedImage);
                placedImage.setAttribute('class', 'cat');
                catImage[i].appendChild(placedImage);
            }
        }
    };
    tenorAPI.send();   

})




