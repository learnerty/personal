import React from 'react';
import axios from 'axios';
import Spin from 'antd/lib/spin';
import Alert from 'antd/lib/alert';
import marked from 'marked';
import hljs from 'highlight.js';
class Post extends React.Component{
  constructor(){
    super();
    this.state={
      data:'',
      wait:true
    }
  }
  componentDidMount(){
    let name = this.props.match.params.title;
    axios.get(`https://raw.githubusercontent.com/learnerty/mydata/master/note/${name}.md`)
      .then(res => this.setState({data:res.data,wait:false}))
      .catch(err => alert(err))
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    })
  }

  render(){
    return (
      <div style={{width:'100%'}}>
        {
          this.state.wait ?
          <Spin tip="Loading...">
            <Alert message="正在加载...请稍后" type="info" />
          </Spin> : <div dangerouslySetInnerHTML={{__html: marked(this.state.data)}} className='post-content'/>
        }
      </div>
    )
  }
}
export default Post
