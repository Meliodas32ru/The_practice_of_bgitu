import React from "react";

class InputName extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            type: "text",
            name: "username",
            placeholder: "Name",
            value: '',
        };
        this.onChange = this.onChange.bind(this);
    }
    render()
    {
        const { type, name, placeholder, value } = this.state;
        return (
            <input onChange={this.onChange} type={type} name={name} placeholder={placeholder} value={value} className="name_input"/>
        );
    }
    onChange(e)
    {
        const re = /^[a-zA-Z0-9]+$/;
        if ((e.target.value === '' || re.test(e.target.value)) && e.target.value.length <= 16)
        {
            this.setState({value: e.target.value})
        }
    };
}

export default InputName;