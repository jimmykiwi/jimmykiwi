let response = prompt("A tornado has been spotted in your town...to jump in your car and chase it type 'chase'");

if(response === "chase"){
    response = prompt("Great! You're a storm chaser now! To head North type 'north', to head South, type 'south'");
}
if(response === "south"){
  response = prompt("Well, you went the wrong way...to start over hit refresh, to head to Florida, type 'mistake'");
}

if(response==="mistake"){
      response = alert("HURRICANE WARNING...LOSER");
    }

if (response === "north") {
    response = prompt("The hail is coming down hard! To hide under a bridge, type 'bridge'. To take the next turn, type 'turn'");
}

if(response === "bridge"){
  response = alert("The bridge collapsed. Sorry...DEAD.");
}

if (response === "turn") {
    response = prompt("The tornado is straight ahead! To stop and film from afar, type 'film', to drive inside it and film, type 'certain death' ");
  }

  if (response ==="film"){
    response = alert("Wow, you just sold this to the weather channel for $100. Score!")
  }

  if (response ==="certain death"){
    response = alert ("Wow...you've defied the odds and...just kidding. Ya killed.")
  }

else {
  alert("Well, you should've left home...the tornado came to you and you're DEAD");
    }
