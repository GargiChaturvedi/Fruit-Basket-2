class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.fruits = 0;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function(data){
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        })
    }

    updateNameDistanceFruits() {
        var playerIndex = 'players/player' + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            fruits: this.fruits
        })
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data)=>{
            allPlayers = data.val();
        })
    }

    /*
    static getWinner() {
        var rank = database.ref('players/player' + this.index + '/rank');
        rank.on("value", (data)=>{
            this.rank = data.val();
        });
    }

    static updateWinner(rank) {
        if(this.fruits >= 10) {
            rank++;
            this.rank += 1;
        }
        database.ref('players/player' + this.index + '/rank').update({
            rank: rank
        });
    }
    */
}