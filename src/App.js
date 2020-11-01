import React, { Component } from 'react';
import DatePicker from './components/datePicker/datePicker';
import * as classes from './App.module.css';


class App extends Component {

  render() {
    return (
      <React.Fragment>
        <div className={classes.gridContainer}>
          {/* NAV BAR SECTION */}
          <div className={classes.navBar}>
            <div className={classes.flexWrapper}>
              <p>CUSTOM REACT DATE PICKER</p>
            </div>
          </div>
          {/* CALENDAR */}
          <div className={classes.DatePickerSet}>
            <DatePicker></DatePicker>
          </div>
        </div>
      </React.Fragment>
    )
  }

}

export default App;
