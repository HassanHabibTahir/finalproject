import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import DialpadIcon from '@material-ui/icons/Dialpad';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import {Send} from '@material-ui/icons';
import CircularProgress from '@material-ui/core/CircularProgress';
import {withRouter} from 'react-router-dom';
import {SendbanckDetail} from '../../../store/action/cartAction/cartaction'
import { connect } from 'react-redux'; 
class Bankaccount extends Component {
 constructor(){
     super()
     this.state={
         bankname:'',
        //  bankcodeError:'',
         bankcode:'',
         accountnumber:'',
        //  bankaccountError:'',
         loading:false,
     }
 }
 onSelectHandler=(evt)=>{
this.setState({
bankname:evt.target.value
})
 }

 onChangeHandler=(e)=>{
    let name = e.target.name;
    let value = e.target.value;
    this.setState({[name]: value});
 }
//  onBlurBacnkNumberHandler=(e)=>{
//     const {bankcode} = this.state;
//     const re = /^[0-9\b]+$/;
//     let result = re.test(bankcode);
//     if (result) {
//       this.setState({bankcodeError:''})
//    }
//    else{
//     this.setState({bankcodeError:"Please use only Number!"})
//    }
//   }
//   onBlurAccountNumberHandler=(e)=>{
//     const {accountbank} = this.state;
//     const re = /^[0-9\b]+$/;
//     let result = re.test(accountbank);
//     if (result) {
//       this.setState({bankaccountError:''})
//    }
//    else{
//     this.setState({bankaccountError:"Please use only Number!"})
//    }


//   }


  onSubmitHandler=(e)=>{
    // e.preventDefault();
    this.setState({loading:true});
    const {bankcode,bankname,accountnumber} = this.state;
    
          let data = {
            bankcode,
            bankname,
            accountnumber,
            id:e
          }
          // console.log("asdfasd",e)
      this.props.SendbanckDetail(data);
    
     this.setState({
         bankcode:'',
         bankname:'',
         accountnumber:''
     })
  }

