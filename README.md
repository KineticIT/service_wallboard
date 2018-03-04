# Service Wallboard

This is a wallboard built with AngularJS 1.5 and PHP. The grid layout is Bootstrap. This project has been used to display data from Cisco UCCX and HPSM9.

## Getting Started

Clone the project and serve with your preferred web server.

### Prerequisites

You will need PHP 5.5+ installed.

## Configure

### Configure the Back End Data Source

#### Cisco UCCX

In order to use UCCX, in 'uccx.php', provide a name and credentials for the ODBC connection, and change as necessary.

```php
$UCCX_name = "DSN_Name";
$UCCX_username = "DSN_Username";
$UCCX_password = "DSN_Password";
```

#### HPSM9

In order to use HPSM9, in 'sm9.php', provide the SM9 address and REST credentials, and change as necessary.

```php
$hpsm_user = 'Username';
$hpsm_pass = base64_decode('Password');
$hpsm = 'HPSM_ADDRESS:PORT/SM/9/rest/misinteraction?query=';
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

