


function Palindrome(str) {
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return Palindrome(str.slice(1, -1));
    return false;
}


function Palindrom(str) {
    return str.split('').every((char, index) => {
        return char === str[str.length - index - 1];
    })
}