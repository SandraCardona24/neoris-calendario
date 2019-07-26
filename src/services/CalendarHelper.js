export class CalendarHelper {
    static getDaysInMonth(year,month){
        return new Date(year, month, 0).getDate();
    }
    static getCurrentDate() {
        return new Date();
    }
    
}
export const DateSystem = new Date();
export const Days = ['L','M','X','J','V','S','D'] 