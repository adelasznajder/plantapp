import React from 'react';

export const GetDate = ({date}) => {
    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Good to have you back! </h1>
                    <p className="lead">Today's date is {date.toLocaleDateString()}</p>
                </div>
            </div>
        </>
    )
}