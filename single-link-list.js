'use strict'

function Node( val, next = null ) {
    this.val = val;
    this.next = next;
}

function SinglyLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}




// A function for internal use to return the ENTIRE node object at an index.
SinglyLinkedList.prototype.__getNodeAt = function( position ) {
    let currentNode = this.head;
    let length = this.length;
    let count = 0;
    // special cases-- an invalid position is requested--either there is nothing in list, or the position does not exist in list
    if ( length === 0 || position > length ) {
        throw new Error( 'position does not exist in list' );
    } else if ( length === 1 ) {
        // return the only node if list only has one node.
        return currentNode;
    } else {
        // returns entire node for a position and list length greater than 1
        while ( position > count ) {
            // loop increases the value of count until it travels to correct position of argument;
            count++;
            // and replaces the current node value with the next value.
            currentNode = currentNode.next;
        }
        return currentNode;
    }
};


//push one node onto to the end of a list.
SinglyLinkedList.prototype.push = function( val ) {
    var newNode = new Node( val );
    //if statement applies to empty array -- Properly updates the head pointer
    if ( !this.head ) {
        this.head = newNode;
        this.tail = this.head;
    } else if ( this.length === 1 ) {
        //   updates head.next on lists of size 1
        this.head.next = newNode;
        this.tail = newNode;
    } else {
        // replaces the list's current tail value to be the pushed function's argument val
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.length++;
    //     returns the list itself so chaining works
    return this;
};

SinglyLinkedList.prototype.clear = function() {
    this.head = null;
    this.tail = null;
    this.length = 0;
};

//remove one node from the end of a list and return it
SinglyLinkedList.prototype.pop = function() {
    // returns undefined or null when called on an empty list
    if ( !this.head ) {
        return
    } else if ( this.length === 1 ) {
        // Updates the head when list only contains one element the only node in the list is popped
        let tailValue = this.tail.val;
        this.head = null;
        this.tail = null;
        this.length = 0;
        return tailValue;
    } else {
        // Updates the tail with each request to remove an element
        let oldTailValue = this.tail.val;
        // get the value of the second to last node.
        let newShorterListTail = this.__getNodeAt( this.length - 2 );
        // Point the second to last node's next to undefined or null, effectively breaking the chain to that node.
        newShorterListTail.next = null;
        // Point the tail to the second to last node.
        this.tail = newShorterListTail;
        //   Updates the length properly when called
        this.length--;
        //   Returns the value at the end of the list
        return oldTailValue;
    }
};



// Adds a value to the front of the list
SinglyLinkedList.prototype.unshift = function( val ) {
    var newNode = new Node( val );
    if ( !this.head ) {
        //newNode becomes everything in the list
        this.head = newNode;
        this.tail = newNode;
    } else {
        //store current head value in variable
        var currHead = this.head;
        //update head value with argument's new node
        this.head = newNode;
        this.head.next = currHead;
    }
    this.length++;
};



// removes a value from the front of the list and returns it
SinglyLinkedList.prototype.shift = function() {
    //returns nothing if there is nothing in list
    if ( !this.head ) {
        return
    }
    //remove node at index zero
    return this.remove( 0 );
};



//retrieves a value in the list
SinglyLinkedList.prototype.get = function( index ) {
    if ( this.length > 0 && index < this.length ) {
        return this.__getNodeAt( index ).val
    }
};

SinglyLinkedList.prototype.__previous = function( position ) {
    if ( this.length > 0 && position < this.length ) {
        let count = 0;
        while ( count < position ) {
            let currentNode = this.__getNodeAt( position )
                //save the value of the entire node previous to currentNode as currentNode.prev
            count++
            var prevNode = this.__getNodeAt( count - 1 );
        }
    }
    return prevNode

};


//replaces new value in a list
SinglyLinkedList.prototype.set = function( index, val ) {
    if ( this.length > 0 && index < this.length ) {
        this.__getNodeAt( index ).val = val;
    }
};


// removes a node, wherever in the list
SinglyLinkedList.prototype.remove = function( position ) {
    var currentIterativeNode = this.head;
    var deletedNode;
    var length = this.length;
    var count = 0;
    // special cases-- an invalid position is requested--either there is nothing in list, or the position does not exist in list
    if ( length === 0 || position > length ) {
        return
    }
    // return the first node if requested
    if ( position === 0 ) {
        //assignt the list's head node to be the next node after current head
        this.head = currentIterativeNode.next;
        //save the node you're deleting in order to return its value
        deletedNode = currentIterativeNode;
        //delete the values in the current node
        currentIterativeNode = null;
        //decrease length of list
        this.length--;
        return deletedNode.val;
    }
    //save value of position's node
    var nodeToRemove = this.__getNodeAt( position );
    //save the previous node
    var prevNode = this.__previous( position );
    //save the node after
    var nextNode = nodeToRemove.next;
    //orphan the argument's node by pointing the previous node's next past it
    prevNode.next = nextNode;
    //save the value to return
    var removedNodeToReturn = nodeToRemove;
    //delete the node itself
    nodeToRemove = null;
    //shorten node list length
    this.length--
        return removedNodeToReturn.val
}

// reverses the list...not finished yet
SinglyLinkedList.prototype.reverse = function() {
    var forwardList = this;

    function reverseMe( list ) {
        return reversedList
    }
    return reverseMe( forwardList )
};


module.exports = SinglyLinkedList;
