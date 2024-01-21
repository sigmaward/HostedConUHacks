// var images = [
//     // Array of image objects
// ];

// window.onload = function() {
//     displayImages(images);
// };

// function displayImages(images) {
//     var container = document.getElementById('imageContainer');
//     container.innerHTML = '';

//     images.forEach(function(image) {
//         var imgElement = document.createElement('img');
//         imgElement.src = image.url;
//         imgElement.alt = image.description;
//         container.appendChild(imgElement);
//     });
// }

// document.getElementById('searchBar').addEventListener('keyup', function() {
//     var searchTerm = this.value.toLowerCase();
//     var filteredImages = images.filter(function(image) {
//         return image.description.toLowerCase().includes(searchTerm);
//     });

//     displayImages(filteredImages);
// });

// // Add event listeners to building filters
// document.querySelectorAll('.buildingFilter').forEach(function(filter) {
//     filter.addEventListener('click', function() {
//         var building = this.id.split('building')[1];
//         var filteredImages = images.filter(function(image) {
//             return image.building === building;
//         });

//         displayImages(filteredImages);
//     });
// });