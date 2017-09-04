import React from 'react';
import axios from 'axios'
import Spin from 'antd/lib/spin';
import Alert from 'antd/lib/alert';
import '../work.css'
class Work extends React.Component{
  constructor(){
    super();
    this.state={
      data: [],
      wait: true
    }
  }
  componentDidMount(){
    axios.get('https://raw.githubusercontent.com/learnerty/mydata/master/workdata.json')
      .then(res => this.setState({data: res.data,wait: false}))
      .catch(err => alert(err))
  }
  render(){
    return (
      <div className="work">
        <div>
          {
            this.state.wait ?
            <Spin tip="Loading...">
              <Alert message="正在加载...请稍后" type="info" />
            </Spin> :
            this.state.data.map(item => (
              <a href={item.url} target="bleak" key={item.index}>
                {/* <div> */}
                  <img src={item.img} alt='img'/>
                  <p>{item.title}({item.platform})</p>
                {/* </div> */}
              </a>
            ))
          }
        </div>
      </div>
    )
  }
}
export default Work
