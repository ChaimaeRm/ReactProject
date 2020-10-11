import React ,{ Component }from 'react';
import { Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from 'reactstrap';
import  Dishdetail  from './DishdetailComponent';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedDish:null
        }
    }

    onDishSelect(dish){
        this.setState({selectedDish:dish});
    }
    renderComments(dish)
    {
        if(dish!=null){
            const comments=dish.comments.map((singlecomment)=>{
                return(
                     <div key={singlecomment.id}  >
                         <ul className="list-unstyled">
                         <li> {singlecomment.comment}</li>
                         <li>--{singlecomment.author},{singlecomment.date}</li>
                         </ul>
                         
                     </div>
                ); 
             });

             return(
                <div className="container">
                    <div className="row"><h4>Comments</h4></div>
                    <div>{comments}</div>
                    
                </div>
               
                
            );
        }else{
            return(
                <div></div>
            );
        }
       
       
    }
    
    renderDish(dish){
        if(dish!=null){
            return(
             <Dishdetail dish={dish}/>
            );

        }else{
            return(
                <div></div>
            );
        }
    }
    render(){
        const menu=this.props.dishes.map((dish) =>{
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>this.onDishSelect(dish)}>
                      <CardImg width="100%" src={dish.image} alt={dish.name}/>
                      <CardImgOverlay>
                           <CardTitle>{dish.name}</CardTitle>
                      </CardImgOverlay> 
                    </Card>
                </div>
            );
        });
        
        return(
          <div className="container">
              <div className="row">
                 {menu} 
              </div>
              <div className="row">
                 <div className="col-12 col-md-5 m-1">
                     {this.renderDish(this.state.selectedDish)}
                  </div>
                  <div className="col-12 col-md-5 m-1">
                     {this.renderComments(this.state.selectedDish)}
                  </div>
                  
              </div>
          </div>
        
        );
    }
}

export default Menu;