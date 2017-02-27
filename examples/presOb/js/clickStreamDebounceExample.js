/**
* Keynote: you can use the debounce function to ignore values emitted in rapid succession
*/

(function () {
    
    //let button = document.getElementById("button3");
    let resContainer = document.getElementById("example4Res");
    
    demo();
    
    function demo() {
        
        resContainer.innerHTML = '';
        let ulNode = document.createElement('UL');
        resContainer.appendChild(ulNode);
        
        //create the observable
        let clickButton = document.getElementById('button4ClickMe');
        let observable = Rx.Observable.fromEvent(clickButton, 'click').debounce(250);
        
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