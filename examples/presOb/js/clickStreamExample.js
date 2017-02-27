/**
* Keynote: you can use events as a source for an Observable
*/

(function () {
    
    //let button = document.getElementById("button3");
    let resContainer = document.getElementById("example3Res");
    
    demo();
    
    function demo() {
        
        resContainer.innerHTML = '';
        let ulNode = document.createElement('UL');
        resContainer.appendChild(ulNode);
        
        //create the observable
        let clickButton = document.getElementById('button3ClickMe');
        let observable = Rx.Observable.fromEvent(clickButton, 'click');
        
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