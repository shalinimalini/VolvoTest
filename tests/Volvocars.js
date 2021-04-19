const { isExportDeclaration } = require("typescript")

/* const base= require("../pageobjects/base");
const safety= require("../pageobjects/safetypage") */

describe('First Steps with WebdriverIO',()=> {
     
    it('Load Volvo Website',() => {

        //Load Website
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more')

       // browser.fullscreenWindow()
        browser.pause(5000)


        //Validate the path loaded
        expect(browser).toHaveUrl('https://www.volvocars.com/intl/v/car-safety/a-million-more')
        
        //Validate the Title
        expect(browser).toHaveTitle('A million more | Volvo Cars')

    })

    /* it("should click on Cookie Accept button", function() {
        
      base.cookieBtnAccept.waitForExist();
      if(base.cookieBtnAccept.isExisting())
      { 
          base.cookieBtnAccept.click();
      }
      else
      {
          console.log("Didnot display the Cookie setting popup");
      }    
      base.ShortPause();
   }); */

     it('Text Header verification',() => {

        //Get selector info from the Browser
        const h2 = $('h2')

        //Validate the presence in the Browser
        expect(h2).toBeVisible()

     })

     it('Paragraph verification',() => {

        //Get selector info from the Browser
        const p = $('[class="a ac ae ai aj an ao as bd be bf bg bh bi bj bk bl bm bn bo bp"]')

        //Validate the presence in the Browser
        expect(p).toBeVisible()
     })

     it('Campaign verification',() =>{

/*         //Get frame
        const video = $('//div[@id="Video-1"]')
        expect(video).toBeClickable()
        video.click()
        browser.pause(1000) */

     
     })

     //Switch to Iframe to interact with Video Player
     

})