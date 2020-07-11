function HashTable(size){
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next){
  this.key = key;
  this.value = value;
  this.next = next || null;
}

// HASH VALUES
HashTable.prototype.hash = function(key){
  let total = 0;

  for (let i = 0; i < key.length; i++){
    total += key.charCodeAt(i);
  }

  // Handles if total is greater than buckets
  const bucket = total % this.numBuckets;

  return bucket;
}

// INSERT
HashTable.prototype.insert = function(key, value){
  // Hash the key to figure out which bucket to put the new node in
  let index = this.hash(key);

  // Shows which bucket the node is in
  console.log("Index:", index)

  // If nothing is in the bucket at the given index, put something there
  if (!this.buckets[index]){
    this.buckets[index] = new HashNode(key, value)
  }

  // If
  else if(this.buckets[index].key === key){
    this.buckets[index].value = value;
  }

  // If there is something, travel down the chain to find a spot to place it
  else{
    let currentNode = this.buckets[index];

    while(currentNode.next){
      // For updating an existing key's value
      if(currentNode.next.key === key){
        currentNode.next.value = value;
        return;
      }

      currentNode = currentNode.next;
    }
    // Adds node to chain
    currentNode.next = new HashNode(key, value);
  }
}

const myHT = new HashTable(30);

//console.log(myHT.hash("Becca"))

myHT.insert("Dean", "dean@gmail.com")
myHT.insert("Megan", "megan@gmail.com")
myHT.insert("Dane", "dane@yahoo.com")
myHT.insert("Dean", "deanmachine@gmail.com")
myHT.insert("Megan", "megan-smith@gmail.com")
myHT.insert("Dane", "dane1010@outlook.com")



console.log(myHT.buckets)

