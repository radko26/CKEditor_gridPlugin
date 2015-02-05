/**


**/
CKEDITOR.plugins.add( 'gridPlugin', {
    lang : 'en,bg',
    init: function( editor ) {

        editor.addContentsCss( this.path + 'css/style.css' );

        /**
            Templates
        */
        var templateWith1Col = new CKEDITOR.template( 
        '<div class="container-fluid layout-container">'+
            '<div class="row layout-row" >'+
                   '<div class="col-xs-{size1} col-sm-{size1} col-md-{size1} col-lg-{size1} layout-column ">'+
                        '<p>content</p>'+
                   '</div>'+
            '</div>'+
        '</div>');

        var templateWith2Cols = new CKEDITOR.template(
        '<div class="container-fluid layout-container">'+
            '<div class="row  layout-row">'+
                ' <div class="col-xs-{size1} col-sm-{size1} col-md-{size1} col-lg-{size1} layout-column">' +
                       ' <p>content</p>'+
                   '</div>'+
                   '<div class="col-xs-{size2} col-sm-{size2} col-md-{size2} col-lg-{size2} layout-column">' + 
                        '<p>content</p>'+         
                         '</div>'+
            '</div>' +
        '</div>' );

        var templateWith3Cols = new CKEDITOR.template(
        '<div class="container-fluid layout-container">' +
            '<div class="row layout-row">'+
                   '<div class="col-xs-{size1} col-sm-{size1} col-md-{size1} col-lg-{size1} layout-column">'+
                        '<p>content</p>'+
                  '</div>'+
                   '<div class="col-xs-{size2} col-sm-{size2} col-md-{size2} col-lg-{size2} layout-column">'+
                        '<p>content</p>'+
                  '</div>'+
                 '<div class="col-xs-{size3} col-sm-{size3} col-md-{size3} col-lg-{size3} layout-column">'+
                        '<p>content</p>'   +
                '</div>'+
            '</div>'+
        '</div>');


         var templateWith4Cols = new CKEDITOR.template(
        '<div class="container-fluid layout-container">' +
            '<div class="row layout-row">'+
                   '<div class="col-xs-{size1} col-sm-{size1} col-md-{size1} col-lg-{size1} layout-column">'+
                        'content'+
                  '</div>'+
                   '<div class="col-xs-{size2} col-sm-{size2} col-md-{size2} col-lg-{size2} layout-column">'+
                        'content'+
                  '</div>'+
                 '<div class="col-xs-{size3} col-sm-{size3} col-md-{size3} col-lg-{size3} layout-column">'+
                        'content'   +
                '</div>'+
                 '<div class="col-xs-{size4} col-sm-{size4} col-md-{size4} col-lg-{size4} layout-column">'+
                        'content'   +
                '</div>'+
            '</div>'+
        '</div>');



        editor.templateWith4Cols = templateWith4Cols;
        editor.templateWith3Cols = templateWith3Cols;
        editor.templateWith2Cols = templateWith2Cols;
        editor.templateWith1Col = templateWith1Col;


        CKEDITOR.dialog.add( 'actionDialog', this.path + 'dialogs/actionDialog.js' );

        editor.addCommand( 'openActionDialog',
            new CKEDITOR.dialogCommand( 'actionDialog',{
                allowedContent: 'div[*];span[*]'
            } 
        ));
        editor.ui.addButton('gridPlugin',{
            title: editor.lang.gridPlugin.title,
            icon: this.path + 'icons/icon.png',
            command:'openActionDialog'
        } );


    }
});