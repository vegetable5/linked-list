const CircularLinkedList = require('./CircularLinkedList');

describe('CircularLinkedList', () => {
    let list;

    beforeEach(() => {
        list = new CircularLinkedList();
    });

    describe('length', () => {
        test('should return 0 for empty list', () => {
            expect(list.length()).toBe(0);
        });

        test('should return correct length after adding elements', () => {
            list.append('a');
            list.append('b');
            expect(list.length()).toBe(2);
        });
    });

    describe('append', () => {
        test('should add element to empty list', () => {
            list.append('a');
            expect(list.length()).toBe(1);
            expect(list.get(0)).toBe('a');
        });

        test('should add multiple elements', () => {
            list.append('a');
            list.append('b');
            list.append('c');
            expect(list.length()).toBe(3);
            expect(list.get(0)).toBe('a');
            expect(list.get(1)).toBe('b');
            expect(list.get(2)).toBe('c');
        });
    });

    describe('insert', () => {
        test('should insert at beginning', () => {
            list.append('b');
            list.insert('a', 0);
            expect(list.get(0)).toBe('a');
            expect(list.get(1)).toBe('b');
        });

        test('should insert at middle', () => {
            list.append('a');
            list.append('c');
            list.insert('b', 1);
            expect(list.get(0)).toBe('a');
            expect(list.get(1)).toBe('b');
            expect(list.get(2)).toBe('c');
        });

        test('should insert at end', () => {
            list.append('a');
            list.insert('b', 1);
            expect(list.get(1)).toBe('b');
        });

        test('should throw error for invalid index', () => {
            expect(() => list.insert('a', -1)).toThrow('Index out of bounds');
            expect(() => list.insert('a', 1)).toThrow('Index out of bounds');
        });
    });

    describe('delete', () => {
        beforeEach(() => {
            list.append('a');
            list.append('b');
            list.append('c');
        });

        test('should delete first element', () => {
            expect(list.delete(0)).toBe('a');
            expect(list.length()).toBe(2);
            expect(list.get(0)).toBe('b');
        });

        test('should delete middle element', () => {
            expect(list.delete(1)).toBe('b');
            expect(list.length()).toBe(2);
            expect(list.get(1)).toBe('c');
        });

        test('should delete last element', () => {
            expect(list.delete(2)).toBe('c');
            expect(list.length()).toBe(2);
        });

        test('should throw error for invalid index', () => {
            expect(() => list.delete(-1)).toThrow('Index out of bounds');
            expect(() => list.delete(3)).toThrow('Index out of bounds');
        });
    });

    describe('deleteAll', () => {
        test('should delete all occurrences', () => {
            list.append('a');
            list.append('b');
            list.append('a');
            list.append('c');
            list.deleteAll('a');
            expect(list.length()).toBe(2);
            expect(list.get(0)).toBe('b');
            expect(list.get(1)).toBe('c');
        });

        test('should not affect list if element not found', () => {
            list.append('a');
            list.append('b');
            list.deleteAll('z');
            expect(list.length()).toBe(2);
        });
    });

    describe('get', () => {
        test('should return correct element', () => {
            list.append('a');
            list.append('b');
            expect(list.get(0)).toBe('a');
            expect(list.get(1)).toBe('b');
        });

        test('should throw error for invalid index', () => {
            expect(() => list.get(-1)).toThrow('Index out of bounds');
            expect(() => list.get(0)).toThrow('Index out of bounds');
        });
    });

    describe('clone', () => {
        test('should create independent copy', () => {
            list.append('a');
            list.append('b');
            const cloned = list.clone();

            expect(cloned.length()).toBe(2);
            expect(cloned.get(0)).toBe('a');
            expect(cloned.get(1)).toBe('b');

            cloned.append('c');
            expect(list.length()).toBe(2);
            expect(cloned.length()).toBe(3);
        });
    });

    describe('reverse', () => {
        test('should reverse list order', () => {
            list.append('a');
            list.append('b');
            list.append('c');
            list.reverse();

            expect(list.get(0)).toBe('c');
            expect(list.get(1)).toBe('b');
            expect(list.get(2)).toBe('a');
        });

        test('should handle single element', () => {
            list.append('a');
            list.reverse();
            expect(list.get(0)).toBe('a');
        });
    });

    describe('findFirst', () => {
        test('should find first occurrence', () => {
            list.append('a');
            list.append('b');
            list.append('a');
            expect(list.findFirst('a')).toBe(0);
            expect(list.findFirst('b')).toBe(1);
        });

        test('should return -1 if not found', () => {
            list.append('a');
            expect(list.findFirst('z')).toBe(-1);
        });
    });

    describe('findLast', () => {
        test('should find last occurrence', () => {
            list.append('a');
            list.append('b');
            list.append('a');
            expect(list.findLast('a')).toBe(2);
            expect(list.findLast('b')).toBe(1);
        });

        test('should return -1 if not found', () => {
            list.append('a');
            expect(list.findLast('z')).toBe(-1);
        });
    });

    describe('clear', () => {
        test('should remove all elements', () => {
            list.append('a');
            list.append('b');
            list.clear();
            expect(list.length()).toBe(0);
        });
    });

    describe('extend', () => {
        test('should add all elements from another list', () => {
            list.append('a');

            const other = new CircularLinkedList();
            other.append('b');
            other.append('c');

            list.extend(other);

            expect(list.length()).toBe(3);
            expect(list.get(0)).toBe('a');
            expect(list.get(1)).toBe('b');
            expect(list.get(2)).toBe('c');

            other.append('d');
            expect(list.length()).toBe(3);
        });
    });
});