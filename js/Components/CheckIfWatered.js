import React, {useEffect, useState} from 'react';

export const CheckIfWatered = (id, date, days) => {
    const [currentDate, changeDate] = useState(new Date());
        return currentDate - date <= days;

}
