CKEDITOR.plugins.add( 'grid', {
	
	requires: 'widget',
	init: function( editor ) {

		editor.widgets.add( 'grid', {
			template:
				'<div class="simplebox">' +
					'<h2 class="simplebox-title">Title</h2>' +
					'<div class="simplebox-content"><p>Content...</p></div>' +
				'</div>',
			button: 'Create a simple box',
			icon:'images/icon.png',
			upcast: function( element ) {
				return element.name == 'div' && element.hasClass( 'simplebox' );
			}
		} );

		editor.ui.addButton( 'grid', {
        label : 'Your Plugin Label',
        command : 'grid',       
      });

	}
} );