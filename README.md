# Linked List Lab

This project demonstrates two different implementations of a character list data structure: a circular singly linked list and an array-based list.

Both implementations support the following operations:
* Calculate list size
* Add elements to end or specific position
* Remove elements by position or value
* Access elements at any position
* Reverse element order
* Find elements from beginning or end
* Create independent copies
* Merge with other lists

The project is written in **JavaScript** and includes **comprehensive unit tests using Jest**.

## Variant Calculation

Student number: 20  
Variant: 20 % 4 = 0

## Build and Test Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm

### Setup
```bash
git clone https://github.com/vegetable5/linked-list
cd linked-list
npm install
```

### Running Tests
```bash
npm test
```

### Failed CI Commit
The commit where tests intentionally failed for CI demonstration: `51a33bd`

## Unit Testing Conclusions

Unit tests proved to be extremely valuable during development:

**Why tests were helpful:**
- Caught complex bugs in circular list logic that would be hard to spot manually
- Provided confidence when refactoring from linked list to array implementation
- Ensured both implementations behave identically across all operations
- Automated CI catches any breaking changes immediately

**Overall verdict:** Unit tests were definitely worth the effort and significantly improved code quality.

