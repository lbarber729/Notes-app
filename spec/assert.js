var assert = {
    isTrue: function(assertionToCheck) {
        if (!assertionToCheck) {
            throw new Error("Test failed: " + assertionToCheck + " is not truthy");
        }
        else {
            console.log("Test passes, WHOO!")
        };
    },

    isEqualTo: function(actual, expected) {
        if (actual !== expected) {
            throw new Error("Test failed: " + actual + " does not equal " + expected);
        }
        else {
            console.log("Test passes, WHOO!")
        };
    }
};
