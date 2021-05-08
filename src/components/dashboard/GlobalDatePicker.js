import React from 'react';
import { DateRangePicker } from 'rsuite';

const GlobalDatePicker = () => (
  <DateRangePicker
    appearance="default"
    value={[new Date('2021-02-01'), new Date('2021-05-20')]}
  />
);
export default GlobalDatePicker;
