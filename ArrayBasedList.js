class ArrayBasedList {
    constructor() {
        this.elements = [];
    }

    length() {
        return this.elements.length;
    }

    append(element) {
        this.elements.push(element);
    }

    insert(element, index) {
        if (index < 0 || index > this.elements.length) {
            throw new Error('Index out of bounds');
        }
        this.elements.splice(index, 0, element);
    }

    delete(index) {
        if (index < 0 || index >= this.elements.length) {
            throw new Error('Index out of bounds');
        }
        return this.elements.splice(index, 1)[0];
    }

    deleteAll(element) {
        this.elements = this.elements.filter(el => el !== element);
    }

    get(index) {
        if (index < 0 || index >= this.elements.length) {
            throw new Error('Index out of bounds');
        }
        return this.elements[index];
    }

    clone() {
        const newList = new ArrayBasedList();
        newList.elements = [...this.elements];
        return newList;
    }

    reverse() {
        this.elements.reverse();
    }

    findFirst(element) {
        return this.elements.indexOf(element);
    }

    findLast(element) {
        return this.elements.lastIndexOf(element);
    }

    clear() {
        this.elements = [];
    }

    extend(elements) {
        for (let i = 0; i < elements.length(); i++) {
            this.append(elements.get(i));
        }
    }
}

module.exports = ArrayBasedList;