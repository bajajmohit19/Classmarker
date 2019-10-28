window.addEventListener('load', bindEvents);

const fn = initCount();
console.log(initCount)
const loadCount = ()=>{
    document.querySelector('#id').innerHTML = fn();
}
function bindEvents (){
    loadCount();
    init();
    displayCount();   
}

init = ()=>{
     document.querySelector('#add').addEventListener('click', addQuestion);
     document.querySelector('#delete').addEventListener('click',deleteRecords);
     document.querySelector('#edit').addEventListener('click', editRecords);
}

updateQuestion = ()=>{
    // var question = new Question();   
    console.log(question)
    for(let key in question){
        console.log(key)
        if(key == 'markForDelete'){
            
            continue;
        }
        if(key == 'id'){
            console.log("inside")
            question[key] = document.querySelector("#"+key).innerText;
            continue;
        }
        question[key] = document.querySelector('#'+key).value
    }
    return question;
}
function clearRecords(){
    document.querySelector('#questions').innerHTML = '';
}

function editRecords (){
    var id = document.querySelector('#id').innerText;
    console.log(id,"121212121")
    var index = questionOp.questions.findIndex(q => q.id == id);
    console.log(index,"121212121")
    // if(updateQuestion()){
        console.log('inside')
        questionOp.questions[index] = updateQuestion();
        // updateQuestion(questionOp.questions[index]);
        console.log(questions)
    // }
    // else return;
    
    console.log(question)
    clearRecords();
    questionOp.questions.forEach(question=> print(question))
}
clearFields = ()=>{
    document.querySelectorAll('.clear').forEach(field=>field.value='');
}
addQuestion = ()=>{
    var question = new Question();
    console.log(question)
    for(let key in question){
        // console.log(key)
        if(key == 'markForDelete'){
            
            continue;
        }
        if(key == 'id'){
            console.log("inside")
            question[key] = document.querySelector("#"+key).innerText;
            continue;
        }
        question[key] = document.querySelector('#'+key).value
    }
    loadCount();
    questionOp.add(question);
    print(question);
    clearFields()
    console.log("@@@@@@@", question);
}

function editQuestion(){
    console.log("edit call", this.getAttribute('qid'))
    var qid = this.getAttribute('qid')
    question = questionOp.search(qid)
    fillInputs(question);

}
function fillInputs(question){
    for(let key in question){
        if(key == 'id'){
            document.querySelector('#'+key).innerText = question[key]
            continue;
        }
        if( key == 'markForDelete'){
            continue;
        }
        document.querySelector('#'+key).value = question[key]
    }
}

print = (question)=>{
    var index = 0;
    var tbody = document.querySelector('#questions');
    var tr = tbody.insertRow();
    for(let key in question){
        if(key == 'markForDelete'){
            continue;
        }
        tr.insertCell(index).innerText = question[key];
        index++;
    }
    var td = tr.insertCell(index);
    td.appendChild(createIcon('fa fa-trash', toggleMark, question.id));
    td.appendChild(createIcon('fa fa-edit', editQuestion, question.id))
    displayCount();

}
displayCount = ()=>{
    document.querySelector('#total').innerText = questionOp.questions.length;
    document.querySelector('#mark').innerText = questionOp.markCount()
    document.querySelector('#unmark').innerText = questionOp.unmarkCount()
}
createIcon = (className, fn, id)=>{
    var button = document.createElement('button');
    button.setAttribute('class', className);
    button.addEventListener('click', fn)
    button.setAttribute('qid', id);
    console.log(button)
    
    return button
}
function toggleMark() {
    console.log("qdqwd",this)
    var attribute = this.getAttribute('qid')
    console.log(attribute)
    var tr = this.parentNode.parentNode;
    console.log(tr)
    tr.classList.toggle('alert-danger')
    questionOp.mark(attribute);
    displayCount()
}
function printRecords(question){
   document.querySelector('#questions').innerHTML = "";
   question.forEach(question => print(question));
   displayCount();
}
const deleteRecords = ()=>{printRecords(questionOp.delete())}
 


