import React, { Component, Fragment } from 'react';
import { Formik, Field } from "formik";
import InputField from "../FormComponent/input.field";
import LoadingButton from "../FormComponent/loading.loadingBtn";
 import addEmpSchema from "../../validation/addEmpForm.validation";
import { Grid, Button } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
const styles = theme => ({
  topContainer:{
      padding: "20px 10px 0px 10px"
  },
  update:{
    padding: "36px 10px 0px 10px"
  },
  updateBtn:{
    padding:"6px 80px"
  }
});
class AddEmpForm extends Component {
    
    render() {
      const { onSubmit, initialValues, classes, handleChange } = this.props;
      console.log(initialValues,"initialValues")
         return (
      <Formik
        onSubmit={onSubmit}
        validationSchema={addEmpSchema}
        validateOnBlur={false}
        validateOnChange={false}
        initialValues={initialValues}
        render={({
          handleSubmit,
          dirty,
          isSubmitting,
          handleChange,
          values,
          errors,
          touched,
          ...props
        }) => {
          return (
            <Fragment>
              <Grid container justify="center">
                <Grid item sm={4}>
                  <form onSubmit={handleSubmit} noValidate>
                    <Grid  className={classes.topContainer}>
                            <Field
                              name="name"
                              placeholder="enter name"
                              type="text"
                              value={initialValues.name}
                              component={InputField}
                            />
                          </Grid>
                          <Grid className={classes.topContainer}>
                            <Field
                              name="salary"
                              placeholder="enter salry"
                              type="text"
                              value={initialValues.salary}
                              component={InputField}
                            />
                          </Grid>
                          <Grid className={classes.topContainer}>
                            <Field
                              name="age"
                              placeholder="enter age"
                              type="text"
                              value={initialValues.age}
                              component={InputField}
                            />
                          </Grid>
                          {/* <Grid container justify="center"> */}
                           <Grid className={classes.topContainer}>
                        <LoadingButton
                          variant="text"
                          disabled={!dirty || isSubmitting}
                        >
                          SUBMIT
                        </LoadingButton>
                      </Grid>
                            {/* <Grid item sm={6} className={classes.update}>
                              <Button color="primary"
                              className={classes.updateBtn}
                                variant="text"
                                // disabled={!dirty || isSubmitting}
                              >
                                UPDATE
                              </Button>
                            </Grid> */}
                          {/* </Grid> */}
                      
                  </form>
                </Grid>
              </Grid>
            </Fragment>
          );
        }}
      />
    );
    }
}


export default withStyles(styles)(AddEmpForm);