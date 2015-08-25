'use strict';

$('document').ready(function(){

    /*
     * Hamburger button
     */
    var $menuBtn = $('.js-menu');
    $menuBtn.on('click', function() {
        $('.nav').toggleClass('open');
    });

    /*
     * ScrollIt
     */
    $.scrollIt({
        activeClass: 'active'
    });



    /*
     * Instafeed
     * Load instagram images
     *
     * http://stackoverflow.com/questions/7866898/jslint-to-ignore-undefined-variables
     */

    /*global Instafeed */
    var $loadButton, $loader, feed;

    // grab out load more button and loader
    $loadButton = $('.js-load-more');
    $loader = $('.js-loader');

    feed = new Instafeed({
        get: 'tagged',
        tagName: 'dmjxintro2015',
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
        $loadButton.addClass('hide');
        $loader.removeClass('hide');
        feed.next();
    });

    // run our feed!
    feed.run();



    /*
     * Tab Section
     * Simple jQuery tags
     */
    $('#tab-content div').hide();
    $('#tab-content div:first').show();

    $('#nav li').click(function(event) {
        event.preventDefault();
        $('#nav li a').removeClass('active');
        $(this).find('a').addClass('active');
        $('#tab-content div').hide();

        var indexer = $(this).index(); //gets the current index of (this) which is #nav li
        $('#tab-content div:eq(' + indexer + ')').fadeIn(); //uses whatever index the link has to open the corresponding box
    });

});
