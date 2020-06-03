// Return the username and domain from standard email address
// Ex. username@example.com
function emailParts(email) {
    let emailSections = email.split("@");
    let result = [emailSections[0]];
    let domain = emailSections[1].split(".")[0];
    result.push(domain);
    return result;
}