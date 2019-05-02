import React ,{Component} from 'react'
export default class Coll extends Component {
  constructor(props){
      super(props)
      this.text = props.text
      this.LinkImage = props.linkImage
      this.clickBut = this.clickBut.bind(this)
      this.onChangeArea= this.onChangeArea.bind(this)
      this.image = require(`../image/${this.LinkImage}`)
      this.stateTextArea = props.stateTextArea
      this.state = props.state
      this.keyId = props.keyId
  }
  clickBut(e){
    if ( this.stateTextArea){
      return(
        this.state.setState(this.stateTextArea , this.stateTextArea = false)
    )
    }else{
      return(
        this.state.setState(this.stateTextArea , this.stateTextArea = true)
    )
    }
    
  }
  onChangeArea(e){
    // console.log(e.target.value);
   return this.state.setState(this.text = e.target.value ,this.text =  e.target.value)
    
  }
    render(){
        return(
            <div className="col-sm" id={this.keyId}>
               <div class="card" >
                    <img src={this.image} class="card-img-top" alt={this.image}/>
                    <div class="card-body">
                      <h5 class="card-title">Название карточки</h5>
                      { this.stateTextArea ? <textarea onChange={this.onChangeArea} className="textArea"></textarea> : <p class="card-text">{this.text}</p>}
                      
                      <a href={`#${this.keyId}`} class="btn btn-primary" onClick={this.clickBut}>
                      {this.stateTextArea ?'Опубликовать Коментарий!': 'Коментировать!' }
                      </a>
                    </div>
                </div>
              </div>
        )
    }
}