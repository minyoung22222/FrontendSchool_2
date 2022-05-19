class Sausage {
    constructor(taste1, taste2) {
        this.taste1 = taste1;
        this.taste2 = taste2;
    }

    taste() {
        console.log(`내 소세지는 ${this.taste1}와(과) ${this.taste2} 맛이 난다!!`);
    }
}

class FireSausage extends Sausage {
    taste() {
        console.log('불맛불맛불맛');
    }
    
}

const mySausage = new FireSausage('소고기','파');