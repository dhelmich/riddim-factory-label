      $(document).ready(function(){
        $('#nav-icon').click(function(){
          $(this).toggleClass('open');
        });
      });

      jQuery(document).ready(function(){
  
        jQuery("#nav-icon").click(function() {

          jQuery(".mobile-nav").slideToggle('swing', function(){
              jQuery(this).toggleClass("nav-expanded").css('display', '')
              });

            });

          });