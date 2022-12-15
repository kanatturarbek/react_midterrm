import { Component } from "react";

import React from "react"

export class likeCounter extends Component{
    state={
        likeCount:0,
        DislikeCount:0
    }
    likePost=()=>{
        this.setState(({likeCount})=>{
            return{
                likeCount:++likeCount
            }   
            
        })
    }
    DislikePost=()=>{
        this.setState(({DislikeCount})=>{
            return{
                DislikeCount:++DislikeCount
            }
        })
    }
    render(){
        return(
            <div className='likewrite'>
            {this.props.description}<button onClick={this.likePost} className='like'>Like</button>
            {this.state.likeCount}
            <button onClick={this.DislikePost} className='like1'>DisLike</button>
            {this.state.DislikeCount}
            <h2 className="nur">{this.props.title}</h2>
        </div>
        )
    }
}