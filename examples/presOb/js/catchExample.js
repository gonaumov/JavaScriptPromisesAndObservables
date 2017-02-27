/**
 * Keynote: you can use catch(o1, o2,...) to specify fallback Observable(s) which will take over if the previous one fails
 */

(function () {
    
    let button = document.getElementById("button6");
    let resContainer = document.getElementById("example6Res");
    
    let demoData1 = ['Value one', 'Value two', 'Value three'];
    let demoData2 = ['Value A', 'Value B', 'Value C', 'Value D'];
    let demoData3 = ['Banana', 'Apple', 'Watermelon', 'Lemon', 'Kiwi'];
    
    button.onclick = demo;
    
    function demo() {
        
        resContainer.innerHTML = '';
        let ulNode = document.createElement('UL');
        resContainer.appendChild(ulNode);
        
        let cnt1 = document.getElementById('cnt1').value;
        let cnt2 = document.getElementById('cnt2').value;
        let cnt3 = document.getElementById('cnt3').value;
        
        //create the observable
        let o1 = createObservableFromData(800, demoData1, cnt1);
        let o2 = createObservableFromData(500, demoData2, cnt2);
        let o3 = createObservableFromData(1000, demoData3, cnt3);
        
        let observable = Rx.Observable.catch(o1, o2, o3);
        //create the subscription
        let subscription = observable.subscribe(
                function (nextElem) { makeElemAndAppend(ulNode, `onNext: ${nextElem}`); },
                function (e) {  makeElemAndAppend(ulNode, `onError: ${e}`); },
                function () {  makeElemAndAppend(ulNode, 'onCompleted'); }
          );
        
    };
    
    function createObservableFromData(timegap, data, cnt) {
        return Rx.Observable.interval(timegap).take(cnt).map(function (i) { 
            if(i < data.length) {
                return data[i];
            } else {
                throw new Error("Arrr, we are out of elements!");
            }
             });;
    }
    
    function makeElemAndAppend(ulNode, txt) {
        let liNode = document.createElement("LI");
        let textNode = document.createTextNode(txt);
        liNode.appendChild(textNode);
        ulNode.appendChild(liNode);
    };

}());

