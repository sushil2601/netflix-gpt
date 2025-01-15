export const checkValidateData = (email,password,firstName,lastName) =>{

    const isEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isFirstName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(firstName);
    const isLastName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(lastName);

    if(!isEmail) return 'Email is not valid';
    if(!isPassword) return 'Password is not valid';
    // if(!isFirstName) return 'First name is not valid';
    // if(!isLastName) return 'Last name is not valid';

    return null;


}