const wizard = {
  name: "wizard",
  health: 0,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  }
};

const archer = {
  name: "archer",
  health: 30
};
console.log("1", archer);
//wizard.heal.call(archer, 20, 20);
wizard.heal.apply(archer, [20, 200]);
console.log("2", archer);
