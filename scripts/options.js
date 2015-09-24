$(document).ready(function()
{
  chrome.storage.sync.get('backgroundSrc', function(options)
        {

              if(options.backgroundSrc)
              {

                var src= options.backgroundSrc;
                $('body').css('background','url('+src+')');
                $('body').css('background-size','cover');

             }

        });
        var src;
        var email;
        var searchEngine;
        var footerText;



// Check if there are preset values for the search engine, mail and footer and if so
// make the values of the declared variables above equal to that incase the user makes no changes and hits save
        chrome.storage.sync.get('searchEngine', function(options)
              {

                    if(options.searchEngine)
                    {

                      searchEngine = options.searchEngine;
                      $("#searchbar").val(searchEngine);


                   }

              });


              chrome.storage.sync.get('mail', function(options)
                    {

                          if(options.mail)
                          {

                            email= options.mail;
                            $("#mail").val(email);


                         }

                    });

                    chrome.storage.sync.get('footerText', function(options)
                          {

                                if(options.footerText)
                                {

                                  footerText= options.footerText;
                                  $("#footerText").val(footerText);


                               }

                          });


      // when the thumnail image is clicked
      $(".thumbnail").click(function() // when the images are clicked
      {
        // $('#message').css('visibility','hidden');
        src= $(this).attr('src');
        $('body').css('background','url("'+src+'")');
        $('body').css('background-size','cover');
        $('.thumbnail').css('border','none');
        $(this).css('border','2px solid rgb(251, 105, 162)');
      });

      // when the save button is clicked
      $("#save").click(function() // when the save button is clicked
      {

        if($('#searchbar').val() != null)
        {
          searchEngine = $('#searchbar').val();
        }

        if($('#mail').val() != null)
        {
          email = $('#mail').val();
        }

        if($('#footerText').val() != "")
        {
          footerText = $('#footerText').val();
        }




        // set the updated options
        chrome.storage.sync.set({'searchEngine': searchEngine});
        chrome.storage.sync.set({'mail': email});
        chrome.storage.sync.set({'footerText': footerText});
        chrome.storage.sync.set({'backgroundSrc': src});



        // setup the notification object
          var options =
          {
            type: "basic",
            title: "Hey there,",
            message: "Your settings have been successfully saved!",
            iconUrl: "images/icon128.png"
          }


          // Check to see if a notification exits
          chrome.notifications.getAll(function (alerts)
          {
            var id="info";
            for(id in alerts)
            {
              // Clear notification if it already exists
              chrome.notifications.clear(id, function () {});
            }
          });

          // create a notification
          chrome.notifications.create('info', options, function () {} );



        var iurl="startpage.html";

        // chrome.tabs.update(null, {url:iurl});
        window.location.replace(iurl);




      });

   });
