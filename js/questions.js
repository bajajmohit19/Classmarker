class Question {
    constructor(id, name, optionA, optionB, optionC, optionD, rightAns){
        this.id = id;
        this.name = name;
        this.optionA = optionA;
        this.optionB = optionB;
        this.optionC = optionC;
        this.optionD = optionD;
        this.rightAns = rightAns;
        this.markForDelete = false;
    }
}