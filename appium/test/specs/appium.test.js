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

    it('Login success',async ()=>{
        await $('~login-dialog-btn').click();

        
        //correct password
        await $('~email-input').setValue("johndoe@email.com");
        await $('~password-input').setValue("pAsSWoRd!");
        //click login button
        const myButton = await $('~login-btn');
        await myButton.click();
    })
    it('Navigate Landing',async ()=>{

        let isDisplay = await $('~bottom-nav').isDisplayed();
        expect(isDisplay).to.equal(true); 
        
    })

})