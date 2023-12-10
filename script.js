function allowDrop(event) {
  event.preventDefault();
}

function drag(event, imageUrl) {
  //saves the image we're going to drag so that we know what to drop
  event.dataTransfer.setData('text/plain', imageUrl);
}

function drop(event) {
  event.preventDefault();
  //gets the container that we drop in the items
  const container = document.getElementById('target-container');
  //gets the data we want to drag
  const imageUrl = event.dataTransfer.getData('text/plain');

  //creates a new image element
  const droppedImage = document.createElement('img');
  // makes that new element equal to the image we're dragging
  droppedImage.src = imageUrl;
  droppedImage.classList.add('dropped-image');

  //adds that element to the drop-in container 
  container.appendChild(droppedImage);
  // transforms that element once its dropped in
  transformImage(droppedImage);
}

function transformImage(image) {
  var mediaQueries = [
    window.matchMedia('(max-width: 480px)'),
    window.matchMedia('(min-width: 481px) and (max-width: 768px)'),
    window.matchMedia('(min-width: 769px)'),
  ];
  // transforms the images based on what the drop in image is
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
  // this is for touch devices
  // instead of drag, 
  // once the item is touched its added to the drop in container
  // and transformed
  const container = document.getElementById('target-container');

  const droppedImage = document.createElement('img');
  droppedImage.src = imageUrl;
  droppedImage.classList.add('dropped-image');

  container.appendChild(droppedImage);
  transformImage(droppedImage);
}