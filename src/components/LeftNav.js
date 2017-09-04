import React from 'react';
import Icon from 'antd/lib/icon';
import {NavLink,withRouter} from 'react-router-dom';

class LeftNav extends React.Component{
  render(){
    let pathname = this.props.location.pathname.slice(1).toUpperCase();
    return (
      <div className='left-nav'>
        <h2>learnerty@{!pathname ? 'HOME' : pathname.includes('POST') ? 'NOTE' : pathname }</h2>
        <NavLink exact activeStyle={{backgroundColor:'rgba(0, 0, 0, 0.298039)'}} to='/' className="left-navl"><Icon type="home" />Home<br/></NavLink>
        <NavLink activeStyle={{backgroundColor:'rgba(0, 0, 0, 0.298039)'}} to='/blog' className="left-navl"><Icon type="file-text" />Blog<br/></NavLink>
        <NavLink activeStyle={{backgroundColor:'rgba(0, 0, 0, 0.298039)'}} to='/work' className="left-navl"><Icon type="appstore" />Work<br/></NavLink>
        <NavLink activeStyle={{backgroundColor:'rgba(0, 0, 0, 0.298039)'}} to='/about' className="left-navl"><Icon type="user" />Me<br/></NavLink>
      </div>
    )
  }
}
export default withRouter(LeftNav)
