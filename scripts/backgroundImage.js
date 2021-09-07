const chooseImage = () => {
    if (getComputedStyle(document.body).getPropertyValue('--idxForFixedBackgroundImage') == -1) {
        var numImages = getComputedStyle(document.body).getPropertyValue('--numberOfBackgroundImages');
        var index = Math.floor(Math.random() * numImages);
        document.body.style.backgroundImage = "url(imgs/" + index.toString() + ".jpg)";
    } else {
        document.body.style.backgroundImage = "url(imgs/" + getComputedStyle(document.body).getPropertyValue('--idxForFixedBackgroundImage').toString() + ".jpg)";
    }
}

chooseImage();