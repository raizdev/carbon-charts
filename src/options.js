export default {
    title: "Step (time series)",
    axes: {
      bottom: {
        title: "2019 Annual Sales Figures",
        mapsTo: "date",
        scaleType: "time",
      },
      left: {
        mapsTo: "value",
        title: "Conversion rate",
        scaleType: "linear",
      },
    },
    curve: "curveStepAfter",
    height: "400px",
  }