function drag(evt) {
    evt.dataTransfer.setData("text", evt.target.id);
  }
  
  function drop(evt, imageId) {
    evt.preventDefault();
    var data = evt.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    draggedElement.style.display = 'none';
    var transformedImageId = 'transformedImage' + imageId.slice(-1);
    var transformedImage = document.getElementById(transformedImageId);
    transformedImage.style.display = 'block';
    //evt.target.appendChild(image);
  }
  
  function allowDrop(evt) {
    evt.preventDefault();
  }
  