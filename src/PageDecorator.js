import React, { Component } from 'react';

export const PageDecorator = (WrappedComponent) =>{

    return class PageNormal extends Component{
        state = {
            address: '河北省承德市',
            age: 25,
        }
        render(){

            return (

                <div style={{backgroundColor:'skyblue'}}>

                    <WrappedComponent {...this.props} value={"装饰器传过来的值"} address={this.state.address} age={this.state.age}></WrappedComponent>

                </div>

            )

        }

    }

}
