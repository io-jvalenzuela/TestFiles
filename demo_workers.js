var i=0;

function timedCount() {
    i=i+1;
    postMessage(i,event.origin);
    setTimeout("timedCount()", 500);
}

timedCount();