    render() {
       console.log(this.state)
      const {bankcode,bankname,accountbank,loading,accountnumber} = this.state
      const isvalid = bankname ==='' || bankcode ==='' || accountbank ===''||accountnumber==='' ||loading ;  
      return (
            <div style={{ marginTop: "10vh" }} >
                 <Grid item xs={12} md={12} className="paddingTop">
                 <Grid container    > 
              <Hidden smDown>
              <Grid item xs={4} md={3}> 
              </Grid>
              </Hidden>
              
               <Grid item xs={12} md={6}>
                 <Paper   className="loginPaper" elevation={10} align="center">
                
                <AccountBalanceIcon   fontSize="large" color="disabled" className="iconFixfield mangaeWithSelect"/>

                      
                  <select name="bankname"
                  onChange={this.onSelectHandler}
                  className="selectSignUp">
                  <option selected disabled value="none">
                 Chose your BankName (online backing services)
                  </option>
                  <option value="Al Baraka Bank (Pakistan) Limited">
                  Al Baraka Bank (Pakistan) Limited.
                  </option>
                  <option value="Askari Bank Limited">
                  Askari Bank Limited
                  </option>
                  <option value="Khyber Pakhtunkhwa">
                  Khyber Pakhtunkhwa
                  </option>
                  <option value="Bank Alfalah Limited">
                  Bank Alfalah Limited.
                  </option>
                  <option value="Bank Al-Habib Limited">
                  Bank Al-Habib Limited
                  </option>
                  <option value="BankIslami Pakistan Limited">
                  BankIslami Pakistan Limited
                  </option>
                  <option value="Citi Bank">
                  Citi Bank
                  </option>
                  <option value="Deutsche Bank A.G">
                  Deutsche Bank A.G.
                  </option>
                  <option value="The Bank of Tokyo-Mitsubishi UFJ">
                  The Bank of Tokyo-Mitsubishi UFJ
                  </option>
                  <option value="Dubai Islamic Bank Pakistan Limited.">
                  Dubai Islamic Bank Pakistan Limited.
                 </option>
                 <option value="Faysal Bank Limited.">
                 Faysal Bank Limited.
                 </option>
                 <option value="First Women Bank Limited.">
                 First Women Bank Limited.
                 </option>
                 <option value="Habib Bank Limited">
                 Habib Bank Limited
                 </option>
                 <option value="Standard Chartered Bank (Pakistan) Limited">
                 Standard Chartered Bank (Pakistan) Limited
                 </option>
                 <option value="Habib Metropolitan Bank Limited">
                 Habib Metropolitan Bank Limited
                 </option>
                 <option value="Industrial and Commercial Bank of China">
                 Industrial and Commercial Bank of China
                 </option>
                 <option value="Industrial Development Bank of Pakistan">
                 Industrial Development Bank of Pakistan
                 </option>
                 <option value="JS Bank Limited">
                 JS Bank Limited
                 </option>
                 <option value="MCB Bank Limited">
                MCB Bank Limited</option>

                 <option value="MCB Islamic Bank Limited">
                 MCB Islamic Bank Limited
                 </option>

                 <option value="Meezan Bank Limited">
                 Meezan Bank Limited
                 </option>

                 <option value="National Bank of Pakistan">
                 National Bank of Pakistan
                 </option>

                 <option value="S.M.E. Bank Limited">
                 S.M.E. Bank Limited
                 </option>

                 <option value="Samba Bank Limited">
                 Samba Bank Limited
                 </option>

                 <option value="Silk Bank Limited">
                 Silk Bank Limited
                 </option>

                 <option value="Sindh Bank Limited">
                 Sindh Bank Limited
                 </option>

                 <option value="Soneri Bank Limited">
                 Soneri Bank Limited
                 </option>
                 <option value="Summit Bank Limited">
                 Summit Bank Limited
                 </option>
                 <option value="The Bank of Khyber">
                 The Bank of Khyber
                 </option>
                 <option value="The Bank of Punjab">
                 The Bank of Punjab
               </option>
               <option value="The Punjab Provincial Cooperative Bank Limited ">
               The Punjab Provincial Cooperative Bank Limited
                 </option>
                 <option value="United Bank Limited">
                 United Bank Limited
                 </option>
                 <option value="Zarai Taraqiati Bank Limited">
                 Zarai Taraqiati Bank Limited
                 </option>
                  </select>
                  <Divider />
                  <Grid item xs={12} md={12} className="paddingTop">
                  <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                    
                            <DialpadIcon fontSize="large" color="disabled" className="iconFixfield" />
                      
                      </InputAdornment>
                    ),
                  }}
              
                fullWidth={true}
                required={true}
                placeholder="Banck Code."
                name="bankcode"
                FormHelperTextProps={{error:true}}
                // helperText={bankcodeError}
                onChange={this.onChangeHandler}
                onBlur={this.onBlurBacnkNumberHandler}
                />
                  </Grid>
                  <Grid item xs={12} md={12} className="paddingTop">
                  <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                    
                            <DialpadIcon fontSize="large" color="disabled" className="iconFixfield" />
                      
                      </InputAdornment>
                    ),
                  }}
              
                fullWidth={true}
                required={true}
                placeholder="Account Number"
                name="accountnumber"
                FormHelperTextProps={{error:true}}
                // helperText={bankaccountError}
                onChange={this.onChangeHandler}
                onBlur={this.onBlurAccountNumberHandler} 
                />
                  </Grid>

                   <Grid item xs={12} md={12} align="center" className="paddingTop">
                    <Button
                    size="large"  variant="text" variant="outlined"  fullWidth={true} color="primary"
                    onClick={()=>this.onSubmitHandler(this.props?.auth?.user)}
                    disabled={isvalid}
                    type="submit"
                    variant="contained" size="small" color="primary" className="singUpBtn">
                        {
                        loading ?
                        <CircularProgress size={20} />
                        :
                        <span>
                        Submit
                    
                            <Send className="iconSize submitIcon"/>
                        
                        </span>
                    }
                    </Button>
                </Grid>
                  </Paper> 
               </Grid>
                </Grid>
                </Grid>
            </div>
        )
    }
}


const mapStateToProps= state=>({
  Products:state.getuserproducts.UserProducts
 
  ,
  auth:state.auth,
  
})

Bankaccount.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    // profile: PropTypes.object.isRequired
  }
  export default withRouter(connect(mapStateToProps,{SendbanckDetail})(Bankaccount));












