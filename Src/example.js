function showPic( whichPic)
{
    var source = whichPic.getAttribute("href");
    if(!source) return true;
    var placeholder = document.getElementById("placeholder");
    if(!placeholder) return true;
    placeholder.setAttribute("src", source);
    var text = whichPic.getAttribute("title");
    if(!text) return true;
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
    return false;
}

function prepareGallery()
{
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;

    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i =0; i < links.length; ++i)
    {
        links[i].onclick = function ()
        {
           return showPic(this);
        }
    }
}

function addLoadEvent(func)
{
    var oldLoadFuc = window.onload;
    if(typeof window.onload != 'function')
    {
        window.onload = func;
    }
    else
    {
        window.onload = function(){
            oldLoadFuc();
            func();
        }
    }
}


addLoadEvent (prepareGallery);