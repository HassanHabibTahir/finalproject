import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {connect} from 'react-redux';

 class AccountHome extends Component {
    render() {

        console.log(this.props.auth.user)
        return (
            <div style={{marginTop:"10vh"}}>
                <Paper className="paddingBottom" elevation={5}>
         <Grid container spacing={8}> 
           <Grid item  md={2}> </Grid>
           <Grid item md={8} align="center">
             <Grid item>
             <img src={this.props.auth.user.avatar} alt="account"/>
             </Grid>
             <Grid item>
             <Typography variant="display2" > 
               {this.props.auth.user.name}
             </Typography>
             <Divider />
             <Typography variant="body2" > 
               Account Status : active
             </Typography>
             <Typography variant="body2"> 
               Your Name:{this.props.auth.user.name}
             </Typography>
              <Typography variant="body2"> 
             {/* Id:{this.props.auth.user._id} */}
             </Typography>
           <Typography variant="body2"> 
             User:{this.props.auth.user?.userCondition}
           </Typography>
          <Typography variant="body2" > 
               Email : {this.props.auth?.user.email}
             </Typography>
            
             <Divider />
               {/*     <Typography variant="caption" > 
             Address : {this.props.auth.user.address}
             </Typography>
             <Typography variant="caption" > 
             City : {this.props.auth.user.city}
             </Typography>
             <Typography variant="caption" > 
             Province : {this.props.auth.user.province}
             </Typography>
              */}
             </Grid>
           </Grid>
           <Grid item md={2}></Grid>
         </Grid>
        </Paper>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
  })

export default connect(mapStateToProps,null)(AccountHome);