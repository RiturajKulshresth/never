import React from 'react';

class Header extends React.Component{

    state={
        name:'Farnces',

        keywords:''
    }
    inphand=(event, name)=>{
        this.setState({
            keywords:event.target.value
        })
        console.log(event.target.value)
        this.hello()
    }
    hello(){
        console.log('hello')
    }
    
    render(){
    return (
        <header
            onClick={()=>console.log('i waas clicked')}
        >
            <div className="logo">Logo</div>
            <input
               onChange={(e)=> this.inphand(e,'rin')}

            
            ></input>
            <div>
                {this.state.name}
            </div>
            <div>
                {this.state.keywords}
            </div>
        </header>
    )}
}


// let styles={
//     header:{
//         background:"#03a9fa"
//     },
//     logo:{
//         color:"#fff",
//         fontFamily:"Roboto",
//         textAlign:"center"
//     }
// }
export default Header;