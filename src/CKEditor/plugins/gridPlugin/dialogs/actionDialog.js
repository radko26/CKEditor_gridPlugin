/**
	CKEditor dialog
	author: radoslav
	*/
	CKEDITOR.dialog.add( 'actionDialog', function( editor) {
		var width = 200;
		var height = 100;

		var colWidth = [];
		var boxWidth = 58;
		var seedWidth = ( (boxWidth-2)/12); // substract two pixels for left and right border;

		for(var i=1;i<=12;i++){
			colWidth[i] = (seedWidth*i);
		}	

		/**
			Construction function that generates the small grid in the dialog and 
			adds the real grid in the field.

			*/
			var constructGrid = function(rows,template){

				var sizes = rows.split("/");


				var injectTemplate = {};
				var html = '<div class="container-fluid">';
				var generate = "";
				for(var i=0;i<sizes.length;i++){
					generate+=('<div style="border:1px solid #778899;float:left;position:relative;background:#B0C4DE;text-align:center;height:30px;line-height: 30px;width:' + (colWidth[sizes[i]] - 1)+ 'px;' + ((i!=0)?'border-left:none':'') + ' "> ' + '</div>' );
					injectTemplate["size"+(i+1)]=sizes[i];
				}

				html+=generate;
				html +='</div>';

				return {
					type: 'html',
					id: rows,
					html: html,
					className: " ",
					style: 'width:' + boxWidth +'px;',
					onClick: function() {
						editor.insertHtml(template.output(injectTemplate));
						CKEDITOR.dialog.getCurrent().hide();
					}
				}

			}


	// Fill dialog with grid templates.

	var firstRow = [];
	firstRow.push(constructGrid("12",editor.templateWith1Col));
	firstRow.push(constructGrid("6/6",editor.templateWith2Cols));
	firstRow.push(constructGrid("9/3",editor.templateWith2Cols));
	firstRow.push(constructGrid("3/9",editor.templateWith2Cols));

	var secondRow = [];

	
	secondRow.push(constructGrid("8/4",editor.templateWith2Cols));
	secondRow.push(constructGrid("4/8",editor.templateWith2Cols));
	secondRow.push(constructGrid("7/5",editor.templateWith2Cols));
	secondRow.push(constructGrid("5/7",editor.templateWith2Cols));
	//secondRow.push(constructGrid("5/2/5",editor.templateWith3Cols));
	
	
	var thirdRow = [];

	
	thirdRow.push(constructGrid("4/4/4",editor.templateWith3Cols));
	thirdRow.push(constructGrid("6/3/3",editor.templateWith3Cols));
	thirdRow.push(constructGrid("3/6/3",editor.templateWith3Cols));
	thirdRow.push(constructGrid("3/3/6",editor.templateWith3Cols));
	//thirdRow.push(constructGrid("3/3/3/3",editor.templateWith4Cols));

	return {
		title: editor.lang.gridPlugin.dialogTitle,
		minWidth: width,
		minHeight: height,
		resizable: CKEDITOR.DIALOG_RESIZE_NONE,
		buttons: [CKEDITOR.dialog.cancelButton],
		contents: [
		{
			id:"dialog",
			elements: [
			{
				type: 'hbox',
				id:"firstRow",
				children: firstRow,
			},
			{
				type: 'hbox',
				id:"secondRow",
				children: secondRow
			},
			{
				type: 'hbox',
				id:"thirdRow",
				children: thirdRow
			}
			]

		}
		]     
	};
} );