new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false,
		

	}, computed: {

	}, methods: {
		startGame : function() {
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
		}, attack : function() {
			var damage = this.calculateDamage(3, 10);
			this.monsterHealth -= damage;

			damage = this.calculateDamage(5, 12);
			this.playerHealth -= damage;

			this.checkWin();
		}, specialAttack : function(){
			var damage = this.calculateDamage(10, 20);
			this.monsterHealth -= damage;

			this.checkWin();
		}, heal : function(){
			var heal = this.calculateDamage(3, 10);
			this.playerHealth += heal;
		}, giveUp : function(){
			this.gameIsRunning = false
		}, calculateDamage : function(min, max){
			return Math.max(Math.floor(Math.random() * max) + 1, min);
		}, checkWin: function(){
			if (this.playerHealth <= 0 ){
				alert('You lost!');
				this.gameIsRunning = false;
				return true;
			} else if (this.monsterHealth <= 0 ){
				alert('You win!');
				this.gameIsRunning = false;
				return false;
			} 
		}
	}
})