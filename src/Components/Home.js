import React from "react";
import {Component} from "react"
// import axios from "axios"
import pokeball from "../images/pokeball.png"
// import Higherfunction from "../Hoc/Higherfunction"
import {connect} from "react-redux"
import {Link} from "react-router-dom"

const mapStateToProps = (value) =>{
  return{
      post:value.post
  }
 }
 

class Home extends Component  {
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000);
    // console.log(props);
  render(){
    //  console.log(this.props);
      const {post} = this.props
      const postList = post.length?(
      post.map( add =>{
              return(
                  <div className="post" key={add.id}>
                   <div className="card content">
                    <img src={pokeball} alt="martins"/>
                    <Link to={add.id}>
                       <span className="card-title red-text big-text">{add.title}</span>
                    </Link>
                     <p>{add.body}</p>
                    </div>
                  </div>
              )})
              ):(
        <div className ="center">
          No post yet loading ....
        </div>
      )
return(
        <div className="container home">
          <h4 className ="center">Home</h4>
           {postList}
        </div>
    )}
}


export default connect(mapStateToProps)(Home);