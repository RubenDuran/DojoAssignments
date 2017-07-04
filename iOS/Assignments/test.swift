import UIKit

var starters = [Int]();


for i in 1...255{
    starters.append(i);

}
print(starters);

for i in 0...100{
    var randomNum1 = arc4random_uniform(255) // range is 1 to 255
    var randomNum2 = arc4random_uniform(255) // range is 1 to 255
    print(randomNum1);
    print(randomNum2);
    var temp = starters[Int(randomNum1)];
    starters[Int(randomNum1)] = starters[Int(randomNum2)];
    starters[Int(randomNum2)] = temp;

}



let at42 = starters[42];
print("We found the answer to the Ultimate Question of Life, the Universe, and Everything at index \(at42)")

print(starters);
