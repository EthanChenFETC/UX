$(document).ready(function(){

    var Header = '/en/base/header_en.html';

    //  Loading Header
    if (window.FETC.Current_Header == "home") {
        Header = '/en/base/index_header.html';
    }

    $("#header").load(Header, function(){
        // Header = Header + "?" + new Date().getTime();
        $("#maincss").load();
        //  Loading nav
        jQuery("#navWrap").load('/en/base/nav_en.html', function(){
            //header navigation dropdown
            jQuery('#navWrap ul li').hover(
                function(){
                    if (!jQuery(this).hasClass('hover')){
                        jQuery(this).addClass('hover');
                        jQuery(this).find('.ddNav').show();
                    }

                },
                function(){
                    var thisli = jQuery(this);
                    jQuery(this).find('.ddNav').hide(0, function(){
                        thisli.removeClass('hover');
                    });
                }
            );

            if (window.FETC.Current_Header == "") {
                cloudFloat();
            }

        });

        //marquee
        jQuery('marquee').marquee().mouseover(function(){
            jQuery(this).trigger('stop');
        }).mouseout(function(){
            jQuery(this).trigger('start');
        });

    });

   
    //  Loading Footer
    $("#footer").load('/en/base/footer_en.html', function(){

    });

    //  Loading Sub Nav.
    if (window.FETC.Current_SubNav != '') {
        $("#innerNav").load(window.FETC.SubNav[window.FETC.Current_SubNav], function(){
            
        });
    }

    //run once when ready
    jQuery('#headBanner .sideNav').delay(200).animate({
        marginLeft: '0px'
    }, 500);

    
    //clouds floating
    function cloudFloat() {
        if (!isIE(6)) {

            jQuery('#headCloud').animate({
                opacity: 1
            }, { quenu: false, easing: 'linear', step: function() { }, duration: 300, complete: function() {

            } 
            });

            jQuery('#headCloud').animate({
                backgroundPosition: '+=1008px'
            }, { quenu: false, easing: 'linear', step: function() { }, duration: 35000, complete: function() {

                jQuery(this).animate({
                    opacity: 0
                }, { quenu: false, step: function() { }, duration: 300, complete: function() {
                    jQuery(this).css('background-position', '0px');

                } 
                });

                cloudFloat();
            } 
            });

        }

    }

    //check ie version
    var isIE = function(ver) {
        var b = document.createElement('b')
        b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->'
        return b.getElementsByTagName('i').length === 1
    }

    
        
});