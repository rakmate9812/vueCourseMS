function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min); // helper function: the random number will be between 12 and 5
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 1,
      win: false,
      winText: "",
      monsterDamage: 0,
      playerDamage: 0,
      healValue: 0,
      logs: [],
    };
  },
  methods: {
    //this was a challange - the guy did it with watchers, im lazy to convert it
    checkWin() {
      if (this.playerHealth <= 0 && this.monsterHealth > 0) {
        this.playerHealth = 0;
        this.win = true;
        this.winText = "Monster won :(";
        return;
      }

      if (this.playerHealth > 0 && this.monsterHealth <= 0) {
        this.monsterHealth = 0;
        this.win = true;
        this.winText = "Player won!";
        return;
      }

      if (this.playerHealth <= 0 && this.monsterHealth <= 0) {
        this.playerHealth = 0;
        this.monsterHealth = 0;
        this.win = true;
        this.winText = "Draw";
        return;
      }
    },

    attackMonster() {
      this.playerDamage = getRandomValue(5, 12);
      this.monsterHealth -= this.playerDamage;
      //   console.log(this.monsterHealth);
      this.attackPlayer();
      this.checkWin();
      this.actionLogger("Player", "attacked", `(${this.playerDamage} damage)`);
      this.currentRound++;
    },

    attackPlayer() {
      this.monsterDamage = getRandomValue(5, 15);
      this.playerHealth -= this.monsterDamage;
      this.actionLogger(
        "Monster",
        "attacked",
        `(${this.monsterDamage} damage)`
      );
    },

    specialAttackMonster() {
      this.playerDamage = getRandomValue(10, 25);
      this.monsterHealth -= this.playerDamage;
      this.attackPlayer();
      this.checkWin();
      this.actionLogger(
        "Player",
        "did a special attack",
        `(${this.playerDamage} damage)`
      );
      this.currentRound++;
    },

    healPlayer() {
      this.healValue = getRandomValue(8, 20);
      if (this.healValue + this.playerHealth > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += this.healValue;
      }
      this.attackPlayer();
      this.checkWin();
      this.actionLogger("Player", "healed", `(+${this.healValue} HP)`);
      this.currentRound++;
    },

    surrender() {
      this.playerHealth = 0;
      this.checkWin();
      this.actionLogger("Player", "surrendered");
    },

    restartGame() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.currentRound = 1;
      this.win = false;
      this.winText = "";
      this.monsterDamage = 0;
      this.playerDamage = 0;
      this.healValue = 0;
      this.logs = [];
    },

    actionLogger(who, action, value) {
      log = {
        actionBy: who,
        actionType: action,
        actionValue: value,
      };

      this.logs.unshift(log);
    },
  },
  computed: {
    reduceMonsterHealthStyle() {
      return { width: this.monsterHealth + "%" };
    },

    reducePlayerHealthStyle() {
      return { width: this.playerHealth + "%" };
    },

    disablingSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {},
});
app.mount("#game");
