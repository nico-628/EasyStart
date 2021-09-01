const chooseImage = () => {
    var numImages = getComputedStyle(document.body).getPropertyValue('--numberOfBackgroundImages');
    var index = Math.floor(Math.random() * numImages);
    console.log(index);
    document.body.style.backgroundImage = "url(imgs/" + index.toString() + ".jpg)";
    //document.body.style.backgroundImage="url(imgs/11.jpg)";
}

chooseImage();