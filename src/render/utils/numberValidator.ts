const numberValidator = (value: any): boolean => {
    if(typeof value == 'string') {
        return false;
    }
    try {
        const transformedValue = Number(value)
        return typeof transformedValue == 'number';
    } catch (e) {
        return false;
    }
}

export default numberValidator;
