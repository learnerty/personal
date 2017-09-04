import React from 'react';
import Button from 'antd/lib/button';

class Home extends React.Component{
  render(){
    return (
      <div className='home-wrap'>
        <div>
          <h1>HI,I'M LEARNERTY</h1>
          <p>a front-end develope</p>
          <Button type='primary'><a href='https://github.com/learnerty'>HIRE ME</a></Button>
        </div>
      </div>
    )
  }
}
export default Home
