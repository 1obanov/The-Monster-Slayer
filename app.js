new Vue({
	el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
  	gameIsRunning: false,
		turns: []
  },
  methods: {
      startGame: function() {
          this.gameIsRunning = true;
          this.playerHealth = 100;
          this.monsterHealth = 100;
					this.turns = [];
      },
      attack: function() {
        var damage = this.calculateDamage(3, 10);
        this.monsterHealth -= damage;
				this.turns.unshift({
					text: 'Player hits Monster for ' + damage
				});
				this.monsterAttack();
				this.checkWin();
      },

      specialAttack: function() {
        var damage = this.calculateDamage(10, 20);
        this.monsterHealth -= damage;
				this.turns.unshift({
						text: 'Player hits Monster hard for ' + damage
				});
        this.monsterAttack();
				this.checkWin();
      },

      heal: function() {
				var heal = 10;
        var damage = this.calculateDamage(5, 12);
        this.playerHealth -= damage;
				this.playerHealth += heal;
				if (this.playerHealth > 100) {
					this.playerHealth -= damage;
				};
				this.turns.unshift({
					heal: 'Player heals for ' + heal
				});
				this.turns.unshift({
					text: 'Monster hits Player for ' + damage
				});

      },

      giveUp: function() {
				this.gameIsRunning = false;
      },

			calculateDamage: function(min, max) {
				return Math.max(Math.floor(Math.random() * max) + 1, min);
			},

			monsterAttack: function() {
				var damage = this.calculateDamage(5, 12);
				this.playerHealth -= damage;
				this.turns.unshift({
					text: 'Monster hits Player for ' + damage
				});
			},

			checkWin: function() {
				if (this.monsterHealth <= 0) {
          alert('You won! New Game?');
          this.gameIsRunning = false;
          return;
        } else if (this.playerHealth <= 0) {
					alert('You lost! New Game?');
          this.gameIsRunning = false;
				} else {
					return false;
				}
			}
    }
});
