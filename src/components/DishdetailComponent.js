import React ,{ Component }from 'react';
import { Card,CardImg,CardText,CardBody,CardTitle } from 'reactstrap';

class Dishdetail extends Component{
   
    renderDish(dish){
        if(dish!=null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );

        }else{
            return(
                <div></div>
            );
        }
    }
    renderComments(comments)
    {
        if(comments!=null){
            const listcomments=comments.map((singlecomment)=>{
                return(
                     <li key={singlecomment.id}  >
                         <p> {singlecomment.comment}</p>
                         <p>--{singlecomment.author},{new Intl.DateTimeFormat('en-US' ,{ year:'numeric',month:'long',day:'2-digit',}).format(new Date(singlecomment.date))}</p>
                     </li>
                ); 
             });
             
             return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">{listcomments}</ul>
                    
                </div>
               
                
            );
        }else{
            return(
                <div></div>
            );
        }
       
       
    }
    render(){
        if (this.props.dish !=null)
        {
            return(
                <div className="container">
                    <div className="row">
                        { this.renderDish(this.props.dish) }
                        { this.renderComments(this.props.dish.comments) }
                    </div>
                </div>
            );
        }else{
            return(<div></div>);
        }
        
    }
}
export default Dishdetail;