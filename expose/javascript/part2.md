# Part 2
## A Little More of a Challenge...
1. At line 12, the console will log the value of the variable i after the for loop. The value of i will be 3. Variables declared with var can be accesseed throughout the function they are declared in.
2. At line 13, the console will log the value of the variable discountedPrice after the for loop. The value of discountedPrice will be 150. Variables declared with var can be accesseed throughout the function they are declared in.
3. At line 14, the console will log the value of the variable finalPrice after the for loop. The value of finalPrice will be 150. Variables declared with var can be accesseed throughout the function they are declared in.
4. This function returns the array 'discounted' that is declared on line 3. The contents of this array are [50, 100, 150]. Variables declared with var can be accesseed throughout the function they are declared in.
5. Line 12 causes an error because variables declared by let cannot be accessed outside of the block they were defined. Variable i was declared as part of the for loop block and was called outside of that block.
6. Line 13 causes an error because variables declared by let cannot be accessed outside of the block they were defined. Variable discountedPrice was declared as part of the for loop block and was called outside of that block.
7. Line 14 will successfully log the value of finalPrice because the variable, declared with let on line 4, is defined and accessed within the same block.
8. This function returns the array 'discounted' that is declared on line 3. The contents of this array are [50, 100, 150]. Variables declared with let can be accesseed throughout the function they are declared in and no rules are broken throughout this function.
9. Line 11 causes an error because the variable i is declared with let in the for loop block. Since it is called outside of it's scope, the code will cause a reference error.
10. Line 12 logs the variable length which is declared with const on line 4. Since length is never reassigned th econsole logs a 3 for the length of the array prices.
11. This function returns the array 'discounted' that is declared on line 3. The contents of this array are [50, 100, 150]. Variables declared with const cannot be reassigned and no rules are broken throughout this function.

## Data Types
12A. student.name
<br>
12B. student["Grad Year"]
<br>
12C. student.greeting()
<br>
12D. student["Favorite Teacher"].name
<br>
12E. student.courseLoad[0]

## Basic Operators & Type Conversion
13A. '32', 2 is converted into string and concatenated on '3'
<br>
13B. 1, '3' is converted into an int and is subtracted by 2
<br>
13C. 3, null is converted into 0 and added to 3
<br>
13D. '3null', null is converted into a string and concatenated on '3'
<br>
13E. 4, true is converted into 1 and added to 3
<br>
13F. 0, false and null are converted into 0 and added
<br>
13G. '3undefined', undefined is converted into a string and concatenated on '3'
<br>
13H. NaN, This behavior is undefined and there is no simple conversion

14A. true, 2 is converted into an int which is greater than 1
<br>
14B. true, 2 is greater than the first int of '12'
<br>
14C. true, '2' is converted to 2 which is equal to 2
<br>
14D. false, 2 and '2' are different types
<br>
14E. false, true is equal to 1 and 1 and 2 are different
<br>
14F. true, the Boolean conversion of 2 is true, 0 is false
<br>
15. The == operator checks equality after conversion and === checks equality without conversion. === will return false if the arguments are of different types while == will return true.

## Loops
16. Check File

## Functions
17. The function modifyArray would take in two arguments, array and callback. With [1, 2, 3] being the array that is passed in and doSomething being the callback function, modifyArray builds a new array with the elements in the array that is passed in. The values in the array that is passed in are doubled and pushed into the new array. The function returns the modified array [2, 4, 6].

## setInterval(), setTimeout(), clearTimeout()
18. Check File
19. The code outputs 1, 4, and 3 first, then after 1 a wait, outputs 2.