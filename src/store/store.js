let sub = (obs) => {   
    console.log('0');
}


const state = {
    card:[
        {id:1, textBut :'Коментировать!',stateTextArea:false ,  LinkImage:'7cdc85f7c07275a12438b9a0f878acb8.jpg',text:"Voluptate aute eiusmod non Lorem culpa et commodo laboris non fugiat sunt officia. Minim aute sit non ullamco qui velit exercitation nisi sint tempor. Irure consectetur irure velit commodo. Fugiat laborum est in ipsum voluptate sit mollit. Officia cillum ea in fugiat ut. Veniam ullamco fugiat irure nulla ut ut minim voluptate esse occaecat tempor voluptate. Commodo non incididunt voluptate et pariatur dolore eiusmod proident sunt est."},
        {id:2, textBut :'Коментировать!',stateTextArea:false ,  LinkImage:'devushka_kryilya_perya_volosyi_golubyie.jpg',text:"Voluptate aute eiusmod non Lorem culpa et commodo laboris non fugiat sunt officia. Minim aute sit non ullamco qui velit exercitation nisi sint tempor. Irure consectetur irure velit commodo. Fugiat laborum est in ipsum voluptate sit mollit. Officia cillum ea in fugiat ut. Veniam ullamco fugiat irure nulla ut ut minim voluptate esse occaecat tempor voluptate. Commodo non incididunt voluptate et pariatur dolore eiusmod proident sunt est."},
        {id:3, textBut :'Коментировать!',stateTextArea:true ,  LinkImage:'bleach-blich-anime-ulkiora.jpg',text:"Voluptate aute eiusmod non Lorem culpa et commodo laboris non fugiat sunt officia. Minim aute sit non ullamco qui velit exercitation nisi sint tempor. Irure consectetur irure velit commodo. Fugiat laborum est in ipsum voluptate sit mollit. Officia cillum ea in fugiat ut. Veniam ullamco fugiat irure nulla ut ut minim voluptate esse occaecat tempor voluptate. Commodo non incididunt voluptate et pariatur dolore eiusmod proident sunt est."},
        {id:4, textBut :'Коментировать!',stateTextArea:false ,  LinkImage:'Q6OMqpbRMRE.jpg',text:"Voluptate aute eiusmod non Lorem culpa et commodo laboris non fugiat sunt officia. Minim aute sit non ullamco qui velit exercitation nisi sint tempor. Irure consectetur irure velit commodo. Fugiat laborum est in ipsum voluptate sit mollit. Officia cillum ea in fugiat ut. Veniam ullamco fugiat irure nulla ut ut minim voluptate esse occaecat tempor voluptate. Commodo non incididunt voluptate et pariatur dolore eiusmod proident sunt est."},
        {id:5, textBut :'Коментировать!',stateTextArea:false ,  LinkImage:'7cdc85f7c07275a12438b9a0f878acb8.jpg',text:"Voluptate aute eiusmod non Lorem culpa et commodo laboris non fugiat sunt officia. Minim aute sit non ullamco qui velit exercitation nisi sint tempor. Irure consectetur irure velit commodo. Fugiat laborum est in ipsum voluptate sit mollit. Officia cillum ea in fugiat ut. Veniam ullamco fugiat irure nulla ut ut minim voluptate esse occaecat tempor voluptate. Commodo non incididunt voluptate et pariatur dolore eiusmod proident sunt est."},
        {id:6, textBut :'Коментировать!',stateTextArea:false ,  LinkImage:'devushka_kryilya_perya_volosyi_golubyie.jpg',text:"Voluptate aute eiusmod non Lorem culpa et commodo laboris non fugiat sunt officia. Minim aute sit non ullamco qui velit exercitation nisi sint tempor. Irure consectetur irure velit commodo. Fugiat laborum est in ipsum voluptate sit mollit. Officia cillum ea in fugiat ut. Veniam ullamco fugiat irure nulla ut ut minim voluptate esse occaecat tempor voluptate. Commodo non incididunt voluptate et pariatur dolore eiusmod proident sunt est."},
        {id:7, textBut :'Коментировать!',stateTextArea:true ,  LinkImage:'bleach-blich-anime-ulkiora.jpg',text:"Voluptate aute eiusmod non Lorem culpa et commodo laboris non fugiat sunt officia. Minim aute sit non ullamco qui velit exercitation nisi sint tempor. Irure consectetur irure velit commodo. Fugiat laborum est in ipsum voluptate sit mollit. Officia cillum ea in fugiat ut. Veniam ullamco fugiat irure nulla ut ut minim voluptate esse occaecat tempor voluptate. Commodo non incididunt voluptate et pariatur dolore eiusmod proident sunt est."},
        {id:8, textBut :'Коментировать!',stateTextArea:false ,  LinkImage:'Q6OMqpbRMRE.jpg',text:"Voluptate aute eiusmod non Lorem culpa et commodo laboris non fugiat sunt officia. Minim aute sit non ullamco qui velit exercitation nisi sint tempor. Irure consectetur irure velit commodo. Fugiat laborum est in ipsum voluptate sit mollit. Officia cillum ea in fugiat ut. Veniam ullamco fugiat irure nulla ut ut minim voluptate esse occaecat tempor voluptate. Commodo non incididunt voluptate et pariatur dolore eiusmod proident sunt est."},
   
    ],
    addPost:{
        activeForm:true,
        text:'',
        image:'',
    },
    getState(){
        return(
            this.card
        )
    },
    setState(oldd , neww){
        // debugger
        oldd = neww
        return (
            sub()
        )
    },
    dispatch(action){
        if(action.type == "ADDPOST"){
            console.log( action.callback)
           
        }
    },
    sub(obsever){
        sub = obsever
    }
}


export default state