# BootstrapLookUp
Here is the table look up example in action. When the page is properly setup it will show one button as follows:

![alt lk01](https://github.com/surya-rakanta/BootstrapLookUp/blob/master/Images/lk01.png)

When the button is clicked it will show the look up dialog box:
 
![alt lk02](https://github.com/surya-rakanta/BootstrapLookUp/blob/master/Images/lk02.png)

The data is retrieved from the server using AJAX based on user action, such as a click on table header, etc. The table is actually the extension of the original jQuery.DataTable.js open source program.

The table can be dynamically built using SELECTOR keyword:

![alt lk03](https://github.com/surya-rakanta/BootstrapLookUp/blob/master/Images/lk03.png)

The programmer only responsible for performing the codes inside the server side ASPX handler for given selector keyword, such as table header definition, paging request and display data. This is included in the sample NewInquiry.aspx page.

User can hover to the table and perform selection by clicking on to the table, and it will show the alert box:

![alt lk03](https://github.com/surya-rakanta/BootstrapLookUp/blob/master/Images/lk03.png)

This sample program is created using ASP.NET, so if you are interested to see how this page in action, there are several pre-requisite as follows:

1. The data source is using SQL Server 2005
2. Windows Server 2003 or higher with Framework 4

Sample data is included in the "data" folder on the source package.

Before running this sample, you have to edit the web.config file first to refer to your properly set connection string.

Then, in your properly installed SQL Server 2005 or higher, create the database named LeaveV2 and its associated tables by running the script.sql in the root folder of this repository.

Perform setup and installation of the content in this project to your web server (I'm using IIS 8.0), by setting it to Framework 4.

At this stage, the look up example only use tEmployee table. You can ignore other tables that will be used in the next stage of this open source project, perhaps with another name.
