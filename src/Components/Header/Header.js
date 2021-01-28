import React from 'react';
import useStyles from './styles';
import { Container,AppBar,Toolbar,Typography, Button,Grid } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


const Header = () => {

  const classes = useStyles()


   return (
     <div className={classes.root} color="inhesrit">
       <AppBar position="sticky">
         <Container>
           <Toolbar>
             <IconButton
               edge="start"
               className={classes.menuButton}
               color="inhesrit"
               aria-label="open drawer"
             >
               <MenuIcon />
             </IconButton>
             <Typography className={classes.title} variant="h6" noWrap>
               inTime
             </Typography>
             <div className={classes.search}>
               <div className={classes.searchIcon}>
                 <SearchIcon />
               </div>
               <InputBase
                 placeholder="Search…"
                 classes={{
                   root: classes.inputRoot,
                   input: classes.inputInput,
                 }}
                 inputProps={{ "aria-label": "search" }}
               />
             </div>
           </Toolbar>
         </Container>
       </AppBar>
     </div>
   );
}

 
export default Header



//  return (
//     <Container   maxWidth="lg">
//       <AppBar color="action" className={classes.appBar} position="sticky"  >
//         <Toolbar>
//    <IconButton edge="start" className={classes.menuButton} color="black" aria-label="menu">
//       <MenuIcon />
//      </IconButton>
//      <Typography  variant="h6" className={classes.title}>
//             inTime
//      </Typography>
//           <Button className={classes.button} startIcon={<SettingsIcon />}/>
//    </Toolbar>
//       </AppBar>
//     </Container>

//   );
// };