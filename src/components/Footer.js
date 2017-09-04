import React from 'react';
import Icon from 'antd/lib/icon';
import {NavLink} from 'react-router-dom';

class Footer extends React.Component{
  constructor(){
    super()
    this.state = {
      initialHeight:document.documentElement.clientHeight,
      show:true
    }
    this.onWindowResize = this.onWindowResize.bind(this)
  }
  onWindowResize(){
    if(this.state.initialHeight-200 > document.documentElement.clientHeight){
      this.setState({show:false })
    }else{
      this.setState({show:true})
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize)
  }
  componentWillUnmount() {
      window.removeEventListener('resize', this.onWindowResize)
  }
  render(){
    return (
      <footer style={this.state.show ? null : {display:'none'}}>
        <NavLink exact activeStyle={{color:'#F44336'}} to='/'><Icon type="home" /><br/>Home</NavLink>
        <NavLink activeStyle={{color:'#F44336'}} to='/blog'><Icon type="file-text" /><br/>Blog</NavLink>
        <NavLink activeStyle={{color:'#F44336'}} to='/work'><Icon type="appstore" /><br/>Work</NavLink>
        <NavLink activeStyle={{color:'#F44336'}} to='/about'><Icon type="user" /><br/>Me</NavLink>
      </footer>
    )
  }
}
export default Footer
