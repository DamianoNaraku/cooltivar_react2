import * as React from "react";
import { connect } from "react-redux";

import { logIn } from "../../actions/current";
import {TextInput} from "react-native";
import ValidatingTextInput from "../TextInputValidated";

interface IProps {
  logInConnect: () => void;
}

const LogIn = ({ logInConnect }: IProps) => (
  <>
    <view className="horizontalContainer verticalContainer" style={style.root}>
        <view />
        <h1 style={style.title}>Cooltivar-app login</h1>
        <form className="verticalContainer flow-column">
            <label style={style.label} >
                {/* span style={style.labeltext}>Mail</span> */}
                <ValidatingTextInput style={style.input}
                                     placeholder="Mail"
                                     pattern={[".+@.+"]}
                                     onValidation={(validationResults: boolean[])=> {}}/>
            </label>
            <label style={style.label} >
                {/* <span style={style.labeltext} >Password</span> */}
                <input style={style.input} className="form-control"  type="password" placeholder="Password" />
            </label>
            <button className="btn btn-success" style={style.button} onClick={logInConnect}>log in</button>
        </form>
        <view />
    </view>
  </>
);

const mapDispatchToProps = {
  logInConnect: logIn
};

export default connect(
  null,
  mapDispatchToProps,
)(LogIn);

const style = {
    root: {
        height: 'calc(100vh - 40px)'
    },
    title: {
        'textAlign': 'center',
        color: 'auto',
        // 'marginBottom': '20px'
    },
    label: {
        'textAlign': 'center',
        margin: '10px'
    },
    input: {
        'textAlign': 'center',
        color: 'auto',
    },
    button: {
        'textAlign': 'center',
        margin: '10px'
    },
    labeltext: {
        'width': '70px',
        display: 'inline-block',
        'textAlign': 'right',
        margin: '10px'
    },
} as any;
