/*
    To learn
        1. What is JSON?
        2. Create JSON
        3. Access element
		4. Add and remove property
		5. Property value shorthand
		6. Check if property exists
		7. JSON to string conversion and vice-versa
		8. Looping
		9. Array of objects

    Self learning
		1. https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/main/json/json-quiz.md
		2. Log the employees list in following format
			Name: Prachi Department: Frontend
			Name: Sonali Department: .NET
*/

// EXAMPLES
// 1. Create array
    // 1.1 With constructor
        let user = new Object();
        console.log('constructor empty json: ', user);
        user = {
            name: "JK",
            age: 30 
        };
        console.log('constructor json: ', user);

    // 1.2 Direct
        const person = {
            name: "JK",
            age: 30,
            'likes nature': true, // multiword property name must be quoted
			0: 'abc'
        };
        console.log('Direct json: ', person);
        console.log('person[0]: ', person[0]);

// 2. Access element: key-value pair, associative
	console.log('Name: ', person.name);
	console.log('Age: ', person.age);

	// 2.1 Access value dynamically
		const keyName = 'name';
		console.log('Dynamic value: ', person[keyName]);

	// 2.2 Access multiword propert's value
		console.log(person['likes nature']);

// 3. Add new property
    // 3.1 Static
        person.isAdmin = true;
        console.log('Updated json: ', person);

    // 3.2 Dynamic
        const newProperty = 'isEmployeed';
        person[newProperty] = 'Yes';
        console.log('Updated json: ', person);

// 4. Remove a property
    delete user.age;
    delete person['likes nature'];
    console.log('Updated json: ', person);

// 5. Property value shorthand
	const empName = 'Prachi';
	const empDepartment = 'Frontend';
	const notPreferable = {
		empName: empName,
		empDepartment: empName
	};

	const employee = {
		empName,
		empDepartment
	};

// 6. Check if property exists
	console.log('Person json: ', person);
	console.log('name' in person); // true
	console.log('key' in person); // false

// 7. JSON to string conversion and vice-versa
	// 7.1 JSON to string
		console.log(JSON.stringify(person));

	// 7.2 string to JSON
		const sampleString = '{"name":"JK", "age":30, "city":"New York"}';
		console.log(JSON.parse(sampleString));

// 8. Looping
	// 7.1 for..in loop
		console.log('Person json: ', person);
		for (let key in person) {
			// keys
			alert( key );  // name, age, isAdmin
			// values for the keys
			alert( person[key] ); // John, 30, true
		}

// 9. Array of objects
		const employees = [
			{
				name: 'Prachi',
				department: 'Frontend'
			},
			{
				name: 'Sonali',
				department: '.NET'
			}
		];

// SUMMARY
/*
	1. Objects are associative arrays with several special features.
	2. They store properties (key-value pairs), where:
	3. Property keys must be strings or symbols (usually strings).
	4. Values can be of any type.
	5. To access a property, we can use:
	6. The dot notation: obj.property.
	7. Square brackets notation obj["property"]. Square brackets allow taking the key from a variable, like obj[varWithKey].
	8. Additional operators:
		8.1 To delete a property: delete obj.prop.
		8.2 To check if a property with the given key exists: "key" in obj.
		8.3 To iterate over an object: for (let key in obj) loop.
*/



