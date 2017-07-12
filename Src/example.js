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


function addElemet()
{
    var para = document.createElement("p");

    var txt = document.createTextNode("This is ");
    
    para.appendChild(txt);

    var child2 = document.createElement("em");
    var child2Txt = document.createTextNode("my");
    child2.appendChild(child2Txt);
    para.appendChild(child2);

    var txt2 = document.createTextNode(" content.");
    para.appendChild(txt2);

    var parent= document.getElementById("testdiv");
   // if(!parent) return false;

    parent.appendChild(para);

  //  return true;
}

addLoadEvent (prepareGallery);
addLoadEvent (addElemet);