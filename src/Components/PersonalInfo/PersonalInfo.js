import React, { useContext } from 'react';
import { ContextForUser } from '../../App';
import './PersonalInfo.css';

// this component will show the information of the user that is logged in

const PersonalInfo = () => {

  // initializing the default user
    const defaultUser  = {
        name:"not set" ,
        email: "not set" ,
        photo: "not set" ,
        isLoggedInOrNot : false
      } 

      // initializing the name , email and photo of the user
    let userName = defaultUser.name ;
    let userEmail = defaultUser.email ;
    let userPhoto = 'https://static.thenounproject.com/png/5024-200.png' ;

    // initializing the context for user data
      const userInfoFromContext = useContext(ContextForUser);

      // setting the data of the user
      if (userInfoFromContext[0].isLoggedInOrNot === true){
        userName = userInfoFromContext[0].name;
        userEmail = userInfoFromContext[0].email;
        userPhoto = userInfoFromContext[0].photo;
      }
      
    return (
        <div className="PersonalInfoMainDiv">
            <div className="infoCardDiv">
                <img src={userPhoto} alt=""/>
                <br/><br/>
                <div className="dataDiv">
                    <p><small>Name : </small><strong>{userName}</strong></p>
                    <br/>
                    <p><small>Email : </small><strong>{userEmail}</strong></p>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;