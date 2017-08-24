module.exports = {
    rockPaperScissors: function (a,b) {
        if( a === b ) {
            return "tie";
        }
        else if ( a === "rock" && b === "scissors" ||
                  a === "paper" && b === "rock" ||
                  a === "scissors" && b === "paper" ) {
                      return "a";
                  }
        return "b";

    }

}