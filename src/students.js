import React from 'react';

class Students extends React.Component{
    render(){
        return(
            <div>
                <p>Name: {this.props.pupils.name}, Age: {this.props.pupils.age}, Hobbies include: {this.props.pupils.hobbies}</p>
            </div>
        )
    }
}

export default Students;