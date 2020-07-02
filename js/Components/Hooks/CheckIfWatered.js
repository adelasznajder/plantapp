import React, {useEffect, useState} from 'react';

export const CheckIfWatered = (id, date, days) => {
    const [currentDate, changeDate] = useState(new Date());
    const oneDay = 24 * 60 * 60 * 1000;
        return Math.round(Math.abs((date - currentDate) / oneDay)) <= days;

}
