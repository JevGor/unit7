var prop = new binaryThree()


function binaryThree (val){
    this.value = val
    this.left = null
    this.rigth = null
}   

binaryThree.prototype.insert = function(val) {
    if (val < this.value && this.left){
        this.left.insert(val)
    }
    if (val < this.value && !this.left){
        this.left = new binaryThree(val)
    }
    if (val > this.value && this.rigth){
        this.rigth.insert(val)
    }
    if (val > this.value && !this.rigth){
        this.rigth = new binaryThree(val)
    }
}

binaryThree.prototype.contains = function(target) {
    if (this.value === target){
        return true 
    }
    return !!(this.left && this.left.contains(target))
    || !!(this.left && this.left.contains(target))
}

prop.insert (1)
prop.insert (4)
prop.insert (5)
prop.insert (10)
prop.insert (16)
prop.insert (17)
prop.insert (21)

