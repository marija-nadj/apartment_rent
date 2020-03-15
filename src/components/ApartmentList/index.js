import React, { Component } from 'react';
import "./ApartmentList.scss";
import Apartment from "../Apartment/Apartment";
import {apartmentData} from '../apartmentData';

export default class  ApartmentList extends Component {
    state = {
        apartments: apartmentData
    };


    removeApartment = id => {
        const {apartments} = this.state;
        const filteredApartments = apartments.filter(apartment=>apartment.id !==id);
        this.setState({
            apartments:filteredApartments
        });
    }
    render() {
        const { apartments } = this.state;
        return (
            <section className="apartment-list">
                {apartments.map(apartment => {
                    return <Apartment key={apartment.id} apartment={apartment} removeApartment={this.removeApartment}/>;
                    
                })}
            </section>
        )
    }
}
