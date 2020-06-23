

import React from 'react';

export const GetDate = ({date}) => {
    return <h1>Good to have you back! Today's date is {date.toLocaleDateString()}</h1>;
}