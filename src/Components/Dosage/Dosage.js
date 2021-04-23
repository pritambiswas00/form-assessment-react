import React from 'react'
import './Dosage.css'

class Dosage extends React.Component {
     constructor(props){
          super(props);

          this.state = {
              inputValue : 0,
              lb : false,
              kg : false,
              result : 0
          }

        this.onInputChange = this.onInputChange.bind(this) 
        this.onClickKg = this.onClickKg.bind(this); 
        this.onClicklb = this.onClicklb.bind(this)
     }
     onInputChange(e){
         this.setState({
             inputValue : e.target.value
         })
     }
     onClicklb(){
         this.setState({
             result : this.state.inputValue,
             kg : false,
             lb : true
         }
         )
     }
     onClickKg(){
          const value = this.state.inputValue * 0.05
         this.setState({
             result : value,
             kg : true,
             lb : false

         })
     }


    render(){
        return (
            <div className="Dosage">
            <h3>Dosing Calculator</h3>
            <hr/>
               <div className="Input">
                  <div className="form-group">
                    <input type="number" required placeholder="Enter your weight" value={this.state.input} onChange={this.onInputChange}/>
                 </div>
                 <div className="btn-group">
                   <button className="btn btn-lb" onClick={this.onClicklb}>lb</button>
                   <button className="btn-btn-kg" onClick={this.onClickKg}>Kg</button>
                 </div>
               </div>
              <div className="form-group">
              <span>{this.state.result}</span>
              </div>
            </div>
        )
    }

}

export default Dosage
