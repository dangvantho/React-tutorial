import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import {ThemeProvider} from '@material-ui/core/styles'
import { purple } from '@material-ui/core/colors';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});
export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <ThemeProvider className={classes.root} theme={theme}>
      <Accordion theme={theme}>
        <AccordionSummary
          expandIcon='v'
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading} color='primary' >Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color='secondary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </ThemeProvider>
  );
}