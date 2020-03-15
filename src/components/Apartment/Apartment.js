import React, { Component } from 'react';
import "./Apartment.scss";


export default class Apartment extends Component {
    state = {
        showInfo:false
    };

    handleInfo = () => {
        this.setState({
            showInfo:!this.state.showInfo
        }

        )
    }
    render() {
        const { id, title, img, name, price, info } = this.props.apartment;
        const { removeApartment } = this.props;
        return (
            <article className="apartment">
            <div className="img-container">
                <img
                src={img} alt=""/>
                <span className="close-btn" onClick={()=>{removeApartment(id)}}>
                    <i className="fas fa-window-close"/>
                </span>
                    <div className="price-top">
                        <h6>${price}</h6>
                        <p>per month</p>
                    </div>
            </div>
            <div className="tour-info">
            <h3>{title}</h3>
            <h4>{name}</h4>
            <h5>info{" "}<span onClick={this.handleInfo}>
                <i className="fas fa-caret-square-down"/>
                </span>
                </h5>
                    {this.state.showInfo && <p>{info}
                    </p>}
                </div>
            </article>
        )
    }
}
