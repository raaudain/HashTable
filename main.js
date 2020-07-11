function HashTable(size){
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next){
  this.key = key;
  this.value = value;
  this.next = next || null;
}

const myHT = new HashTable(30);
console.log(myHT)

console.log("hello world".charCodeAt(4))