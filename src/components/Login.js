import React from 'react';
import './Login.css';
import {Route,NavLink,HashRouter} from "react-router-dom";
import Fabrica from './Fabrica';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            user: '',
            inputUser:''
        } 
    }

    
    loadUser() {
        fetch('/api/users/auth/' + this.state.inputUser )
            .then(res => res.json())
            .then(user => this.setState({user: user}));
        console.log('user: ',this.state.user);
    }

    handleChange(event) {
        this.setState({inputUser: event.target.value});
        console.log('input ',this.state.inputUser);
    }

    handleSubmit = () => {
        if(this.state.inputUser !== ''){
            this.loadUser();
            // alert('Bievenido ' + this.state.user.username);
            //chequeo si existe o no y alertas
        }else{
            alert('Ingrese su usario por favor');
        }
    }

    render() {
        return(
            <div>
                <h2>Bienvenido a la revolucion industrial!</h2>
                <HashRouter>
                <form onSubmit={this.handleSubmit}>
                    <span className="form-group">
                        <input type="text" className="inputIn" placeholder="Usuario" value={this.state.inputUser} onChange={(event) => { this.handleChange(event) } } />
                    </span>
                    <button className="buttonIn">
                        <NavLink to="/fabricas">Ingresar</NavLink>
                    </button>
                </form>
                <div className="content">
                    <Route path="/fabricas" component={Fabrica}/>
                </div>
                </HashRouter>
            </div>
        );
    }
}

export default Login;