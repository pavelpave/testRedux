import React ,{Component} from 'react'
import 'jquery'
import Coll from './coll'
import Form from './form'
export default class Body extends Component{
   constructor(props){
       super(props)
       this.state = props.state
       this.test =this.test.bind(this)
   }
   mapCard(){
    let newMassAjax = this.state.card.map((el , i)=>{
        return(
          <div className="row"> <Coll key={i} keyId={el.id} text={el.text} linkImage={el.LinkImage} 
            stateTextArea={el.stateTextArea} state={this.state}/>	</div> 
        )
    })
    return newMassAjax
}
test(){
  this.state.dispatch({type:"ADDPOST",callback:"qwe"})  
}
    render(){
        return(
           <div className="container" onClick={this.test}>
            
            {this.mapCard()}
            {/* <div className="btn btn-outline-danger MystyleAddpost">
               {this.state.addPost.activeForm ? <Form /> : 'Добавить Пост!'} 
            </div> */}
           
        </div>
        )
    }
}