function BountyBoard(){
var bountys = []
Bounty = prompt("How big of a bounty are you looking for?")
  if (Bounty <= 50000) {
    bountys = ["John The Bad", "Baby Oni","Uglaaa Cameron"]
    crimes = ["Copyright Infringement", "Stealing baby formulas", 'Stole the fake mustaches']
  }
  else if (Bounty <= 100000) {
    bountys = ["Nygel Cooper", "Tyler","Ibrahim the defiled"]
    crimes = ["Stole all the pi’s", "Made bootleg copies of shrek 3", 'Stealing propane and propane accessories']
  }
  else if (Bounty <= 200000) {
    bountys = ["Uncle Gubsy", "Tiller","Midnight"]
    crimes = [" He went: Gub gub gub gub gub gub gub gub gub gub gub gub gub gub gub gub gub gub gub", "Donkey punching", 'Bad Gramer and Spelling']
  }
  else if (Bounty <= 300000) {
    bountys = ["Gandalf", "Irvine","The Cheater"]
    crimes = ["Being a Wizard", "Took my break Away", 'Cheated on a test']
  }
  else if (Bounty <= 400000) {
    bountys = ["Patrick the Graphic Blender", "The Weeb","Touri"]
    crimes = ["Created a Doomsday device using blender", "Created my game page using Weebly", 'Did Everything wrong ever']
  }
  else{
    bountys = ["Noir Knight", "Jiren the gray","Fleece Johnson"]
    crimes = ["Everything", "Existed", 'Becoming the booty god']
  }
BountyPrice = Bounty
Bounty = bountys[Math.floor(Math.random() * 3)]
alert(BountyPrice + " " + Bounty)
}
