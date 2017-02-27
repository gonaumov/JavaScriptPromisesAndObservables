/* 
* Keynote: you can set how Observable emits values
 */

(function () {
    
    let button = document.getElementById("button2");
    let resContainer = document.getElementById("example2Res");
    
    let demoData = ['Value one', 'Value two', 'Value three', 'Value four', 'Value five', 'Value six (final)'];
    button.onclick = demo;
    
    function demo() {
        
        resContainer.innerHTML = '';
        let ulNode = document.createElement('UL');
        resContainer.appendChild(ulNode);
        
        let timegap = document.getElementById('ex2Timegap').value;
        let takeCnt = document.getElementById('ex2Take').value;
        //create the observable (note: check also takeUntil(condition) alternative to take(n))
        let observable = Rx.Observable.interval(timegap).take(takeCnt).map(function (i) { 
            if(i < demoData.length) {
                return demoData[i];
            } else {
                throw new Error("Arrr, we are out of elements!");
            }
             });
        
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
