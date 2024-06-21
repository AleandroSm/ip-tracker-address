
export function validateIpAddress(target){
    var ipv4Regex = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/
    
    var match = ipv4Regex.exec(target)
    
    if (match === null) {
        return false
    }
    
    for (var i = 1; i < match.length; i++) {
        var octeto = parseInt(match[i], 10)
        if (octeto < 0 || octeto > 255) {
            return false
        }
    }
    
    return true;
}

export function validateDomain(target){
    var domainRegex = /^[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/

    return domainRegex.test(target)
}
