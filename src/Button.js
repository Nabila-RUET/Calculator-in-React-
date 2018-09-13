import React, {Component} from 'react';
class Button extends Component{
    render(){
        return(
        <div className="button"
        onClick={this.props.onClick}
        data-value={this.props.value}
        data-size={this.props.size}>
        {this.props.label}
        </div>
        )
    }
}
export default Button;