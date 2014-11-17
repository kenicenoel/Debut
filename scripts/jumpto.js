function startpage()
{
  var host="opera//"
  var url="startpage";
  window.location.href=current+url;
}

function bookmarks()
{
  var url="opera//bookmarks";
  window.location=url;
}

function downloads()
{
  var url="opera//downloads";
  window.location.replace("opera//downloads","_self");
}

function search()
{
  var query=document.getElementById("google").value;
  var url="https://www.google.com/search?q=";
  window.location.replace(url+query);
}
