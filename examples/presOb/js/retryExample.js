/**
 * Keynote: you can use retry(n) to specify how many times to attemp executing an operation
 */

(function () {
    
    let button = document.getElementById("button7");
    let resContainer = document.getElementById("example7Res");
    
    button.onclick = demo;
    
    function demo() {
        
        resContainer.innerHTML = '';
        let ulNode = document.createElement('UL');
        resContainer.appendChild(ulNode);
        
        let retries = document.getElementById("ex7retries").value;
        let waitForIt = 2;
        //create the observable
        let observable = Rx.Observable.interval(300).map(function () {
            if (waitForIt > 0) {
                waitForIt--;
                throw new Error('Arrr, try again!');
            }
            return 'Success!';
        }).retry(retries).take(1);
        
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