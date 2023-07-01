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
     print(){
        for(var i = 0; i<this.stack.length; i++)
            console.log(this.stack[i].carta);
     }
     size() {
        return this.stack.length;
    }
     clear() {
        this.stack = [];
    }
}

class Carta{
    constructor(v, n){ //valor da carta e naipe, respectivamente
        this.naipe = n;
        this.valor = v;
        this.carta = v+n;
    }
    print(){
        console.log(this.carta);
    }


}
  let baralho = new Baralho();

  for(var i=0; i<3; i++){
    for(var j=1; j<=13; j++){
        if(i == 0)
            var n = 'C';
        else if(i == 1)
            var n = 'E';
        else if(i==2)
            var n = 'P';
        else
            var n = 'O';
        var v = j.toString();
        baralho.add(new Carta(v, n));
    }   
  }
  baralho.print();
