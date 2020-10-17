import React, { Component } from 'react';
import Menu from './MenuComponent';
import  Dishdetail  from './DishdetailComponent';
import { dishes } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch , Route, Redirect} from 'react-router-dom';
import Contact from './ContactComponent';
import About from './AboutusCoponent';


class Main extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes:dishes,
      comments:COMMENTS,
      promotions:PROMOTIONS,
      leaders:LEADERS,
      //selectedDish:null

    };
  }
  /*
    onDishSelect(dishId)
    {
      this.setState({selectedDish:dishId});
    }
  */

  render(){
    const HomePage = ()=>{
      return(
        <Home 
         promotion={this.state.promotions.filter((promotion)=>promotion.featured)[0]}
         dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
         leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
         />
      );
    };

    
    const DishWithId = ({match}) => {
      return(
          <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };
    const Aboutus=()=>{
      return(
        <About leaders={this.state.leaders} />
      );
    }
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}  />} />
        <Route path="/menu/:dishId" component={DishWithId}/>
        <Route exact path="/aboutus" component={Aboutus} />
        <Route exact path="/contactus" component={Contact} />
        <Redirect to="/home" />
      </Switch>
      
      {/* that's a comment 
        <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)} />}
        <Dishdetail dish={this.state.dishes.filter((dish)=>dish.id == this.state.selectedDish)[0]}/>
       */
      }
      
      <Footer />
    </div>
  );
}
}

export default Main;
