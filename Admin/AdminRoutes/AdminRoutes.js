import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AdminDashboard from "../AdminDashboard/AdminDashboard.js";
import AdminProjects from "../AdminProjects/AdminProjects.js";
//import AllUsers from "../AllUsers/AllUsers.js";
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";

const drawerWidth = 240;
const SideMenus = [
  {
    name: "Dasboard",
    link: "/adminDashboard",
    icon: <HomeIcon fontSize="large" />,
  },
  {
    name: "Projects",
    link: "/adminProjects",
    icon: <InboxIcon fontSize="large" />,
  },
  {
    name: "All Users",
    link: "/users",
    icon: <InboxIcon fontSize="large" />,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      color: "#ffffff !important",
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#3f51b5",
    color: "#ffffff !important",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function AdminRoutes(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (link) => {
    props.history.push(link);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {SideMenus.map((menu, index) => (
          <ListItem
            button
            key={menu.name}
            onClick={() => handleClick(menu.link)}
          >
            <ListItemIcon>{menu.icon}</ListItemIcon>
            <ListItemText>{menu.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography noWrap>
            <h4>Admin Panel</h4>
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Switch>
          <Route path="/adminDashboard" component={AdminDashboard} />
          <Route exact path="/adminProjects" component={AdminProjects} />
          {/* <Route exact path="/users" component={AllUsers} /> */}
          <Redirect to="/adminProjects" />
        </Switch>
      </main>
    </div>
  );
}

export default withRouter(AdminRoutes);
