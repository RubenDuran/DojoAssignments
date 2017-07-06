//
//  ViewController.swift
//  War
//
//  Created by Ruben Duran on 7/5/17.
//  Copyright © 2017 Ruben Duran. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    var thisDeck = Deck()
    var player1 = Player(name: "Ruben")
    var player2 = Player(name: "Robert")
//    thisDeck.reset()
//    thisDeck.shuffle()

    @IBOutlet weak var card: UILabel!


    @IBAction func dealCardFun(_ sender: UIButton) {
        newDeal()
    }
    @IBOutlet weak var winner: UILabel!
    @IBOutlet weak var player2name: UILabel!
    @IBOutlet weak var player1name: UILabel!
    @IBOutlet weak var card2: UILabel!
    override func viewDidLoad() {
        super.viewDidLoad()
        update()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    func newDeal() {

        let p1=player1.draw(deck: thisDeck)
        let p2=player2.draw(deck: thisDeck)
        print(player1.hand)
        print(player2.hand)
        card.text = (p1?.value)! + " " + player1.hand[0].suit
        card2.text = (p2?.value)! + " " + player2.hand[0].suit

        if player1.hand[0].numerical_value == player2.hand[0].numerical_value {
            winner.text = "Draw"
        }
        else if player1.hand[player1.hand.count-1].numerical_value > player2.hand[player2.hand.count-1].numerical_value {
            winner.text = player1.name
        } else {
            winner.text = player2.name
        }

    }

    func update() {
        thisDeck.shuffle()

        player1name.text = player1.name
        player2name.text = player2.name



    }


}
