class custom_localStorage{
    constructor(){
        this.map = new Map()
    }
    setItem(key, value) {
        if(typeof value != "string"){
            return (this.map.set(key, JSON.stringify(value)))
        }
        else{
            return (this.map.set(key, value))
        }
    }
    getItem(key) {
        return (this.map.get(key))
    }
    clear(){
        return (this.map.clear())
    }
    removeItem(key) {
        return (this.key.delete(key))
    }
    length(){
        return (this.map.size)
    }
}



let first = new custom_localStorage()
first.setItem("firstKey", {
    fname : "ritrik",
    lname : "rohra"
})
first.setItem("firstKey", {
    fname : "nitin",
    lname : "rohra"
})

console.log(first);
console.log(JSON.parse(first.getItem("firstKey")));

console.log(first.length());