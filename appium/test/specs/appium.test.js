var expect = require('chai').expect;
const { remote, Keys, driver } = require('webdriverio');

describe('Sample Test',()=>{
    it('Fail Login Test if email and password input wrongly',async ()=>{
        //input incorrect password
        await $('~email-input').setValue("123");
        await $('~password-input').setValue("999");
        //click login button
        const myButton = await $('~login-btn');
        await myButton.click();
        //login error dialog is displayed
        let isDisplay = await $('~login-dialog').isDisplayed();
        expect(isDisplay).to.equal(true);    
    })

    it('Input invalid password',async ()=>{
        //input incorrect password
        await $('~email-input').setValue("123");
        await $('~password-input').setValue("999");
        //click login button
        const myButton = await $('~login-btn');
        await myButton.click();
        //password error is displayed
        let errorLabel = await $('~pw-err-msg');
        const errorText = await errorLabel.getText();
        expect(errorText).to.equal('Password must contain at least 8 characters');
    })

    // it('Login success',async ()=>{
    //     //input incorrect password
    //     await $('~email-input').setValue("123");
    //     await $('~password-input').setValue("999");
    //     //click login button
    //     const myButton = await $('~login-btn');
    //     await myButton.click();
    //     //login error dialog is displayed
    //     let isDisplay = await $('~login-dialog').isDisplayed();
    //     expect(isDisplay).to.equal(true);

    //     // let errorLabel = await $('~emailerror');
    //     // const errorText = await errorLabel.getText();
    //     // console.log(errorText);

    //    //expect(errorText).to.equal('Password must contain at least 8 characters');

    //     //expect(errorText).to.equal('Password must contain at least 8 characters');       
    // })
})