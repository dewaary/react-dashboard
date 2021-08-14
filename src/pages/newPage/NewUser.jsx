import React from 'react'
import "./newUser.css"

export default function NewUser() {
    return (
        <div className="newUser"> 
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div  className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="dewa" />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="Dewa Ari" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="dewa.g.ari28@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="password" />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+62 081804110492" />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="Jalan Pantai Lebih" />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label for="Male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label for="Female">Female</label>
                        <input type="radio" name="gender" id="other" value="other" />
                        <label for="Other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}
