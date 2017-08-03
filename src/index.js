export default findAllIndexes = (entry, values = [], options = {}) => {

    let i = -1;
    const list = [];

    (Array.isArray(values) ? values : [values]).forEach(value => {
        while ((i = entry.indexOf(value, i + 1, true === options.hex ? 'hex': undefined)) !== -1) list.push(i);
    });

    if (true === options.sort) {
        list.sort();
    }
    
    return list;

}