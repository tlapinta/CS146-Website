function allowDrop(event) {
  event.preventDefault();
}

function drag(event, imageUrl) {
  event.dataTransfer.setData('text/plain', imageUrl);
}

function drop(event) {
  event.preventDefault();
  //const words = document.getElementById("target-container");
  //words.innerHTML = "";
  const container = document.getElementById('target-container');
  const imageUrl = event.dataTransfer.getData('text/plain');

  const droppedImage = document.createElement('img');
  droppedImage.src = imageUrl;
  droppedImage.classList.add('dropped-image');

  //container.innerHTML = '';
  container.appendChild(droppedImage);
  // Transform the image once dropped
  transformImage(droppedImage);
}

function transformImage(image) {
  // Add your logic to transform the image here
  // For example, change the source to a different image
  if(image.src.includes("images/WheatBreadImage.png")){
    image.src = 'images/wheatSlice.png';
    image.style.width = "300px";
  }else if(image.src.includes("images/AvocadoImage.png")){
    image.src = 'images/AvocadoSlice.png';
    image.style.width = "200px";
  }else if(image.src.includes("images/LettuceImage.png")){
    image.src = 'images/LettuceSlice.png';
    image.style.width = "300px";
  }else if(image.src.includes("images/grilledChicken.jpeg")){
    image.src = 'images/grilledChickenSlice.png';
  }else if(image.src.includes("images/SirachaMayoImage.png")){
    image.src = 'images/sirachaMayoSand.png';
    image.style.width = "200px";
  }else if(image.src.includes("images/TomatoImage.png")){
    image.src = 'images/tomato_slice.png';
  }else if(image.src.includes("images/RyeBreadImage.png")){
    image.src = 'images/ryeBreadSlice.png';
    image.style.width = "400px";
  }else if(image.src.includes("images/HamImage.png")){
    image.src = 'images/HamImage.png';
    image.style.width = "200px";
  }else if(image.src.includes("images/MayoImage.png")){
    image.src = 'images/mayoSauce.png';
    image.style.width = "300px";
  }else if(image.src.includes("images/BaconImage.png")){
    image.src = 'images/BaconImage.png';
    image.style.width = "300px";
  }else if(image.src.includes("images/SwissCheeseImage.png")){
    image.src = 'images/swissCheeseSlice.png';
  }else if(image.src.includes("images/AmericanCheeseImage.png")){
    image.src = 'images/americanCheeseSlice.png';
  }
}
