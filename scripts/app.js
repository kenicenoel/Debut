$(document).ready(function()
{
      $(document).keypress(function(event)
      {
        var keypress = event.which;
        if(keypress == 13)
          {
            var query=$("#google").val();
            var url="http://google.com/search?q=";
            window.location.replace(url+query);
          }
      });

      // These functions are run when the items on the startpage are clicked

      $("#icon").click(function() // when the search button is clicked
      {
        var query=$("#google").val();
        var url="http://google.com/search?q=";
        window.location.replace(url+query);
      });

      $("#faves").click(function()  //when the heart icon is clicked
      {
        var iurl="chrome://bookmarks";

      chrome.tabs.update(null, {url:iurl});
      });

        $("#download").click(function() //when the downloads icon is clicked
        {
          var iurl="chrome://downloads/";
          chrome.tabs.update(null, {url:iurl});
        });

      $("#store").click(function()  //when the dial icon is clicked
      {
        var iurl="https://chrome.google.com/webstore/category/extensions?hl=en-US";
        chrome.tabs.update(null, {url:iurl});
      });
   });
