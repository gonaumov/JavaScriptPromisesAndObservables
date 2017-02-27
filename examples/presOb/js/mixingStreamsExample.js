/**
*
*/

(function () {
    
    let buttonConcat = document.getElementById("button5concat");
    let buttonMerge = document.getElementById("button5merge");
    let buttonZip = document.getElementById("button5zip");
    
    let resContainer = document.getElementById("example5Res");
    
    let demoDataFirst = ['Value one', 'Value two', 'Value three', 'Value four'];
    let demoDataSecond = ['Value A', 'Value B', 'Value C', 'Value D', 'Value E', 'Value F'];
    
    buttonConcat.onclick = demoConcat;
    buttonMerge.onclick = demoMerge;
    buttonZip.onclick = demoZip;
    
    function demo(observable) {
        
        resContainer.innerHTML = '';
        let ulNode = document.createElement('UL');
        resContainer.appendChild(ulNode);
        
        //create the observable
        
        
        //create the subscription
        let subscription = observable.subscribe(
                function (nextElem) { makeElemAndAppend(ulNode, `onNext: ${nextElem}`); },
                function (e) {  makeElemAndAppend(ulNode, `onError: ${e}`); },
                function () {  makeElemAndAppend(ulNode, 'onCompleted'); }
          );
        
    };
    
    function demoConcat() {
        let observableFirst = Rx.Observable.from(demoDataFirst);
        let observableSecond = Rx.Observable.from(demoDataSecond);
        
        demo(observableFirst.concat(observableSecond));
    }
    
    function demoMerge() {
        let observableFirst = Rx.Observable.from(demoDataFirst);
        let observableSecond = Rx.Observable.from(demoDataSecond);
        
        demo(observableFirst.merge(observableSecond));
    }
    
    function demoZip() {
        let observableFirst = Rx.Observable.from(demoDataFirst);
        let observableSecond = Rx.Observable.from(demoDataSecond);
        
        demo(observableFirst.zip(observableSecond));
    }
    
    function makeElemAndAppend(ulNode, txt) {
        let liNode = document.createElement("LI");
        let textNode = document.createTextNode(txt);
        liNode.appendChild(textNode);
        ulNode.appendChild(liNode);
    };

}());
