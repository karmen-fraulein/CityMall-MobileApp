export const paginationDotCount = (dataArray: any[], moduloNumber: number) => {
    let count: number;
    if(dataArray == undefined) {
        count = 0;
    } else if(dataArray.length % moduloNumber > 0) {
        count = Math.trunc(dataArray.length / moduloNumber) + 1
    } else {
        count = dataArray.length / moduloNumber
    };

    return count;
};

export const formatNumber = (number: any) => {
    let formattedNumber = parseFloat(number);
    return formattedNumber
        .toFixed(2)
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}       

