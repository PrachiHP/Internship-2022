/*
    To learn
        1. What is array?
        2. Create array
        3. Array properties - length, prototype
        4. Array characteristics
            4.1 Zero indexed - Manually get value by index
            4.2 Arrays are not associative arrays - They cannot be accessed with string indexes, but must be accessed using nonnegative integers as index
            4.3 Mix of different data types
            4.4 Resizable
            4.5 Shallow copies and deep copies
        5. Array methods
            5.1 concat()
            5.2 includes()
            5.3 indexOf()
            5.4 slice()
            5.5 filter()
            5.6 find()
            7.2 map()
            reduce()
            6. Array to string conversion and vice-versa
            7. Looping
            7.1 for()
            7.3 forEach()

    Self learning
        1. Difference between map, for, forEach
        2. Matrix creation

    Reference
        1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

// EXAMPLES
// 1. Create array
    // 1.1 With constructor
        const array1 = new Array('eat', 'sleep', 'work');
        console.log('constructor array: ', array1);
        
    // 1.2 Direct
        const array2 = ['eat', 'sleep', 'work'];
        console.log('Direct array: ', array2);

// 2. Check array length
    console.log('array length', array2.length);

// 3. Zero indexed
    console.log('First element', array2[0]);
    console.log('Second element', array2[1]);
    console.log(array2.indexOf('work'));

// 4. Mix of different data types
    const validArray = ['Apple', 4, 1.5, {}];

// 5. Resizable array
    const sampleArray = ['Strawberry', 'Banana', 'Mango', 'Apple', 'Lichi', 'Cherry'];
    console.log('Original array length: ', sampleArray.length);

    // 5.1 pop() - Removes last element
        const removedItem = sampleArray.pop();
        console.log('Removed item: ', removedItem);
        console.log('Updated array: ', sampleArray);
        console.log('Updated array length: ', sampleArray.length);

    // 5.2 splice() - Adds and/or removes elements from an array !important
        // Remove - Please do not use delete method as it creates empty/undefined element in between
        const removedItems = sampleArray.splice(2, 1);
        console.log('Removed item: ', removedItems);
        console.log('Updated array: ', sampleArray);
        console.log('Updated array length: ', sampleArray.length);

        // Add
        sampleArray.splice(2, 0, 'Sitafal');
        console.log('Updated array: ', sampleArray);
        console.log('Updated array length: ', sampleArray.length);
        // sampleArray.splice(2, 0, ['Sitafal']);

    // 5.3 push() - Add new items at the end of array
        sampleArray.push('Ramfal');
        console.log('Updated array: ', sampleArray);
        sampleArray.push(["Kiwi", "Lemon"]);
        console.log('Updated array: ', sampleArray);

// 6. Array methods
    // 6.1 concat()
    // 6.2 includes()
    // 6.3 indexOf()
    // 6.4 slice() - Extracts a section of the calling array and returns a new array
    // 6.5 filter() - Returns a new array containing all elements of the calling array for which the provided filtering function returns true
    // 6.6 find() - Returns the value of the first element in the array that satisfies the provided testing function, or undefined if no appropriate element is found

// 7. Array conversion
    const helloWorld = ['Hello', 'world!', 'Good', 'afternoon'];
    // 7.1 Array to string
        console.log(helloWorld.toString());
        console.log(helloWorld.join(' and '));

    // 7.2 String to array
        const sampleString = 'Hi there! How are you';
        console.log(sampleString.split(' '));


