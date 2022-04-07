'use strict';

var CalendarList = [];
var ScheduleList = [];
var ActorList = [];

function ScheduleInfo() {
    this.id = null;
    this.calendarId = null;
    this.actorId = null;

    this.title = null;
    this.body = null;
    this.isAllday = false;
    this.isHoliday = false;
    this.isActivityDay = false;
    this.start = null;
    this.end = null;
    this.category = 'allday';
    this.dueDateClass = '';

    this.color = null;
    this.bgColor = null;
    this.dragBgColor = null;
    this.borderColor = null;
    this.customStyle = '';

    this.isFocused = false;
    this.isPending = false;
    this.isVisible = true;
    this.isReadOnly = false;
    this.goingDuration = 0;
    this.comingDuration = 0;
    this.recurrenceRule = '';
    this.state = '';

    this.isPrivate = false;

    this.location = '';

    this.raw = {
        memo: '',
        hasToOrCc: false,
        hasRecurrenceRule: false,
        class: 'public', // or 'private'
        creator: {
            name: '',
            avatar: '',
            company: '',
            email: '',
            phone: ''
        }
    };
}

function CalendarInfo() {
    this.id = null;
    this.name = null;
    this.checked = true;
    this.color = null;
    this.bgColor = null;
    this.borderColor = null;
    this.dragBgColor = null;
}

function ActorInfo(){
    this.id = null;
    this.name = null;
}

function findCalendar(id) {
    var found;

    CalendarList.forEach(function(calendar) {
        if (calendar.id === id) {
            found = calendar;
        }
    });

    return found || CalendarList[0];
}