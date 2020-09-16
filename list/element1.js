// first element
list1=["isha","amit","prem"]
{console.log(list1[0])
}
// last element
list2=["pagal","prem","admi"]
{console.log(list2[1])
}
// list3
{console.log(list2.length-1)}
// looping over list 
// item will give name
// index will give numbeer
// array for increament
list2.forEach(function(item, index, array){
    console.log(item, index)
})
// Add an item to the end of an Array

var append = list2.push('Orange')
{console.log(list2)
}
// Remove an item from the end of an Array
// uisng pop for deleting last elemnt
var delet=list2.pop()
{console.log(list2)}
// Remove an item from the beginning of an Array
// we are using shift for delte first element

var element_first=list2.shift()   
{console.log(list2)}
// Add an item to the beginning of an Array

// we are using unshift and push for adding first element
var adding=list2.push("isha")
{console.log(list2)}
// we are using object keys its giving number ofelment
console.log(Object.keys(list2))
// length is giving lenthg
console.log(list2.length) 







