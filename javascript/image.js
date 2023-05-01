// Fetch the data from the JSON file
fetch('./JSON/images.json')
  .then(response => response.json())
  .then(data => {
    // Create the HTML for the image gallery
    var galleryHtml = '<div class="gallery">';
    data.forEach(image => {
      galleryHtml += `
      <div class="gallery-row">
        <div class="gallery-item">         
          <img src="${image.src}" alt="${image.alt}" data-src="${image.src}">
          <div class="gallery-caption">${image.caption}</div>
        </div>
       </div>
      `;
    });
    galleryHtml += '</div>';
        // Append the HTML to the container div
        document.querySelector('.gallery-container').innerHTML = galleryHtml;
    });
