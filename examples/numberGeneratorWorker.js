for (var i = 0 ; i < 900000 ; i++) {
    postMessage(i);
}
postMessage('All done !');
close();
