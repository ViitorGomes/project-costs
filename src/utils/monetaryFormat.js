export default function formatValue($value) {

    /* 
        Description: Format input value to a monetary format (999.999.999,99)

        Parameters: 
            $value: a string of numbers input value

        Return: a string of numbers in monetary format
    */

    // Array that will receive the integer and decimal value
    let value = [];
    
    //  If there is a comma followed by some value
    if ($value.match(/\,./g)) {
        
        value = $value.split(',');
        value[0] = value[0].replace(/[^0-9]/g, '');
        value[1] = value[1].replace(/[^0-9]/g, '');
    } 
    // if there is a comma without followed by some value
    else if ($value.includes(',')) {
        
        value = [$value.replace(/[^0-9]/g, ''), ','];
    }
    // if there no comma
    else {
        value = [$value.replace(/[^0-9]/g, '')];
    };
    
    // Receives the integer value for formatting the hundreds, thousands, million, etc...
    let valueArray = [...value[0]];
    
    // Place a dot in each decimal place starting from the hundredth place
    for (let i = value[0].length - 3; i > 0; i -= 3) {
        valueArray.splice(i, 0, '.');
    };
    
    // Join integer value with a comma to each decimal place
    value[0] = valueArray.join('', ',');
    
    // Update the paremeter value with the formatted value and remove extra commas
    $value = value.length > 1 ? value[0] + ',' + value[1].replace(/[\,\.]/g, '') : value[0];
    
    return $value;
}