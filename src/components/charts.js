import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


function average(data) {
    return data.reduce((a, b) => a + b, 0) / data.length;
}

export default (props) => {
    return (
        <div>
            <Sparklines data={props.data} >
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>
                {Math.round(average(props.data))}  ({props.units})
            </div>
        </div>
    );
}