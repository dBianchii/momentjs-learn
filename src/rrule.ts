import moment from "moment";
import pkg from "rrule";
const { RRule } = pkg;

const rrule = new RRule({
  interval: 1,
  dtstart: moment().utc().toDate(),
  until: moment().utc().add(2, "days").toDate(),
});

const occurernces = rrule.all();

console.log(rrule.options.freq == RRule.YEARLY);
