import React from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import './Appoinment.css'
import TimePicker from 'react-time-picker';
import { motion } from 'framer-motion'

class Appointment extends React.Component {
       constructor(props){
           super(props);

           this.state = {
               name : '',
               phoneNumber : '',
               email : '',
               date : new Date(),
               time : '10:00',
               reason: '',
               checkout : false
           }
           this.onChangeName = this.onChangeName.bind(this);
           this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
           this.onChangeEmail = this.onChangeEmail.bind(this);
           this.onChangeDate = this.onChangeDate.bind(this);
           this.onChangeTime = this.onChangeTime.bind(this);
           this.onChangeReason = this.onChangeReason.bind(this);
           this.onChangeCheckout = this.onChangeCheckout.bind(this);
           this.onCancelHandler = this.onCancelHandler.bind(this)
       }

   componentDidMount(){
     console.log(this.props)
   }

       onChangeName(e){
        this.setState({
          name : e.target.value
        })
      }
      onChangePhoneNumber(e){
        this.setState({
          phoneNumber : e.target.value
        })
      }
  
      onChangeEmail(e){
        this.setState({
          email : e.target.value
        })
      }
  
      onChangeDate(date){
        this.setState({
          date : date
        })
      }

      onChangeTime(time){
          this.setState({
              time : time
          })
      }
      onChangeReason(e){
        this.setState({
            reason : e.target.value
        })
    }
    onChangeCheckout(e){
        this.setState({
            checkout : true
        })
    }
    onCancelHandler(){
       this.props.history.push('/');
    }
    render(){
        return (
            <motion.div initial={{
              x: -100
            }} animate={{
              x : 0
            }} className="Appoinment alert alert-secondary alert-dismissible fade show" role="alert">
                 <h3>Book an Appointment</h3>
                 <button type="button" class="close" data-dismiss="alert" onClick={this.onCancelHandler} aria-label="Close">
                 <span aria-hidden="true">&times;</span>
                 </button>
                 <hr/>
                 <form className="Form">
                   <div className="form-group">
                     <label className="text-left">Name</label>
                      <input
                       className="form-control shadow-none"
                        type="text"
                        required
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                    <label>Phone Number</label>
                     <input
                      className="form-control shadow-none"
                       type="text"
                       required
                       placeholder="Enter PhoneNumber"
                       value={this.state.phoneNumber}
                       onChange={this.onChangePhoneNumber}
                       />
                   </div>
                   <div className="form-group">
                   <label>Email</label>
                    <input
                     className="form-control shadow-none"
                      type="email"
                      required
                      placeholder="Enter Email"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      />
                  </div>
                  <div className="form-group">
                  <label>Date</label>
                   <div>
                      <DatePicker 
                      className="form-control shadow-none"
                       selected={this.state.date}
                       onChange={this.onChangeDate}
                      />
                   </div>
               </div>
               <div className="form-group">
               <label>Time </label>
                <div>
                   <TimePicker 
                   className="form-control shadow-none"
                    value={this.state.time}
                    onChange={this.onChangeTime}

                   />
                </div>
            </div>
            <div className="form-group">
            <label>Reason for the Appoinment</label>
             <textarea
              className="form-control shadow-none"
               type="text"
               required
               placeholder="Reason for the Appoinment"
               value={this.state.reason}
               onChange={this.onChangeReason}
               />
            </div>
               <div className="form-check">
                <input className="form-check-input" type="checkbox" value={this.state.checkout} onChange={this.onChangeCheckout}/>
                <label class="form-check-label" >
                Check me out
                </label>
               </div>
  
               <div className="form-check float-right">
                 <button className="btn btn-danger mr-2" onClick={this.onCancelHandler}>Close</button>
                 <button type="submit" className="btn btn-primary ml-2">Save Changes</button>
               </div>
                 </form>
            </motion.div>
        )
    }
  
}

export default Appointment;
