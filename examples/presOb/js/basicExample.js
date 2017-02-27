/**
 * Keynote: An Observable (unlike a Promise) is not limited to a single return value
 */

(function () {
    
    let button = document.getElementById("button1");
    let resContainer = document.getElementById("example1Res");
    
    let demoData = ['Value one', 'Value two', 'Value three', 'Value four'];
    button.onclick = demo;
    
    function demo() {
        
        resContainer.innerHTML = '';
        let ulNode = document.createElement('UL');
        resContainer.appendChild(ulNode);
        
        //create the observable
        let observable = Rx.Observable.from(demoData);
        
        //create the subscription
        let subscription = observable.subscribe(
                function (nextElem) { makeElemAndAppend(ulNode, `onNext: ${nextElem}`); },
                function (e) {  makeElemAndAppend(ulNode, `onError: ${e}`); },
                function () {  makeElemAndAppend(ulNode, 'onCompleted'); }
          );
        
    };
    
    function makeElemAndAppend(ulNode, txt) {
        let liNode = document.createElement("LI");
        let textNode = document.createTextNode(txt);
        liNode.appendChild(textNode);
        ulNode.appendChild(liNode);
    };

}());

