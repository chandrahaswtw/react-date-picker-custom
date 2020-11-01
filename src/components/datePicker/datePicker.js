import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import classes from './datePicker.module.css';
import CalendarPane from '../calendar/calendar';
import WhiteBackDrop from '../whiteBackDrop/whiteBackDrop';

class MyApp extends Component {

  state = {
    showCalendar: false,
    posX: 0,
    posY: 0,
    selectedDate: '',
    isDateValid: true
  }

  onSelect = (e) => {
  }

  iconClick = (e) => {
    let posX = e.clientX;
    let posY = e.clientY;
    this.setState(() => {
      return {
        showCalendar: !this.state.showCalendar,
        posX, posY
      }
    })
  }

  dateChangeHandler = (date) => {
    this.setState(() => {
      return {
        selectedDate: date,
        showCalendar: false
      }
    })
  }

  inputOnChange = (e) => {
    let val = e.target.value;
    this.setState(() => {
      return {
        selectedDate: val,
        isDateValid: (/^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/.test(val)) || !(val.length > 0)
      }
    })
  }

  whiteBackDropClick = () => {
    this.setState(()=>{
      return {
        showCalendar: false
      }
    })
  }

  render() {

    var textClasses = [classes.textStyles];
    var invalidMessage = '';
    if (!this.state.isDateValid) {
      textClasses.push(classes.textInValid);
      invalidMessage = "Enter valid date";
    }

    var calendarSection = null;
    if (this.state.showCalendar) {
      calendarSection = (
       <React.Fragment>
        <CalendarPane posX={this.state.posX} posY={this.state.posY} dateChangeHandler={this.dateChangeHandler} selectedDate={this.state.selectedDate}></CalendarPane>
        <WhiteBackDrop WhiteBackDropClick={this.whiteBackDropClick}></WhiteBackDrop>
        </React.Fragment>
        )
    }

    return (
      <React.Fragment>
        <div className={classes.gridContainer}>
          <div className={classes.wrapper}>
            <input type="text" placeholder="MM/DD/YYYY" className={textClasses.join(' ')} value={this.state.selectedDate} onChange={this.inputOnChange} />
            <span className={classes.wrapperIcon} onClick={this.iconClick}>
              <FontAwesomeIcon icon={faCalendarAlt} size="lg">
              </FontAwesomeIcon></span>
          </div>
          <div className = {classes.validMessage}>
            <span>{invalidMessage}</span>
          </div>
        </div>
        {calendarSection}
      </React.Fragment>
    );
  }
}
export default MyApp;