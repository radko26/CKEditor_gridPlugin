describe('gridPlugin', function() {

  describe('index page', function(){
  	var pluginIcon = element(by.css('.cke_button__gridplugin'));
  	browser.ignoreSynchronization = true;
    browser.driver.get('http://localhost:8081/public/');


    it('should open the dialog', function() {
      	pluginIcon.click().then(function(){
      		var dialog = element(by.css('.cke_dialog'));
      	});
    });

    it('should open the dialog and choose grid template',function(){
    	pluginIcon.click().then(function(){
      		var grid = element(by.css('.container-fluid > div'));
      		grid.click().then(function(){
      			browser.driver.switchTo().frame(element(by.css('.cke_wysiwyg_frame'))).then(function(){
      				var gridTemplate = element(by.css('.layout-column'));
      			});
      		});
      	});

    });

  });

});
