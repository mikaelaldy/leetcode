/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return{
        val: val,
        toBe: function(val2){
            if (this.val !== val2){
                throw new Error("Not Equal");
            }else{
                return true;
            }
        },
        notToBe: function(val3){
            if (this.val === val3){
                throw new Error ("Equal");
            } else {
                return true;
            }
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */