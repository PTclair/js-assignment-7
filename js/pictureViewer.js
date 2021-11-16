/*$(function () {
    var modal = new Modal();
    var $content = $('#share-options').detach();
$('.thumb').click(function(e){
    e.preventDefault();
    // modal.open({
    //     content: $content,
    //     width: 800,
    //     height: 450
    // });

    
    console.log("click", e.target.parentNode.href);
    var anchorHref = e.target.parentNode.href;
    var arrayvalue = anchorHref.split('/')
     var hrefPhotoFrame =   arrayvalue[arrayvalue.length-1]
     $("#imageViewer").attr('src', `img/${hrefPhotoFrame}`);
  $("a.photo-frame").attr('href',`img/${hrefPhotoFrame}`);
});

$("#imageViewer").click(function(e){

    e.preventDefault();
    // $('</div>').attr('id', 'share-options').appendTo('body');
//     var $div = $('<div />').appendTo('body');
// $div.attr('id', 'share-options');
console.log("event", e.target.currentSrc);

    console.log("click", e.target.currentSrc)
    modal.open({
        content: $content,
        width: 800,
        height: 450
    });

    var anchorHref = e.target.currentSrc;
    var arrayvalue = anchorHref.split('/')
     var hrefPhotoFrame =   arrayvalue[arrayvalue.length-1];
     console.log('image', hrefPhotoFrame);
     $('.modal-content').append("<div id='share-options'></div>");
     $(".modal-content").append("<img id='loader'  src='img/load.gif' width='800' height='400'  class='modalImageBorder'  alt=''>")
      setTimeout(function(){
        $("#loader").remove();
        $("#share-options").append("<img id='imageViewerModal' class='modalImageBorder'  alt=''>");
     $("#imageViewerModal").attr('src', `img/${hrefPhotoFrame}`);

      }, 2000)  
     
})
});*/

class Modal {
    // $window = $(window);
    // $modal = $('<div class="modal"></div>');

    constructor() {
        this.$window = $(window);
        this.$modal = $('<div class="modal"></div>');
        this.$content = $('<div class="modal-content"/>');
        this.$close = $('<button role="button" class="modal-close">close</button>');

        this.$modal.append(this.$content, this.$close);
        this.$close.on('click', (e) => {
            e.preventDefault();
            this.close();
        });
    }

    center() {
        // Distance from top and left to center of modal
        var top = Math.max(this.$window.height() - this.$modal.outerHeight(), 0) / 2;
        var left = Math.max(this.$window.width() - this.$modal.outerWidth(), 0) / 2;
        // Set CSS for the modal
        this.$modal.css({
            top: top + this.$window.scrollTop(),
            left: left + this.$window.scrollLeft()
        });
    }

    open(settings) { // settings contains content, width and height
        this.$content.empty().append(settings.content);
        this.$modal.css({                          // Dimensions
            width: settings.width || 'auto',    // Set width
            height: settings.height || 'auto'   // Set height
        }).appendTo('body');                  // Add to page
        this.center();                       // Call center() again 
        this.$window.on('resize', () => this.center()); // On window resize
    }

    close() {
        // Remove content from the modal window
        this.$content.empty();
        // Remove modal window from the page
        this.$modal.detach();
        // Remove event handler
        this.$window.off('resize');
    }
}



