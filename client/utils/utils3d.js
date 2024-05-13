export const normalize = (array, min, max) => {
  // console.log("normalize", array, min, max)
    // const max = Math.max(...array);
    // const min = Math.min(...array);

    return array.map((value) => (value - min) / (max - min));
  };

export const getMinMax = (array) => {
    const max = Math.max(...array);
    const min = Math.min(...array);

    return { min, max };
  }