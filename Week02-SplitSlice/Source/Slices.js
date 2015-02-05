/**
 * Created by charliecalvert on 1/13/15.
 */

exports.stringSlices = {

    getFirstThreeCharacters: function(value) {
        'use strict';
        return value.slice(0, 3);
    },
    
    getLastThreeCharacters: function(value){
        'use strict';
        return value.slice(-3);
    },
    
    getMiddleThreeCharacters: function(value) {
        'use strict';
        var result = (value.length)/2;
        return value.slice((result -1),(result+2));
    },
    
    getAllButFirstAndLast: function(value) {
        'use strict';
        return value.slice(1, -1);
    },
    
    getAllButFirstAndLastIfSame: function(value) {
        'use strict';
        var resultFirst = value.slice(0,1);
        var resultLast = value.slice(-1);
        if(resultFirst === resultLast){
            return value.slice(1, -1);
        }
    },
    
    getAllButFirstAndLastIfSame: function(value) {
        'use strict';
        if(value.slice(1) !== value.slice(-1)){
            return value.slice(0);
        }
    }

    
};
