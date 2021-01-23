// git hub link
//https://github.com/Arifur-rahman14/third-asst


// first problem...
//kilometerToMeter

function kilometerToMeter(kMeter) {
    if (kMeter > 0) {
        var meter = kMeter * 1000;
        return meter;
    }
    else {
        console.log("sorry this is not valid measuring unit");
    }
}
var meterResult = kilometerToMeter(-21);
console.log(meterResult);
var checkResult = kilometerToMeter(5);
console.log(checkResult);

// kilometerToMeter program end




// second problem 
//budgetCalculator

function budgetCalculator(watch, phone, laptop) {
    var productOne = watch * 50;
    var productTwo = phone * 100;
    var productThree = laptop * 500;
    var totalBudget = productOne + productTwo + productThree;
    return totalBudget;
}
var budgetResult = budgetCalculator(2, 3, 2);
console.log(budgetResult);

// budgetCalculator program end 




// Problem Number Three
//hotelCost

function hotelCost(timeDuration) {
    var total = 0;
    if (timeDuration <= 10) {
        total = timeDuration * 100;
    } else if (timeDuration <= 20) {
        var firstDay = 10 * 100;
        var secondDay = timeDuration - 10;
        var secondDayCost = secondDay * 80;
        var total = firstDay + secondDayCost;
    } else {
        var firstDay = 10 * 100;
        var secondDayCost = 10 * 80;
        var thirdDay = timeDuration - 20;
        var thirdDayCost = thirdDay * 50;
        var total = firstDay + secondDayCost + thirdDayCost;
    }
    return total;
}

var hotelTotalBill = hotelCost(21);
console.log(hotelTotalBill);





// problem Number four 
//megaFriend

function megaFriend(nameOfFriends) {
    var bigName = "";
    for (var i = 0; i < nameOfFriends.length; i++) {
        if (bigName.length < nameOfFriends[i].length) {
            bigName = nameOfFriends[i];
        }
    }
    return bigName;
}
var friendBigName = megaFriend(["MD. Sirajur Rahman", "Arifur Rahman Khan", "Shakil Howlader", "Akib Chowdhury", "Akhlak Khan"]);
console.log(friendBigName);

// megaFriend program end here

// Author: Arifur Rahman 