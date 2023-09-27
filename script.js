function onClick(image){
    document.getElementById("imageZoom").src = image.src;
    document.getElementById("modal").style.display = "block";
    let imgText = document.getElementById("imgText");
    imgText.innerHTML = image.alt;
}



