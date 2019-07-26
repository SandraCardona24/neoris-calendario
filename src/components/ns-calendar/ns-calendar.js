import { LitElement, html } from 'lit-element';
import {CalendarHelper,DateSystem} from '../../services/CalendarHelper';
class NsCalendar extends LitElement {
  constructor() {
    super();
    let date = CalendarHelper.getCurrentDate();
    console.log(CalendarHelper.getDaysInMonth(DateSystem.getFullYear(), DateSystem.getMonth()));
  }
  render(){
    return html`
      <p>Calendario</p>
    `;
  }
}
customElements.define('ns-calendar', NsCalendar);