import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';


import Grid from '@material-ui/core/Grid';




const useStyles = makeStyles({

});

















export default function BasicTable() {
  const classes = useStyles();

  return (
<div>



<fieldset>

<legend>XXXXX</legend>
<br/>

<form className={classes.form}>

<Grid container spacing={3}>

<Grid item xs={6}>
<label className={classes.lbl}>Group member</label>{" "}                       
<TextField id="outlined-helperText" variant="outlined"/>
</Grid>

<Grid item xs={6}>
<label className={classes.lbl}>Member No</label>{" "}                       
<TextField id="outlined-helperText" variant="outlined"/>
</Grid>




<Grid item xs={6}>
<label className={classes.lbl}>Depart num</label>{" "}                       
<TextField id="outlined-helperText" variant="outlined"/>
</Grid>

<Grid item xs={6}>
<label className={classes.lbl}>D.O.B</label>{" "}                       
<TextField id="outlined-helperText" variant="outlined"/>
</Grid>




<Grid item xs={6}>
<label className={classes.lbl}>Effect Date</label>{" "}                       
<TextField id="outlined-helperText" variant="outlined"/>
</Grid>

<Grid item xs={6}>
<label className={classes.lbl}>cancel date</label>{" "}                       
<TextField id="outlined-helperText" variant="outlined"/>
</Grid>




<Grid item xs={6}>
<label className={classes.lbl}>Group MMbr</label>{" "}                       
<TextField id="outlined-helperText" variant="outlined"/>
</Grid>

<Grid item xs={6}>
<label className={classes.lbl}>Group MMbr</label>{" "}                       
<TextField id="outlined-helperText" variant="outlined"/>
</Grid>







<Grid item xs={12}>
<label className={classes.lbl}>Group MMbr</label>                              
<TextField id="outlined-helperText" variant="outlined"/>
</Grid>

<Grid item xs={12}>
<label className={classes.lbl}>Group MMbr</label>                              
<TextField id="outlined-helperText" variant="outlined"/>
</Grid>










<Grid item xs={4}>
<label className={classes.lbl}>Group MMbr</label>                              
<TextField id="outlined-helperText" variant="outlined"/>
</Grid>

<Grid item xs={4}>
<label className={classes.lbl}>Group MMbr</label>                              
<TextField id="outlined-helperText" variant="outlined"/>
</Grid>

<Grid item xs={4}>
<label className={classes.lbl}>Group MMbr</label>                              
<TextField id="outlined-helperText" variant="outlined" rows="4"  />
</Grid>








</Grid>
</form>

</fieldset>






    
</div>
  );
}
