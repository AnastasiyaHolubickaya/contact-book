import React, {Component} from "react";
import classes from "./home.module.css"
import {SmallCard} from "../../components/SmallCard/SmallCard";
import AddContactReduxForm from "../../components/formAddContact/FormAddContact";
import {actions} from "../../redux/actionCreators";
import {contactType} from "../../redux/reducer";
import {Modal} from "../../components/modal/Modal";
import {Button} from "../../components/button/Button";
import {addElementToMass} from "../../utils/addElementToMass/addElementToMass";
import {deleteElementMassById} from "../../utils/deleteElementMassById";


interface IState {
    addMode: boolean
    isRemoveContact: boolean
    isModalActive: boolean
}


type propsType = {
    contacts: Array<contactType>
}


export class HomePage extends Component<propsType, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            addMode: false,
            isRemoveContact: false,
            isModalActive: false
        };
    }

    activateAddMode = (active: boolean) => {
        this.setState({addMode: active});
    };

    onSubmit = (formData: any) => {
        actions.setContacts(addElementToMass(this.props.contacts, formData));
        this.activateAddMode(false);
    };
    deleteContact = () => {
        // @ts-ignore
        let id = parseInt(localStorage.getItem('removeId'));
        actions.setContacts(deleteElementMassById(this.props.contacts, id));
        this.setState({isRemoveContact: true});
        this.showModal(false);
    };
    showModal = (show: boolean) => {
        this.setState({isModalActive: show});
    };

    render() {
        return (
            <div className={classes.container}>
                {
                    this.state.addMode
                        ? <AddContactReduxForm onSubmit={this.onSubmit}
                            // @ts-ignore
                                               activateAddMode={this.activateAddMode}
                        />
                        : <div>
                            {this.props.contacts.map((e: any, index: number) =>
                                <SmallCard key={index.toString()}
                                           contact={e} id={index}
                                           showModal={this.showModal}
                                />)}
                            <Button value={"Добавить контакт"} onClick={() => this.activateAddMode(true)}/>
                        </div>
                }
                {

                    <Modal showModal={this.showModal}
                           isModalActive={this.state.isModalActive}>
                        <p>Удалить контакт?</p>
                        <div className={classes.btn_group}>
                            <Button value={"Удалить"} onClick={this.deleteContact}/>
                            <Button value={"Отменить"} onClick={() => this.showModal(false)}/>
                        </div>

                    </Modal>
                }
            </div>
        )
    }
}