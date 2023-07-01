function testeprint(a){
    a.innerText = "gameplay";
}

class Baralho{
    constructor() {
        this.stack = [];
     }
     add(carta) {
        return this.stack.push(carta);
     }
     remove() {
        if (this.stack.length > 0) {
            stack.pop();
        }
     }
     peek() {
        return (this.stack[this.stkArr.length - 1]);
     }
     isEmpty() {
        return this.stack.length == 0;
     }
     size() {
        return this.stack.length;
    }
     clear() {
        this.stack = [];
     }
  }
/*
  let baralho = new Baralho();
  baralho.add(1);
  baralho.add(2);
  baralho.add(3);
  baralho.add(4);
  baralho.add(5);
  console.log(baralho);
*/
