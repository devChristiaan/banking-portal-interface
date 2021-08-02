//App Imports
import React from 'react';
import clsx from 'clsx';
import useStyles from './styles/styles';

//Module Imports
import Chart from './Chart';
import Orders from './Orders';
import { Copyright } from './helper/Copyright';
import { mainListItems } from './listItems';

//Styles Imports
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  //Tabs Logic
  //Payments Tab
  const [selectedPaymentsTab, setselectedPaymentsTab] = React.useState(0);

  const handlePaymentsChange = (event, newValue) => {
    setselectedPaymentsTab(newValue);
  }
  //Transactions Tab
  const [selectedTransactionsTab, setselectedTransactionsTab] = React.useState(0);

  const handleTransactionsChange = (event, newValue) => {
    setselectedTransactionsTab(newValue);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Banking Portal
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
            <Paper className={classes.paper}>
                <Tabs value={selectedPaymentsTab} onChange={handlePaymentsChange}>
                  <Tab label="First" />
                  <Tab label="Second" />
                  <Tab label="Third" />
                </Tabs>
                {selectedPaymentsTab === 0 && <Orders />}
                {selectedPaymentsTab === 1 && <Orders />}
                {selectedPaymentsTab === 2 && <Orders />}
              </Paper>
            </Grid>
            {/* Transactions Orders */}
            <Grid item xs={12}>
            <Paper className={classes.paper}>
                <Tabs value={selectedTransactionsTab} onChange={handleTransactionsChange}>
                  <Tab label="First" />
                  <Tab label="Second" />
                  <Tab label="Third" />
                </Tabs>
                {selectedTransactionsTab === 0 && <Orders />}
                {selectedTransactionsTab === 1 && <Orders />}
                {selectedTransactionsTab === 2 && <Orders />}
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}