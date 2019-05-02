import React , {Component} from 'react'


export default class Form extends Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <form>
             <div class="form-group">
               <label for="exampleFormControlFile1">Выберете Файлик!</label>
               <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                <label for="textInput">Напишите ваше мнение!</label>
               <input id="textInput" class="form-control" type="text" placeholder="Default input"></input>
             </div>
             </form>
        )
    }
}