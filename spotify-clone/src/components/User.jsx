import React from "react";
import Body from "./Body";
import Sidebar from "./Sidebar";
import Grid from "@material-ui/core/Grid";

import "./Style.css";

const User = () => {
   return (
      <div className='player'>
         <div className='player_body'>
            <Grid item xs={12}>
               <Grid container justify='center'>
                  <Sidebar />
                  <Body />
               </Grid>
            </Grid>
         </div>
      </div>
   );
};

export default User;
