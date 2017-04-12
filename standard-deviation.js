// average of an array
export const arrayAverage = (arr) => arr.reduce((acc, val) => acc + val, 0) / arr.length;

// differences of array values
export const differences = (arr) => arr.map(x => x - arrayAverage(arr)).map(x => x * x);

// variance i.e. average difference
export const variance = (arr) => arrayAverage(differences(arr));

// standard deviation of array values
export const standardDeviation = (arr) => Math.sqrt(variance(arr));

// outlier values in array
export const findOutliers = (arr) => arr.map(x => x - arrayAverage(arr) - standardDeviation(arr) > 0);
