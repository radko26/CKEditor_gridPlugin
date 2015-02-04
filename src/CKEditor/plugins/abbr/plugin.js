CKEDITOR.plugins.add( 'abbr', {
    require: 'contextmenu',
    init: function( editor ) {

        editor.addCommand( 'abbr', new CKEDITOR.dialogCommand( 'abbrDialog' ) );

        editor.addCommand( 'showMenu',{
            exec: function(editor){
                var element = new CKEDITOR.dom.element( 'div' );
                editor.menu.show(element);
            }
        });
        
            editor.ui.addButton( 'showMenu', {
            label: 'Show contextMenu',
            icon: this.path + 'icons/abbr.png',
            command: 'showMenu'
        });

        editor.ui.addButton( 'Abbr', {
            label: 'Insert Abbreviation',
            icon: this.path + 'icons/abbr.png',
            command: 'abbr',
            toolbar: 'insert'
        });

        var items = []
        editor.addMenuGroup( 'some_group' );

            items.justifyleft = {
                label: 'fasf',
                group: 'some_group',
                state: CKEDITOR.TRISTATE_ON,
                order: 1
            };

            items.justifyright = {
                label: 'fasf',
                group: 'some_group',
                state: CKEDITOR.TRISTATE_ON,
                order: 2
            };
            
            editor.addMenuItems( items );

            editor.ui.addButton( 'gridRow ',{
                label : "Grid",
                title: "Grid",
               icon: this.path + 'icons/abbr.png',
            });

            editor.ui.add( 'Groupped', CKEDITOR.UI_MENUBUTTON, {
                label: 'Groupped justify',
                state: CKEDITOR.TRISTATE_ON,
                onMenu: function() {
                    var active = {};

                    // Make all items active.
                    for ( var p in items )
                        active[ p ] = CKEDITOR.TRISTATE_ON;

                    return active;
                }
            } );                       




        
           
            editor.addMenuGroup( 'abbrGroup' );
            editor.addMenuItem( 'abbrItem', {
                label: 'Edit Abbreviation',
                icon: this.path + 'icons/abbr.png',
                command: 'abbr',
                group: 'abbrGroup'
            });

            editor.contextMenu.addListener( function( element ) {
                if ( element.getAscendant( 'p', true ) ) {
                    return { abbrItem: CKEDITOR.TRISTATE_OFF };
                }
            });
    

        CKEDITOR.dialog.add( 'abbrDialog', this.path + 'dialogs/abbr.js' );
    }
});