# Service Wallboard

This is a wallboard built with AngularJS 1.5 and PHP. The grid layout is Bootstrap. This project has been used to display data from Cisco UCCX and HPSM9.

![Alt text](./wallboard.png?raw=true "Wallboard")

## Getting Started

Clone the project and serve with your preferred web server.

### Prerequisites

You will need PHP 5.5+ installed.

## Configure

### Configure the Back End Data Source

#### Cisco UCCX

UCCX Database
Cisco UCCX uses the IBM Informix RDBMS database. The database stores the data in the following two types of databases:

• db_cra – Used to store information for historical and real-time reports, including Unified CCX configuration information, stored procedures, and call statistics.
• db_cra_repository - Used to store information related to prompts, grammars, scripts, and documents.

All tables queried by the wallboard are found in the db_cra database.  Note that the ‘Informix’ ODBC drivers must be installed in order to access this database.

In order to use UCCX, in 'uccx.php', provide a name and credentials for the ODBC connection, and change as necessary.

```php
$UCCX_name = "DSN_Name";
$UCCX_username = "DSN_Username";
$UCCX_password = "DSN_Password";
```

UCCX Database Tables
The db_cra database contains a number of tables; the wallboard queries the RtCSQsSummary table only. 

The RtCSQsSummary table contains real-time statistics about all configured Contact Service Queues in the system. This table gets updated automatically when real-time snapshot data writing for this table is enabled. The updating frequency is based on the configured data writing interval.


#### HPSM9

SM9 publishes data via following REST endpoint, http://<SM9>:<PORT>/SM/9/rest/’query=. 

Example REST queries: <br />

1. Return all open tickets that have not been processed.
```
‘rest/misinteraction?query=(Status="Open") AND (InitiatingMedium="Self Service" OR InitiatingMedium="E-mail")&view=expand'
```

2. Return all open password reset tickets.
```
‘rest/misinteraction?query=(priority.code="5") AND (Area="password reset") AND (Title="Password Reset") AND (InitiatingMedium="Self Service") AND (Phase="Work In Progress")&view=expand’
```

SM9 REST Access
The REST endpoint can be accessed via the included SM9 user account ‘misapi’.

In order to connect to HPSM9, in 'sm9.php', provide the SM9 address and REST credentials, and change as necessary.

```php
$hpsm_user = 'Username';
$hpsm_pass = base64_decode('Password');
```

#### Flat File

Add a flat file containing a JSON object, and display the data. Add a service $http.get request that points to your flat file.

```javascript
return $http.get('app/slave/yourfile.txt');
```

Add a controller that calls the service and save the data into your scope.

```javascript
$interval(function() {
    sm9_query_service.getSm9().success(function(data) {
```

#### Software Architecture

Figure 1 depicts the high level system architecture of the SCW.

- Blue: Client processing
- Green: Server side processing
- Orange: Resource processing

![Alt text](./architecture.png?raw=true "Wallboard")

### Configure Alert Colours on the Wallboard

#### Alerts

Setup alerts in 'alert_controller.js. This changes the colours on the grid elements when specified values are returned.

```php
if ($scope.Row1_Box_01 == 0) {
    $scope.Row1_Box_01_colour = "stage stage-alert";
    $scope.Row1_Box_01_title = "title";
} else if ($scope.Row1_Box_01 == 1) {
    $scope.Row1_Box_01_colour = "stage stage-warning";
    $scope.Row1_Box_01_title = "another title";
}
```

## Built With

* [AngularJS](https://angularjs.org/) - The web front end framework used
* [Bootstrap 3](https://angularjs.org/) - The web grid system used.



## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Matthew Van Achteren** - *developer and maintainer*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

