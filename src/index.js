import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';


const initialState = {
    firstName: 'Ol',
    lastName: 'Sav'
}

const ACTION_CHANGE_FIRST_NAME = 'ACTION_CHANGE_FIRST_NAME';
const ACTION_CHANGE_LAST_NAME = 'ACTION_CHANGE_LAST_NAME';



const changeFirstName = (newFirstName) => {
    console.log(newFirstName);
    return {
        type: 'ACTION_CHANGE_FIRST_NAME',
        payload: newFirstName
    }

};

const changeLastName = (newLastName) => {
    console.log(newLastName);
    return {
        type: 'ACTION_CHANGE_LAST_NAME',
        payload: newLastName
    }

};



const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CHANGE_FIRST_NAME:
            return { ...state, firstName: action.payload };
        case ACTION_CHANGE_LAST_NAME:
            return { ...state, lastName: action.payload };

    }
    return state;

};


const store = createStore(rootReducer);

console.log(store.getState());

class Red extends React.Component {
    render() {
        console.log(this.props)
        const dispatch = this.props.dispatch;
        return (
            <div>
                <div><input type='text'
                    value={this.props.firstName}
                    placeholder='First Name'
                    onChange={(event) => {

                        dispatch(changeFirstName(event.target.value));
                    }}></input></div>
                <div>
                    <input type='text'
                        value={this.props.lastName}
                        placeholder='Last Name'
                        onChange={(event) => {

                            dispatch(changeLastName(event.target.value));
                        }}></input></div>
                <div>
                    {this.props.firstName + ' ' + this.props.lastName}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        firstName: state.firstName,
        lastName: state.lastName

    }
};

const WrappedRed = connect(mapStateToProps)(Red);


ReactDOM.render(
    <Provider store={store}>
        < WrappedRed />
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
