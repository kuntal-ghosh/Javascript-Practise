const person = {
  name: "arnob",
  hi: function b() {
    var a = () => {
      console.log(this.name);
    };
    return a();
  }
};

person.hi();
