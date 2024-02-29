
$(document).ready(function() {

    // function to recalculate
    var recalculate = function () {

        // loop through all rows
        $('tr.calc-row').each(function(){

            // loop through each field in this row and calculate the total
            var row_total = 0;
            $(this).find('td .field').each(function(){

                // grab the integer value of the field
                var field_val = parseInt( $(this).val() );

                // if it's empty, make it zero
                if ( isNaN( field_val ) ) field_val = 0;

                // add to row total
                row_total = row_total + field_val;
                
            });

            // set the row total
            $(this).find('.score').html( row_total );

        })
    }

    $('.field').on( 'keyup', function(){

        // clean all non 1-5 values
        var cleaned = $(this).val().replace( /[^1-5]/g, '' );

    // set to max 5
        cleaned = ( cleaned > 5 ? 5 : cleaned );

        // set the field value to the cleaned and max value filtered value
        $(this).val( cleaned );

        // recalculate the whole page
        recalculate();

    });

    // recalculate on load
    recalculate();

});
