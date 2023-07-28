export const formatNumberToShort = (value) => {
    const suffixes = ['', 'K', 'M', 'B', 'T'];
    const suffixNum = Math.floor(Math.log10(value) / 3);
    let shortValue = (value / Math.pow(10, suffixNum * 3)).toFixed(1);
    return shortValue + suffixes[suffixNum];
}