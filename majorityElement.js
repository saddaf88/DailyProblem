
/*
* Given a list of elements, find the majority element,
* which appears more than half the time (> floor(len(lst) / 2.0)).
* You can assume that such element exists.
*
* For example, given [1, 2, 1, 1, 3, 4, 0], return 1.
*
*/

function findMajority (list){
    var elementInList = {};
    var maxCount = 0;
    var majorElement = null;

    list.forEach(value => {
        elementInList[value] = 0;
    })

    list.forEach((item) => {
        elementInList[item] = elementInList[item] + 1;
    })

    for(var item in elementInList){
        if(elementInList[item] > maxCount){
            maxCount = elementInList[item];
            majorElement = parseInt(item);
        }
    }
    if(maxCount >= Math.floor(list.length / 2)){
        return majorElement;
    } else {
        return "Sorry!!"
    }

}

console.log(findMajority([1, 2, 1, 1, 3, 4,0]));
