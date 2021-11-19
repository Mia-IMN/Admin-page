import React from 'react'
import ImageAvatars from '../../Global/ImageAvatars'

const Prof = ({firstname, lastname, email}) => {
    return (
        <form className="new-profile">
            <label className="label">First Name:</label><br />
            <input className="inp" type="text" name="newFirstName" id="Newfirstname" placeholder={firstname}/><br />
            <label className="label">Last Name:</label><br />
            <input className="inp" type="text" name="newLastName" id="Newlastname" placeholder={lastname} /><br />
            <label className="label">Email Address:</label>
            <input className="inp" type="email" name="userNewEmail" id="Usernewemail" placeholder={email} /><br />
            <label className="label">New Password:</label>
            <input className="inp" type="password" name="newPassword" id="Newpassword" placeholder="*******" /><br />
            <label className="label">Re-enter Password:</label>
            <input className="inp" type="password" name="" id="" placeholder="*******"/><br />
            <div className="new-image">
            {/* <img src="" alt="new-user-img" /> */}
            <div className="new-avatar">
            <ImageAvatars size={{ width: 56, height: 56 }} />
            </div>
            <div className="selection">
                <input className="input" type="file" name="newUserImg" id="Newuserimg" />
                <div className="removePhoto">
                <input type="checkbox" name="removePhoto" id="Removephoto" />
                <label className="Rem">Remove Photo</label>
                </div>
            </div>
            </div>
            <button className="update-button" >Update Info</button>

        </form>
    )
}

export default Prof
