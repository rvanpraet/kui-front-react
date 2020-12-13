import { AppBar, Button, IconButton, makeStyles, Toolbar } from '@material-ui/core'
import { MenuRounded } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom';
import { AppRoutesMap } from '../../AppRoutes';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    action: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%'
    },
  }));

const TopBar: React.FC = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuRounded />
                    </IconButton>
                    {/* <Typography variant="h6" className={classes.title}>
                        Kui
                    </Typography> */}
                    <div className={classes.action}>
                        <Button component={Link} to={AppRoutesMap.Landing} color="inherit">
                            Home
                        </Button>
                        <Button component={Link} to={AppRoutesMap.Login} color="inherit">
                            Sign In
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default TopBar