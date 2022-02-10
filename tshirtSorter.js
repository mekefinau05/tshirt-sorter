// Write your solution below:
function shorter(string) {
    let str = string.toLowerCase()
    let rtnStr = ''
    let s = ''
    let m = ''
    let l = ''
    
    for(i=0; i<str.length; i++) {
        if(str[i] === 's') {
            s+= str[i]
        }else if(str[i] === 'm') {
            m+= str[i]
        }else if(str[i] === 'l') {
            l+= str[i]
        }
    }
    rtnStr = s + m + l
    console.log(rtnStr)
    
}
shorter('lms')
shorter('smllms')