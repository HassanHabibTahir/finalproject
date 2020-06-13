import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getUsersProfiles, DeleteUserprofile, updataElement } from '../../../store/action/adminActions/users/Allusers';
import './users.css'
import { Checkbox, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

class AllUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            typeAdmin: null,
            isVarified: false,
            array: []

        }



    }
    componentDidMount() {
        this.props.getUsersProfiles();

    }




    changedElement = (e, i) => {
        //    console.log(e.target.value)
        if (e.target) {

            if (e.target.checked) {

                this.setState({
                    isVarified: true
                })

            } else {
                this.setState({
                    isVarified: false
                })
            }


        }


    }

    UpdatadataElemt = (id) => {

        const updatation = {
            id: id,
            isVarified: this.state.isVarified
        }

        this.props.updataElement(updatation)
    }


    DeleteUser = (i, id) => {

        console.log(i, id)
        const data = {
            index: i,
            id: id
        }

        this.props.DeleteUserprofile(data)

    }


    render() {


        // console.log(this.props.profile.users)    
        // this.props.profile.users.map((i)=>{
        //     console.log("this is users",i)
        //  })
        const { profile, loading } = this.props.profile;

        console.log("users", profile.users)
        // console.log(profile,loading)
        let profileItems;
        if (profile.users === null || loading) {
            profileItems = <h1>loading.............</h1>;
        }
        else {
            if (profile.users === undefined) {
                profileItems = <h1>loading...........agin..</h1>;
            }
            else {


                console.log(profile.users)




                profileItems = profile.users.map((item, i) => {
                    console.log(item)



                    // // console.log(item)

                    return (

                        <tr key={item._id}>
                            <td>{i}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.PhoneNumber}</td>
                            <td>{item.product}</td>

                            <td>

                                <Checkbox
                                    //    checked={this.state.isVarified==false?"checked":false}
                                    onChange={this.changedElement} value={this.state.isVarified}

                                />
                            </td>
                            <td>   <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => { this.DeleteUser(i, item._id) }}
                                startIcon={<DeleteIcon />}
                            >
                                Delete
                            </Button></td>
                            <td><Button onClick={() => { this.UpdatadataElemt(item._id) }} color="primary" >SAVE</Button></td>
                        </tr>



                    )
                })
            }

            //   profileItems= profile.map((i,item)=>{
            //   return <h1>{item.name}</h1>
            //   })

        }


        return (

            <div style={{ marginTop: '10vh' }}>
                <table style={{width:"100%"}} >
                    <tr>
                        <th>Sr.NO</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone number</th>
                        <th>Product</th>
                        <th>Varification</th>
                        <th>Delete User</th>
                        <th>Admin</th>
                    </tr>
                    {profileItems}
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state
})

export default connect(mapStateToProps, { DeleteUserprofile, getUsersProfiles, updataElement })(AllUser)
