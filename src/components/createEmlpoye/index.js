import React, { Component } from 'react'
import { connect } from "react-redux";
import {insertData} from "../../store/actions/index.action"
import AddEmpForm from "../forms/index.addEmployeForm"
import { withRouter } from 'react-router-dom'

class CreateData extends Component{
    constructor(props){
        super(props);
        this.state={
            name: "",
            salary: "", 
            age:""
        }
    }
    createEmp=(values)=>{
        this.props.$insertData(values)
        this.props.history.push('/home')
    }
    componentDidMount(){
        console.log(this.props.beforeEditData,"beforeEditData")
        const { beforeEditData }=this.props
        this.setState({
            name: beforeEditData.employee_name,
            salary: beforeEditData.employee_salary, 
            age:beforeEditData.employee_age
        },()=>{
             const { name, salary, age }=this.state
            //  console.log(name, "name", age ,"age", salary , "salary")
            
        })
    }
    componentWillUnmount(){
        this.setState({
            name: "",
            salary: "", 
            age:""
        })
    }
    handleChange=(event)=>{
        console.log(typeof event.target.name,"....")
        
        this.setState({
            name: event.target.name=="name" ? event.target.value : this.state.name,
            salary: event.target.name=="salary" ? event.target.value : this.state.salary,
            age: event.target.name=="age" ? event.target.value : this.state.age

        })
    }

    render(){
        const { name, salary, age }=this.state
        console.log(name, "name", age ,"age", salary , "salary","hjkjh")
        return(
            <React.Fragment>
                <AddEmpForm
                    initialValues={{name: name, salary: salary, age:age}}
                    onSubmit={this.createEmp}
                    handleChange={this.handleChange}
                />
            </React.Fragment>
        )
    }
}
const mapState = ({  }) => {
    return {
        
    };
};
const mapDispatch = dispatchEvent => ({
    $insertData: values => dispatchEvent(insertData(values))
});

export default connect(mapState, mapDispatch) (withRouter(CreateData));
