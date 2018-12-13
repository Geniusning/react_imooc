import React from 'react'
import {Button} from 'antd-mobile'
// import 'antd-mobile/dist/antd-mobile.css'

class App extends React.Component {
    render() {
        const boss = "李云龙"
        return (
            <div>
               <h2> 独立团， 团长 { boss } </h2>
               <One boss='张大帅'></One>
               <Fn boss='孙大圣'></Fn>
            </div>
        ) 
    }
}

function Fn(props){
    return <h3>骑兵连连长{props.boss},冲啊</h3>
}


class One extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            solders:['士兵1','士兵2','士兵3']
        }
    }
    addSolders(){
        this.setState({
            solders:[...this.state.solders,"新兵蛋子"+Math.random()]
        })
    }
    componentWillMount(){
        console.log('组件马上要加载了')
    }
    componentDidMount(){
        console.log('组件加载完毕')
    }
    render(){
        console.log('组件正在加载')
        return (
            <div>
                <h2>一营{this.props.boss}</h2>
                <Button type='primary' onClick={()=>{this.addSolders()}}>添加新兵</Button>
                <ul>
                    {this.state.solders.map(v=>{
                        return <li key={v}>{v}</li>
                    })} 
                </ul>
            </div>
        )
    }
}
export default App