'use strict';

$('document').ready(function(){

    var $loadButton, $loader, feed;


    // grab out load more button and loader
    $loadButton = $('.js-load-more');
    $loader = $('.js-loader');

    feed = new Instafeed({
        get: 'tagged',
        tagName: 'awesome',
        resolution: 'low_resolution',
        limit: 8,
        clientId: '4cc9716d969b44d3abeb1f4751a4586c',
        template: '<li class="photo"><a class="border" href="{{link}}" title="{{caption}}"><img src="{{image}}" alt="Instagram billede"></a></li>',
        // every time we load more, run this function
        after: function() {
            $loader.addClass('hide');
            $loadButton.removeClass('hide');
            // disable button if no more results to load
            if (!this.hasNext()) {
                $loadButton.addClass('hide');
            }
        }
    });

    // bind the load more button
    $loadButton.on('click', function() {
        console.log('You Clicked ...');
        $loadButton.addClass('hide');
        $loader.removeClass('hide');
        feed.next();
    });

    // run our feed!
    feed.run();

});

/* DMJXintro15
 * Add likes/description on hover
 */