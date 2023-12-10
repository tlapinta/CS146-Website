function allowDrop(event) {
  event.preventDefault();
}

function drag(event, imageUrl) {
  event.dataTransfer.setData('text/plain', imageUrl);
}



function drop(event) {
  event.preventDefault();
  const container = document.getElementById('target-container');
  const imageUrl = event.dataTransfer.getData('text/plain');

  const droppedImage = document.createElement('img');
  droppedImage.src = imageUrl;
  droppedImage.classList.add('dropped-image');

  container.appendChild(droppedImage);
  transformImage(droppedImage);
}

function transformImage(image) {
  var mediaQueries = [
    window.matchMedia('(max-width: 480px)'),
    window.matchMedia('(min-width: 481px) and (max-width: 768px)'),
    window.matchMedia('(min-width: 769px)'),
  ];

  if(image.src.includes("images/WheatBreadImage.png")){
    image.src = 'images/wheatSlice.png';
    if (mediaQueries[2].matches){
      image.style.width = "300px";
    }
    if (mediaQueries[1].matches){
      image.style.width = "200px"
    }
    if (mediaQueries[0].matches){
      image.style.width = "85px"
    }
  }else if(image.src.includes("images/AvocadoImage.png")){
    image.src = 'images/AvocadoSlice.png';
    if (mediaQueries[2].matches){
      image.style.width = "200px";
    }
    if (mediaQueries[1].matches){
      image.style.width = "150px"
    }
    if (mediaQueries[0].matches){
      image.style.width = "55px"
    }
  }else if(image.src.includes("images/LettuceImage.png")){
    image.src = 'images/LettuceSlice.png';
    if (mediaQueries[2].matches){
      image.style.width = "300px";
    }
    if (mediaQueries[1].matches){
      image.style.width = "200px"
    }
    if (mediaQueries[0].matches){
      image.style.width = "75px"
    }
  }else if(image.src.includes("images/grilledChicken.jpeg")){
    image.src = 'images/grilledChickenSlice.png';
    if (mediaQueries[1].matches){
      image.style.width = "150px"
    }
    if (mediaQueries[0].matches){
      image.style.width = "65px"
    }
  }else if(image.src.includes("images/SirachaMayoImage.png")){
    image.src = 'images/sirachaMayoSand.png';
    if (mediaQueries[2].matches){
      image.style.width = "200px";
    }
    if (mediaQueries[1].matches){
      image.style.width = "125px"
    }
    if (mediaQueries[0].matches){
      image.style.width = "55px"
    }
  }else if(image.src.includes("images/TomatoImage.png")){
    image.src = 'images/tomato_slice.png';
    if (mediaQueries[1].matches){
      image.style.width = "125px"
    }
    if (mediaQueries[0].matches){
      image.style.width = "55px"
    }
  }else if(image.src.includes("images/RyeBreadImage.png")){
    image.src = 'images/ryeBreadSlice.png';
    if (mediaQueries[2].matches){
      image.style.width = "400px";
    }
    if (mediaQueries[1].matches){
      image.style.width = "250px"
    }
    if (mediaQueries[0].matches){
      image.style.width = "100px"
    }
  }else if(image.src.includes("images/HamImage.png")){
    image.src = 'images/HamImage.png';
    if (mediaQueries[2].matches){
      image.style.width = "200px";
    }
    if (mediaQueries[1].matches){
      image.style.width = "125px"
    }
    if (mediaQueries[0].matches){
      image.style.width = "55px"
    }
  }else if(image.src.includes("images/MayoImage.png")){
    image.src = 'images/mayoSauce.png';
    if (mediaQueries[2].matches){
      image.style.width = "300px";
    }
    if (mediaQueries[1].matches){
      image.style.width = "200px"
    }
    if (mediaQueries[0].matches){
      image.style.width = "85px"
    }
  }else if(image.src.includes("images/BaconImage.png")){
    image.src = 'images/BaconImage.png';
    if (mediaQueries[2].matches){
      image.style.width = "300px";
    }
    if (mediaQueries[1].matches){
      image.style.width = "200px"
    }
    if (mediaQueries[0].matches){
      image.style.width = "85px"
    }
  }else if(image.src.includes("images/SwissCheeseImage.png")){
    image.src = 'images/swissCheeseSlice.png';
    if (mediaQueries[1].matches){
      image.style.width = "150px"
    }
    if (mediaQueries[0].matches){
      image.style.width = "55px"
    }
  }else if(image.src.includes("images/AmericanCheeseImage.png")){
    image.src = 'images/americanCheeseSlice.png';
    if (mediaQueries[1].matches){
      image.style.width = "150px"
    }
    if (mediaQueries[0].matches){
      image.style.width = "55px"
    }
  }
}

function start(imageUrl){
  const container = document.getElementById('target-container');

  const droppedImage = document.createElement('img');
  droppedImage.src = imageUrl;
  droppedImage.classList.add('dropped-image');

  container.appendChild(droppedImage);
  transformImage(droppedImage);
}