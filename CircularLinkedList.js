class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    length() {
        return this.size;
    }

    append(element) {
        const newNode = new Node(element);

        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode;
        } else {
            newNode.next = this.head;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    insert(element, index) {
        if (index < 0 || index > this.size) {
            throw new Error('Index out of bounds');
        }

        if (index === this.size) {
            this.append(element);
            return;
        }

        const newNode = new Node(element);

        if (index === 0) {
            if (this.size === 0) {
                this.head = newNode;
                this.tail = newNode;
                newNode.next = newNode;
            } else {
                newNode.next = this.head;
                this.tail.next = newNode;
                this.head = newNode;
            }
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
        }

        this.size++;
    }

    delete(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Index out of bounds');
        }

        let deletedData;

        if (this.size === 1) {
            deletedData = this.head.data;
            this.head = null;
            this.tail = null;
        } else if (index === 0) {
            deletedData = this.head.data;
            this.head = this.head.next;
            this.tail.next = this.head;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            deletedData = current.next.data;

            if (current.next === this.tail) {
                this.tail = current;
            }

            current.next = current.next.next;
        }

        this.size--;
        return deletedData;
    }

    deleteAll(element) {
        if (this.size === 0) return;

        while (this.size > 0 && this.head.data === element) {
            if (this.size === 1) {
                this.head = null;
                this.tail = null;
                this.size = 0;
                return;
            }

            this.head = this.head.next;
            this.tail.next = this.head;
            this.size--;
        }

        if (this.size === 0) return;

        let current = this.head.next;
        let prev = this.head;

        while (current !== this.head) {
            if (current.data === element) {
                if (current === this.tail) {
                    this.tail = prev;
                    this.tail.next = this.head;
                } else {
                    prev.next = current.next;
                }
                current = current.next;
                this.size--;
            } else {
                prev = current;
                current = current.next;
            }
        }
    }

    get(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Index out of bounds');
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        return current.data;
    }

    clone() {
        const newList = new CircularLinkedList();

        if (this.size === 0) return newList;

        let current = this.head;
        for (let i = 0; i < this.size; i++) {
            newList.append(current.data);
            current = current.next;
        }

        return newList;
    }

    reverse() {
        if (this.size <= 1) return;

        let prev = this.tail;
        let current = this.head;
        let next;

        for (let i = 0; i < this.size; i++) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.tail = this.head;
        this.head = prev;
    }

    findFirst(element) {
        if (this.size === 0) return -1;

        let current = this.head;
        for (let i = 0; i < this.size; i++) {
            if (current.data === element) {
                return i;
            }
            current = current.next;
        }

        return -1;
    }

    findLast(element) {
        if (this.size === 0) return -1;

        let current = this.head;
        let lastIndex = -1;

        for (let i = 0; i < this.size; i++) {
            if (current.data === element) {
                lastIndex = i;
            }
            current = current.next;
        }

        return lastIndex;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    extend(elements) {
        if (elements.size === 0) return;

        let current = elements.head;
        for (let i = 0; i < elements.size; i++) {
            this.append(current.data);
            current = current.next;
        }
    }
}

module.exports = CircularLinkedList;