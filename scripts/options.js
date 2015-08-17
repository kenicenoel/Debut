$(document).ready(function()
{
  chrome.storage.sync.get('backgroundSrc', function(options)
        {

              if(options.backgroundSrc)
              {

                var src= options.backgroundSrc;
                $('body').css('background','url('+src+')');

             }

        });


        var src;
        var searchEngine;
        var footerText;


      // These functions are run when the items on the startpage are clicked

      $(".thumbnail").click(function() // when the images are clicked
      {
        $('#message').css('visibility','hidden');
        src= $(this).attr('src');
        $('body').css('background','url("'+src+'")');
        $('body').css('background-size','cover');
        $('.thumbnail').css('border','none');
        $(this).css('border','2px solid rgb(251, 105, 162)');
      });

      $("#save").click(function() // when the save button is clicked
      {

        searchEngine = $('select').val();
        footerText = $('#footerText').val();


        chrome.storage.sync.set({'searchEngine': searchEngine});
        chrome.storage.sync.set({'footerText': footerText});
        chrome.storage.sync.set({'backgroundSrc': src});

        $('#message').css('visibility','visible');

      });






   });
