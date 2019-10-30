const questionOp = {
    questions: [],
    add(questionObject) {
        this.questions.push(questionObject);
    },
    markCount() {
        console.log('call', this.questions.filter(questionObject => questionObject.markForDelete).length)
        return this.questions.filter(questionObject => questionObject.markForDelete).length;
    },
    unmarkCount() {
        return this.questions.length - this.markCount()
    },
    mark(id) {
        var mark = this.search(id);
        mark.markForDelete = !mark.markForDelete
    },

    search(id) {
        return this.questions.find((questionObject) =>
            questionObject.id == id
        )
    },
    delete() {
        return this.questions = this.questions.filter(question => !question.markForDelete)
    },
    edit(id) {
        var questionObject = this.questions.find(question => question.id == id);
        return questionObject;
    },
    search(query) {
        return this.questions.find((question) =>
            question.id == query || question.name == query
            )
    },
    sort(sort){
        if(sort == 'id'){
            var arr = [...this.questions];
            arr.sort((a,b)=> a[sort]-b[sort])
            return arr;
        }else if(sort == 'name'){
            var arr = [...this.questions];
            arr.sort((first, second)=>first[sort].localCompare(second[sort]))
            return arr
        }else return false;
    }
}