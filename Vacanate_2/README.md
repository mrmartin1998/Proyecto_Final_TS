What is Truffle Ganache?

Truffle is a popular development framework for Ethereum that provides a suite of tools to make smart contract development, testing, and deployment easier and more consistent. It offers a built-in smart contract compilation, linking, deployment, and binary management which simplifies the entire process.

Ganache is a part of the Truffle suite and serves as a personal, local blockchain for Ethereum development. It allows developers to deploy contracts, develop applications, and run tests in an isolated environment. With Ganache, transactions are instantaneous, and there's no need to spend real Ether, making it perfect for development and testing.

Together, Truffle and Ganache provide a comprehensive environment for Ethereum smart contract development.

1. Start and Launch Network on truffle and ganache

1.1 Installation: If you haven't already, install Truffle globally using npm:

```
npm install -g truffle
```
1.2 Download Ganache

1.3 Launch Ganache

2. Develop smartcontract

- Enroll a Student: This function will take in two parameters - the chosen course and the address (or name) of the person enrolling. It will then record this information.

- Get Enrolled Students for a Course: This function will take in a course name as a parameter and return a list of all students enrolled in that course.

- Get All Enrolled Students: This function will return a list of all students and the courses they are enrolled in.

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TokioSchoolEnrollment {
    enum Course {
        ComputerSecurity,
        Programming,
        ComputerNetworks,
        Blockchain
    }

    struct Student {
        address studentAddress;
        Course course;
    }

    Student[] public students;

    function enroll(Course _course) public {
        Student memory newStudent = Student({
            studentAddress: msg.sender,
            course: _course
        });
        students.push(newStudent);
    }

    function getStudentsByCourse(Course _course) public view returns (address[] memory) {
        address[] memory enrolledAddresses = new address[](students.length);
        uint256 count = 0;
        for (uint256 i = 0; i < students.length; i++) {
            if (students[i].course == _course) {
                enrolledAddresses[count] = students[i].studentAddress;
                count++;
            }
        }
        return enrolledAddresses;
    }

    function getAllStudents() public view returns (Student[] memory) {
        return students;
    }
}
```

3. Deploysmart contract onto the network

3.1 Initialize Truffle Project: In your project directory, initialize a new Truffle project:
```
truffle init
```

3.2 Compile the smart contract using:
```
truffle compile
```

3.3 Migration script: Create a migration script in the migrations/ directory. This script will handle the deployment of your smart contract to Ganache.

3.4 Configure Network: In the truffle-config.js file, ensure that you have Ganache's settings. By default, Ganache runs on http://127.0.0.1:7545.

3.5 Deploy: Deploy the smart contract to Ganache using:

```
truffle migrate --network development
```

4. Interact with the Smartcontract
