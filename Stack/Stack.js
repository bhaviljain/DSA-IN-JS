class Stack {
    constructor(){
        this.stack = [];
    }
    push(ele){
        this.stack.push(ele);
    }
    pop()
    {
        if(this.isEmpty())
        {
            
        return "stack empty"
        }
        return this.stack.pop();
    }
    peek(){
        if(this.isEmpty())
        {
            
        return "stack empty"
        }
        return this.stack[this.size() - 1];
    }
isEmpty(){
    return this.size() === 0;
}
 size(){
    return this.stack.length;
 }  
 displayAll()
 {
    if(this.isEmpty()) return "array is empty"
    return this.stack.forEach((x)=>console.log("values are :",x))
   
 }
}
const Stacked = new Stack();
Stacked.push(1);
Stacked.push(12);
Stacked.push(22);
Stacked.push(77);
console.log(Stacked.size());

console.log(Stacked.peek());
console.log(Stacked.pop());
console.log(Stacked.pop());
console.log(Stacked.pop());
console.log(Stacked.pop());
console.log(Stacked.peek());
console.log(Stacked.isEmpty());
Stacked.push(22);
Stacked.push(22);
Stacked.push(22);
Stacked.push(22);
console.log(Stacked.displayAll());
