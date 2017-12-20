import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";

import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from "react-sparklines";
const propTypes = {};
const defaultProps = {};

function average(data) {
  return _.round(_.sum(data) / data.length);
}

export default function Chart({ data, units, color }) {
  return (
    <div>
      <Sparklines height={150} width={200} margin={5} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
      <div>
        Next 5 days average: {average(data)} ({units})
      </div>
    </div>
  );
}

Chart.propTypes = propTypes;
Chart.defaultProps = defaultProps;
