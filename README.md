# BootstrapLookUp
Bootstrap Dialog Table Look Up Example

Here is the table look up example in action. When the page is properly setup it will show one button as follows:



When the button is clicked it will show the look up dialog box:



The data is retrieved from the server using AJAX based on user action, such as a click on table header, etc. The table is actually the extension of the original jQuery.DataTable.js open source program.

The table can be dynamically built using SELECTOR keyword:



The programmer only responsible for performing the codes inside the server side ASPX handler for given selector keyword, such as table header definition, paging request and display data. This is included in the sample NewInquiry.aspx page.

User can hover to the table and perform selection by clicking on to the table, and it will show the alert box:



This sample program is created using ASP.NET, so if you are interested to see how this page in action, there are several pre-requisite as follows:

1. The data source is using SQL Server 2005
2. Windows Server 2003 or higher with Framework 4

