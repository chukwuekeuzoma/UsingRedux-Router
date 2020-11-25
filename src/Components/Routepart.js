import React, {Component} from "react"
import {connect} from "react-redux"


const mapStateToProps = (value, OwnProps) =>{
  // console.log(OwnProps);
  let id = OwnProps.match.params.post_id;
  return{
      post:value.post.find(post => post.id === id )
  }
}

const dispatchMapToProps = (deletePost) =>{
    return{
      martinsDelete: (id) =>{deletePost({type:"Delete_post", id:id})}
    }
}
 
class Routepart  extends Component {
  handleClick = () =>{
    this.props.martinsDelete(this.props.post.id) 
    this.props.history.push("/")
  }
  render(){
    console.log(this.props);
  
     const {post} = this.props;
      const postData = post?(
        <div className="center">
        <h4>{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <button className="btn grey" onClick={this.handleClick}>Delete Post</button>
        </div>
      ):(
        <div className="center">Data loading.....</div>
      )
      return(
          <div className="container">
             {postData}
          </div>
      )
  }

}


export default connect(mapStateToProps, dispatchMapToProps)(Routepart);