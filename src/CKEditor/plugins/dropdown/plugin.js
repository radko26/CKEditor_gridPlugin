CKEDITOR.plugins.add( 'dropdown',
{   
   requires : ['richcombo'],
   init : function( editor )
   {
      
      function option(title,content){
         this.title = title;
         this.content = content;
      };

      var grid5050 = '<div class="container-fluid"><div class="row"><div class="col-xs-9"></div><div class="col-xs-4"></div><div class="col-xs-6"></div></div></div>';
      var grid7030 = '<div class="container-fluid"><div class="row"><div class="col-xs-3 col-md-3"></div><div class="col-xs-3 col-md-3"></div></div></div>';

      var menuItems = [];
      menuItems.push(new option("Grid 80/40/60",grid5050));
      menuItems.push(new option("Grid 70/30",grid7030));

      editor.ui.addRichCombo( 'dropdown',
      {
            label : "Insert grid",
            title :"Insert grid",
            voiceLabel : "Insert grid",
            multiSelect : false,



            init : function()
            {
               for(key in menuItems){
                  this.add(menuItems[key].content,menuItems[key].title,menuItems[key].title);
               }
            },

            onClick : function( value )
            {         
               editor.insertHtml(value);
              
            }
      });
   }
});