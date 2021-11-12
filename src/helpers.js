// perform binary search and build up states necessary to do so
export const buildBinarySearchState = (array, target) => {
    let low = 0;
    let high = array.length - 1;
    let mid = Math.floor((low + high) / 2);
    let found = -1;
    const states = [];

    states.push({
        low,
        mid,
        high,
        found
    });

    while (low <= high) {        
        if (array[mid] < target) {
            low = mid + 1;
        } else if (array[mid] > target) {
            high = mid - 1;
        }
        else {
            found = mid;
        }
        
        mid = Math.floor((low + high) / 2);

        states.push({
            low,
            mid,
            high,
            found
        });

        if (found === mid) {
            break;
        }
    }

    return states;
}