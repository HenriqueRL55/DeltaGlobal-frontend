export const sumOneDay = (date) => {
    const result = new Date(date);
    result.setDate(result.getDate() + 1);
    return result;
  };
  
  export const isDateInRange = (dataInicio, dataFim, startDate, endDate) => {
    const productStart = new Date(dataInicio);
    const productEnd = new Date(dataFim);
    const filterStart = startDate ? new Date(startDate) : null;
    const filterEnd = endDate ? sumOneDay(new Date(endDate)) : null;
  
    const startsWithinRange = filterStart ? productStart >= filterStart : true;
    const endsWithinRange = filterEnd ? productEnd <= filterEnd : true;
  
    return startsWithinRange && endsWithinRange;
  };
  