    // Lightbox setting 
lightbox.option({
  showImageNumberLabel: false,
  wrapAround: true,
})


        
        // SEARCH-BOX FUNCTION

  $('.search-box').on('keyup',function() {
      let images = $('.filter a');
      let search = $('.search-box').val().toLowerCase();
          for(let i = 0; i < images.length; i++) {
            let searchAlt = images[i].getAttribute('title').toLowerCase();
            let searchTitle = images[i].getAttribute('data-title').toLowerCase();
              if (searchAlt.indexOf(search) > -1 || searchTitle.indexOf(search) > -1) {
                  images[i].style.display = '';
              }else {
                  images[i].style.display = 'none';
              }
            }    
      });
   
  