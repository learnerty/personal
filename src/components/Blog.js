import React from 'react';
import axios from 'axios';
import Card from 'antd/lib/card';
import Spin from 'antd/lib/spin';
import Alert from 'antd/lib/alert';
import {Link} from 'react-router-dom';

class Blog extends React.Component{
  constructor(){
    super();
    this.state={
      data: [],
      filterdata: [],
      wait: true,
      val:''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount(){
    axios.get('https://raw.githubusercontent.com/learnerty/mydata/master/mydata.json')
      .then(res => this.setState({data: res.data,wait: false}))
      .catch(err => alert(err))
  }
  handleChange(e){
    let val = e.target.value.trim()
    let sea_reg = new RegExp(val,'gi')
    let newData = this.state.data.filter(item => item.desc.search(sea_reg) !==-1 )
    this.setState({filterdata:newData,val:e.target.value})
  }
  render(){
    let data = this.state.filterdata.length||this.state.val ? this.state.filterdata : this.state.data
    let inputSty = {
      width:'50%',
      height:'40px',
      borderRadius:'5px',
      outline:'none',
      marginBottom:'15px',
      fontSize:'12px',
      textIndent:'12px',
      float:'right'
    }
    return (
      <div style={{padding:'10px'}} className="blog">
        <div className="clearfix search">
          <input onChange={this.handleChange} value={this.state.val} placeholder="请输入要查询的标题" style={inputSty}/>
        </div>
        <div className="dataList">
          {
            this.state.wait ?
            <Spin tip="Loading...">
              <Alert message="正在加载...请稍后" type="info" />
            </Spin> :
            data.map(item => (
              <Card key={item.index} title={item.title} extra={<Link to={`/post/${item.url}`}>More</Link>} style={{marginBottom:'10px'}}>
                <p>{item.desc}</p>
              </Card>
            ))
          }
        </div>

      </div>
    )
  }
}
export default Blog
