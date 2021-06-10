import React, { useState } from 'react';
import { Link } from '@reach/router';
import '../App.css';
import PrizeLogo from '../prizes.png';
import PubConnectLarge from '../PC-large.png'
import { Button, Heading, TextField, Typography } from '@material-ui/core';
import { Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear'

const useStyles = makeStyles((theme) => ({
    input: {
        margin: theme.spacing(1)
    },
    card: {
        backgroundColor: '#00758d',
        color: 'white',
        fontSize: 16
    }
}))

function Login() {
    sessionStorage.clear();
    const [usernames, setUserNames] = useState([""]);
    const [namesCounter, setNamesCounter] = useState([0]);
    const [email, setEmail] = useState();
    const classes = useStyles();

    const addNameField = () => {
        setNamesCounter([...namesCounter, namesCounter.length]);
        setUserNames([...usernames, ""]);
    }

    const removeNameField = (index) => {
        let removedArray = usernames.slice();
        removedArray.splice(index, 1);
        setUserNames(removedArray);
    }

    return (
        <div style={{ height: '100%', margin: 0 }}>
            <div className="login_wrap">
                <div className="logoBar"><a><img className="login_logo" src={PubConnectLarge}></img></a></div>
                <div className="form">
                    <div className="form-text">
                        <h2 className="center"><b>Thank you for participating in our PubConnect Testbed Survey!</b></h2>
                        <br />
                        <div>The survey should take about 10 minutes to complete and has two short parts:
                            <p className="form-bullet">1) We identify you in Microsoft Academic by whatever name(s) you have published under. </p>
                            <p className="form-bullet">2) Then we show you all the papers listed for you in Microsoft Academic and ask you to select the testbed(s) used in that research.</p>
                        </div>
                    </div>
                    <br />
                    <div><p>Enter your first and last name in the fields below.</p> <p>If you have published under more than one name, please click the + button to add those other names.</p></div>
                    <div className="form-action">
                        <div className="form-action-input">
                            {usernames.map((username, index) =>
                                <div key="index" className="login_namefield"><TextField variant="outlined" label="Name" fullWidth="true" className={classes.input} value={username} placeholder="John Doe" onChange={(e) => {
                                    let newArray = usernames.slice();
                                    newArray[index] = e.target.value;
                                    setUserNames(newArray);
                                }}></TextField>{index === 0 ? <span /> : <ToggleButton size="small" onClick={() => removeNameField(index)}><ClearIcon /></ToggleButton>}</div>)}</div>
                        <br />
                        <div><ToggleButton size="small" className="toggle_addName" onClick={addNameField}><AddIcon /></ToggleButton> Add another name you have published under</div>
                        <br />
                        <Link className="login_button" to="/home" state={{ userInfo: [usernames, email] }} > <Button fullWidth="true" variant="outlined" size="large" color="primary">Start Survey</Button></Link>
                    </div>
                </div >
            </div >
            <div className="prize-footer">
                <img className="prize-logo" src={PrizeLogo} />
                <ul>
                    <li className="prize-item">Third Prize: 6 participants will win a <span className="blue">$25 Amazon gift card</span></li>
                    <li className="prize-item">Second Prize: 3 participants will win a <span className="blue">$50 Amazon gift card</span></li>
                    <li className="prize-item">Grand Prize: 10 participants will win the opportunity to be a <span className="blue">FABRIC beta tester</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Login;