const imgContainer = document.querySelector('.images');

const wait = function(second){
    return new Promise((resolve) => {
        setTimeout(resolve, second * 1000);
    });
};

const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        let img = document.createElement('img');
        img.src = imgPath;
        img.addEventListener('load', function (){
            imgContainer.append(img);
            resolve(img)
        });
        img.addEventListener('error', function(){
            reject(new Error('Image not found'));
        });
    })
}

let currentImg;

createImage('../00-Utils/images/Dom.png')
.then(
    img => {
        currentImg = img;
        console.log('Image 1 loaded');
        return wait(2);
})
.then(() => {
    currentImg.style.display = 'None';
    return createImage('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg')
})
.then((img) => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2)
})
.then(() => currentImg.style.display = 'None')
.catch(err => console.error(err));