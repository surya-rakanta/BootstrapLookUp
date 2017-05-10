$(document).ready(function () {
 $("#btnClickMe").bind("click", processClick);
});

function processClick()
{

 var myDialog = new BootstrapDialog({
  size: BootstrapDialog.SIZE_WIDE,
  title: 'Data Lookup Example',
  onshown: function (dialogRef) {

   $('#myLookup').DataTable({
    "select": true,
    "processing": true,
    "serverSide": true,
    "selector": "EMPLOYEE",
    "serverPage": "NewInquiry.aspx"
   },
   function (dialogRef,oObj) {
    var myTable = oObj.dataTable().api();

    $('#myLookup tbody').on('mouseenter', 'tr', function () {
		   $(this).removeClass('selected');
		   if ($(this).hasClass('highlight')) {
		    $(this).removeClass('highlight');
		   }
		   else {
		    myTable.$('tr.highlight').removeClass('highlight');
		    $(this).addClass('highlight');
		   }
		  });

    $('#myLookup tbody').on('click', 'tr', function () {
     if ($(this).hasClass('selected')) {
      $(this).removeClass('selected');
     }
     else {
      $(this).addClass('selected');
     }
     var data = myTable.rows(this).data();
     dialogRef.setData("choosenValue", data[0]);
     dialogRef.close();
    });

   }.bind(null, dialogRef));

   console.log("on shown");
  },
  onhide: function (dialogRef) {
   processData(dialogRef);
  },
  message: function (dialog) {
   var myContent =
    '<div style="margin-left: 15px; width: 700px;">' +
    '	<table id="myLookup" class="table table-striped table-bordered table-condensed" cellspacing="0" width="100%">' +
    '	</table>' +
    '</div>'

   var $content = $(myContent);
   return $content;
  },
  buttons: [
   {
    label: 'OK',
    cssClass: 'btn-primary',
    action: function (dialogItself) {
     dialogItself.close();
    }
   },
   {
    label: 'Close',
    action: function (dialogItself) {
     dialogItself.setData("choosenValue", "CANCEL");
     dialogItself.close();
    }
   }
  ]
 });

 myDialog.open();

}

function processData(dialogRef) {
 var oData = dialogRef.getData("choosenValue");
 if (typeof oData == 'object') {
  console.log("the data", oData);
  alert("You Choose Employee Name " + oData[1]);
 }
}
