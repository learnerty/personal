import React from 'react';
import Button from 'antd/lib/button';
import {withRouter} from 'react-router-dom';

class Header extends React.Component{
  render(){
    let pathname = this.props.location.pathname.slice(1).toUpperCase();
    return (
      <header>
        <Button icon="left" onClick={()=>this.props.history.goBack()}>返回</Button>
        <h2>learnerty@{!pathname ? 'HOME' : pathname.includes('POST') ? 'NOTE' : pathname }</h2>
        <Button icon="right" onClick={()=>this.props.history.go(1)}></Button>
      </header>
    )
  }
}
export default withRouter(Header);
