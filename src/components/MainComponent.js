import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import  Dishdetail  from './DishdetailComponent';
import { dishes } from '../shared/dishes';


class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes:dishes,
      selectedDish:null
    };
  }

  onDishSelect(dishId)
  {
     this.setState({selectedDish:dishId});
  }

  render(){
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Restaurant</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)}/>
      <Dishdetail dish={this.state.dishes.filter((dish)=>dish.id == this.state.selectedDish)[0]}/>
    </div>
  );
}
}

export default Main;
