$('.image-link').magnificPopup({
  type: 'image',
  mainClass: 'mfp-with-zoom', 
  zoom: {
    enabled: true,
    duration: 300,
    easing: 'ease-in-out',
    opener: function(openerElement) {
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }

});