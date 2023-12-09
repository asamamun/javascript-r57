// ==UserScript==
// @name          Automatic Bangla Phonetic Typing Support
// @namespace     http://bengali.sourceforge.net
// @description   Automatically makes all Text input & text-area fields of Chrome browser Bangla phonetic compatible. use Ctrl + Y to switch between Bangla & English
// @include       *
// @exclude 	  http://www.somewhereinblog.net/*
// ==/UserScript==

// abp_version = "1.1";

var all_txt_inp = document.getElementsByTagName('input');
var curTxtInpId;
var i, totConverted = 0;
for(i=0; i< all_txt_inp.length; i++){
    if(all_txt_inp[i].type == "text"){
        var x = all_txt_inp[i];
        // get or set id
        curTxtInpId = x.id;
        if(curTxtInpId == ""){
            x.id = curTxtInpId = "AutoBnPhId" + i;
        }
        // Make phonetic enabled
        x.setAttribute("onmouseover", "makePhoneticEditor('" + curTxtInpId + "');");
    //			x.setAttribute("onmouseover", "alert('hello!')");
    }
}
// now manage the Text Areas
all_txt_inp = document.getElementsByTagName('textarea');
for(i=0; i< all_txt_inp.length; i++){
    x = all_txt_inp[i];
    // get or set id
    curTxtInpId = x.id;
    if(curTxtInpId == ""){
        x.id = curTxtInpId = "AutBnTxtId" + i;
    }
    // Make phonetic enabled
    x.setAttribute("onmouseover", "makePhoneticEditor('" + curTxtInpId + "');");
//			x.setAttribute("onmouseover", "alert('hello!')");
}
       
var ourNewJs = document.createElement("script");
ourNewJs.src = "http://bengali.sourceforge.net/ekushey.js";
ourNewJs.type = 'text/javascript'; 
var headArr = document.getElementsByTagName('head');
headArr[0].appendChild(ourNewJs);

//document.title = "b1.8 "+ " " + document.title;