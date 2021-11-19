import React, {Component} from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import {HomePage} from "./pages/home/HomePage";
import {DetailPage} from "./pages/detail/DetailPage";
import {AppStateType} from "./redux/store";
import {connect} from "react-redux";


type mapStatePropsType = ReturnType<typeof mapStateToProps>
type mapDispatchPropsType = {}
type propsType = mapStatePropsType & mapDispatchPropsType

interface IComponent {
}


export class App extends Component <propsType, IComponent> {


    render() {
        return (
            <div className="App">
                <header/>
                <main>
                    <Routes>
                        <Route path='/' element={<HomePage contacts={this.props.contacts}
                        />}/>
                        <Route path='/detail/:contactId' element={<DetailPage contacts={this.props.contacts}/>}/>
                        <Route path='*' element={<div> 404 not found </div>}/>
                    </Routes>
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    contacts: state.app.contacts,
    idContact: state.app.idContact
});

export default connect(mapStateToProps, {})(App);
