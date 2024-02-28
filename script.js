class Ninja {
    constructor(nombre, salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName(){
        console.log('El nombre del ninja es ' + this.nombre);
    }
    showStats(){
        // console.log('La salud del Ninja es ' + this.salud);    
        console.log(`La salud del Ninja es ${this.salud}, Su velocidad es de ${this.velocidad}`);
    }
    drinkShake(){
        this.salud+=10;
        console.log(`La salud del Ninja aumentó a ${this.salud}`);
    }
}

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkShake();


class Sensei extends Ninja{ //Clase Sensei es el hijo de Ninja, con extends se hereda
    constructor(nombre, salud, sabiduria){ 
        super(nombre, salud);  //Super utiliza los datos del constructor para sus atributos
        this.sabiduria = sabiduria;
    }
    speakWisdom(){
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}

const sensei1 = new Sensei("Nitsuga", 200, 10);
sensei1.sayName();
sensei1.showStats();
sensei1.speakWisdom();