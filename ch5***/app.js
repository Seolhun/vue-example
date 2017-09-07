new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false,
		turns: []
	}, computed: {

	}, methods: {
		startGame : function() {
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
		}, attack : function() {
			var damage = this.calculateDamage(3, 10);
			this.turns.unshift({
				isPlayer: true,
				text: 'Player hits Monster for ' + damage
			});

			this.monsterHealth -= damage;
			this.monsterAttack();

			this.checkWin();
		}, monsterAttack : function() {
			damage = this.calculateDamage(5, 12);
			this.playerHealth -= damage;
			this.turns.unshift({
				isPlayer: false,
				text: 'Monster hits Player for ' + damage
			});

		}, specialAttack : function(){
			var damage = this.calculateDamage(10, 20);
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
				text: 'Player special hits Monster for ' + damage
			});

			this.monsterAttack();

			this.checkWin();
		}, heal : function(){
			var heal = this.calculateDamage(3, 10);
			this.playerHealth += heal;
		}, giveUp : function(){
			this.reset();
			this.gameIsRunning = false;
		}, calculateDamage : function(min, max){
			return Math.max(Math.floor(Math.random() * max) + 1, min);
		}, checkWin: function(){
			if (this.playerHealth <= 0 ){
				alert('You lost!');
				this.gameIsRunning = false;
			} else if (this.monsterHealth <= 0 ){
				alert('You win!');
				this.gameIsRunning = false;
			}
		}, reset : function(){
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.turns = [];
		}
	}
})