import React from "react";
import ReactDOM from "react-dom";
import { makeStyles, Grid, Paper, Box, Button, Badge } from "@material-ui/core";
import ArchiveIcon from "@material-ui/icons/Archive";
import PhoneCallbackIcon from "@material-ui/icons/PhoneCallback";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Header from "./Header.jsx";

const useStyles = makeStyles((themes) => ({
  containerPaper: {
    width: "350px",
    height: "50px",
    marginLeft: "auto",
    marginRight: "auto",
    border: "1px solid #BDBDBD",
    borderRadius: "10px",
  },
  boldText: {
    fontFamily: "Roboto",
    color: "#636363",
    fontWeight: "bold",
    fontSize: "larger",
  },
  dateText: {
    textAlign: "center",
    fontFamily: "Roboto",
    color: "#BDBDBD",
    fontWeight: "bold",
    fontSize: "smaller",
    padding: 5,
  },
  subText: {
    fontFamily: "Roboto",
    color: "#BDBDBD",
    fontWeight: "bold",
    fontSize: "smaller",
  },
  icon: {
    fontSize: "2.5em",
  },
  count: {
    position: "absolute",
    lineHeight: 1,
    color: "#fff",
    top: "0.5em",
    fontSize: "1em",
  },
  typography: {
    color: "white",
    fontSize: 13,
    position: "absolute",
    top: "1.2%",
    left: "2%",
  },
  badge: {
    "& .MuiBadge-anchorOriginTopRightCircular": {
      right: "auto !important",
      top: "70% !important",
    },
  },
  badge2: {
    "& .MuiBadge-anchorOriginTopRightCircular": {
      right: "auto !important",
      top: "60% !important",
    },
  },
}));

const CircleText = ({ size = 16, count = 0 }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ fontSize: size }}>
      <Brightness1Icon color="primary" className={classes.icon} />
      <Typography component="span" className={classes.count}>
        {count}
      </Typography>
    </div>
  );
};

const App = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className="container">
        <Header />

        <div style={{ marginTop: "5%" }}>
          <Grid
            container
            spacing={2}
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <Grid item xs={6} style={{ textAlign: "center" }} className={classes.boldText}>
              <Paper
                style={{
                  width: "160px",
                  height: "50px",
                  border: "1px solid #BDBDBD",
                  borderRadius: 10,
                }}
              >
                <p style={{ paddingTop: "3%" }}> Activities </p>
              </Paper>
            </Grid>

            <span></span>
            <Grid item xs={6} className={classes.boldText}>
              <Paper
                style={{
                  width: "160px",
                  textAlignLast: "center",
                  border: "1px solid #BDBDBD",
                  height: "50px",
                  borderRadius: 10,
                }}
              >
                {" "}
                <div style={{display:"flex"}}>
                <ArchiveIcon
                  style={{
                    width: "20px",
                    padding:8,
                    paddingTop:12,
                  }}
                />{" "}
               <p style={{marginLeft:"15%", marginTop:"12%"}}> Archived </p>
               </div>
              </Paper>
            </Grid>
          </Grid>
          {/* </Paper> */}

          {/* content 1 */}
          <p className={classes.dateText}>
            ------------------------------------ July, 27 2017
            ------------------------------------
          </p>

          <Paper className={classes.containerPaper}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={2}
                style={{ textAlign: "center", marginTop: "3%" }}
              >
                <PhoneCallbackIcon style={{ width: "20px" }} />
              </Grid>

              <Grid item xs={6}>
                <p className={classes.boldText} style={{ marginBottom: 0 }}>
                  +33 6 45 13 53 91
                </p>
                <p style={{ marginTop: 0 }} className={classes.subText}>
                  {" "}
                  tried to call on Xavier
                </p>
              </Grid>

              <Grid
                item
                xs={4}
                style={{ placeContent: "center", display: "flex" }}
                className={classes.subText}
              >
                <MoreVertIcon
                  style={{ marginTop: "auto", marginBottom: "auto" }}
                />

                <p style={{ marginTop: "20%", marginBottom: 0 }}>07:58 PM</p>
              </Grid>
            </Grid>
          </Paper>

          {/* content 2 */}
          <p className={classes.dateText}>
            ------------------------------------ July, 21 2017
            ------------------------------------
          </p>

          <Paper className={classes.containerPaper}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={2}
                style={{ textAlign: "center", marginTop: "3%" }}
              >
                <PhoneCallbackIcon style={{ width: "20px" }} />
              </Grid>

              <Grid item xs={6}>
                <div style={{ display: "flex" }}>
                  <p className={classes.boldText} style={{ marginBottom: 0 }}>
                    +33 6 45 13 53 91
                  </p>
                  <Badge
                    className={classes.badge}
                    color="secondary"
                    overlap="circular"
                    badgeContent="1"
                  ></Badge>
                </div>
                <p style={{ marginTop: 0 }} className={classes.subText}>
                  {" "}
                  tried to call on Xavier
                </p>
              </Grid>

              <Grid
                item
                xs={4}
                style={{ placeContent: "center", display: "flex" }}
                className={classes.subText}
              >
                <MoreVertIcon
                  style={{ marginTop: "auto", marginBottom: "auto" }}
                />

                <p style={{ marginTop: "20%", marginBottom: 0 }}>12:34 PM</p>
              </Grid>
            </Grid>
          </Paper>

          {/* content 3 */}
          <p className={classes.dateText}>
            ------------------------------------ July, 05 2017
            ------------------------------------
          </p>

          <Paper className={classes.containerPaper}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={2}
                style={{ textAlign: "center", marginTop: "3%" }}
              >
                <PhoneCallbackIcon style={{ width: "20px" }} />
              </Grid>

              <Grid item xs={6}>
                <div style={{ display: "flex" }}>
                  <p className={classes.boldText} style={{ marginBottom: 0 }}>
                    Arthur Andre
                  </p>
                  <Badge
                    className={classes.badge2}
                    color="secondary"
                    overlap="circular"
                    badgeContent="8"
                  ></Badge>
                </div>
                <p style={{ marginTop: 0 }} className={classes.subText}>
                  {" "}
                  tried to call on PrivateSportShop
                </p>
              </Grid>

              <Grid
                item
                xs={4}
                style={{ placeContent: "center", display: "flex" }}
                className={classes.subText}
              >
                <MoreVertIcon
                  style={{ marginTop: "auto", marginBottom: "auto" }}
                />

                <p style={{ marginTop: "20%", marginBottom: 0 }}>07:03 PM</p>
              </Grid>
            </Grid>
          </Paper>

          {/* content 5 */}
          <p className={classes.dateText}>
            ------------------------------------ June, 23 2017
            ------------------------------------
          </p>

          <Paper className={classes.containerPaper}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={2}
                style={{ textAlign: "center", marginTop: "3%" }}
              >
                <PhoneCallbackIcon style={{ width: "20px" }} />
              </Grid>

              <Grid item xs={6}>
                <p className={classes.boldText} style={{ marginBottom: 0 }}>
                  +33 1 76 44 04 77
                </p>
                <p style={{ marginTop: 0 }} className={classes.subText}>
                  {" "}
                  tried to call on Xavier
                </p>
              </Grid>

              <Grid
                item
                xs={4}
                style={{ placeContent: "center", display: "flex" }}
                className={classes.subText}
              >
                <MoreVertIcon
                  style={{ marginTop: "auto", marginBottom: "auto" }}
                />

                <p style={{ marginTop: "20%", marginBottom: 0 }}>05:57 PM</p>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
