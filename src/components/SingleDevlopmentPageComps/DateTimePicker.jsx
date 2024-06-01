import React from 'react';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faGlobe } from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';

const DateTimePicker = () => {
  // Implement a date-time picker or use a library like react-datetime-picker
  return (
    <div className="py-6 bg-white white flex justify-center items-center rounded-lg gap-6 w-full">

      <div>
        <h2 className="text-xl font-FuturaHeavy ">Select a Date & Time</h2>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar defaultValue={dayjs('2024-06-4')}/>
        </LocalizationProvider>
        <p className='font-FuturaDemi'>Time Zone</p>
        <div className="flex items-center gap-1">
          <FontAwesomeIcon icon={faGlobe} size='xs'/>
          <span>UK, Ireland, Lisbon Time (1:04pm)</span>
          <FontAwesomeIcon icon={faCaretDown} size='xs'/>
        </div>

      </div>

      <div>
        <div className="mb-4">
          <h3 className="text-lg font-medium">Friday, July 28</h3>
          <div className="grid grid-cols-1 gap-2 mt-2 overflow-y-scroll max-h-[300px] scrollbar-hide">
            <button className="border border-blue-500 text-blue-500 py-2 px-8 rounded">10:30am</button>
            <button className="border border-blue-500 text-blue-500 py-2 rounded">12:30pm</button>
            <button className="border border-blue-500 text-blue-500 py-2 rounded">1:00pm</button>
            <button className="border border-blue-500 text-blue-500 py-2 rounded">1:30pm</button>
            <button className="border border-blue-500 text-blue-500 py-2 rounded">5:00pm</button>
            <button className="border border-blue-500 text-blue-500 py-2 rounded">5:30pm</button>
            <button className="border border-blue-500 text-blue-500 py-2 rounded">6:00pm</button>
            <button className="border border-blue-500 text-blue-500 py-2 rounded">6:00pm</button>
            <button className="border border-blue-500 text-blue-500 py-2 rounded">6:00pm</button>
            <button className="border border-blue-500 text-blue-500 py-2 rounded">6:00pm</button>
            <button className="border border-blue-500 text-blue-500 py-2 rounded">6:00pm</button>
          </div>
        </div>

      </div>



    </div>
  );
};

export default DateTimePicker;
