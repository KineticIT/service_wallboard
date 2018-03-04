<?php

// hide warnings
error_reporting(0);

// create a datetime object for your region
date_default_timezone_set('Australia/Melbourne');
$currentTime = new DateTime();
$utcTz = new DateTimeZone('UTC');
$currentTime->setTimezone($utcTz);

// hpsm credentials
$hpsm_user = 'USERNAME';
$hpsm_pass = base64_decode('PASSWORD');

// example hpsm URL encoded REST query for interactions
$hpsm = 'HPSM_ADDRESS:PORT/SM/9/rest/misinteraction?query=';
$rest_query = '%28Status=%22Open%22%29%20AND%20%28InitiatingMedium=%22Self%20Service%22%20OR%20InitiatingMedium=%22E-mail%22%29&view=expand';
$url_string = $hpsm . $rest_query;

// set curl options in curl object
$curl = curl_init();
curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
curl_setopt($curl, CURLOPT_HTTPHEADER, array('Connection: close'));
curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
curl_setopt($curl, CURLOPT_USERPWD, $hpsm_user . ":" . $hpsm_pass);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true); 
curl_setopt($curl, CURLOPT_PROXY, false); 
curl_setopt($curl, CURLOPT_URL, $url_string);

// create a second curl object 
$returned_01 = curl_exec($curl);
curl_close($curl);

// example HPSM URL encoded REST query for password reset
$rest_query = '%28priority.code=%225%22%29%20AND%20%28Area=%22password%20reset%22%29%20AND%20%28Title=%22Password%20Reset%22%29%20AND%20%28InitiatingMedium=%22Self%20Service%22%29%20AND%20%28Phase=%22Work%20In%20Progress%22%29&view=expand';
$url_string = $hpsm . $rest_query;

$curl = curl_init();
curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
curl_setopt($curl, CURLOPT_HTTPHEADER, array('Connection: close')); // prevent SM from persisting the session
curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
curl_setopt($curl, CURLOPT_USERPWD, $hpsm_user . ":" . $hpsm_pass);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true); // return raw output
curl_setopt($curl, CURLOPT_PROXY, false); // ignore system proxy settings
curl_setopt($curl, CURLOPT_URL, $url_string);

// second curl request
$returned_02 = curl_exec($curl);
curl_close($curl);

// return a list of ticket open durations
$json_decoded = json_decode($returned_01, true);
$resource = $json_decoded['ResourceName'];

foreach($json_decoded['content'] as $item) {
	$parsedItems[] = $item[$resource]['OpenTime']; 	
}

$array_01 = array(
	'time0' => '',
	'time1' => '',
	'time2' => '',
	'count' => count($parsedItems),
);

foreach ($parsedItems as $key => $parseditem) {
$openTime = new DateTime($parsedItems[$key]);
$diff = $currentTime->diff($openTime);
$return = (string)$diff->format("%H:%I");
	$return = substr($return, 1);
$array_01['time'.$key] = $return;
}


// process data for returned 02
$json_decoded = json_decode($returned_02, true);
$resource = $json_decoded['ResourceName'];

foreach($json_decoded['content'] as $item) {
$parsedItems_02[] = $item[$resource]['OpenTime']; 	
}

$array_02 = array(
	'pass0' => '',
	'pass1' => '',
	'pass2' => '',
	'pass_count' => count($parsedItems_02),
);

foreach ($parsedItems_02 as $key => $parseditem) {
	$openTime = new DateTime($parsedItems_02[$key]);
	$diff = $currentTime->diff($openTime);
	$return = (string)$diff->format("%H:%I");
	$return = substr($return, 1);
	$array_02['pass'.$key] = $return;
}

// Merge the resulting arrays
$result = array_merge($array_01, $array_02);	

// echo data to wallboard
echo json_encode($result);

// put data in flat file for multiple board consumption or other uses.
file_put_contents('../app/slave/sm9.txt', json_encode($result), LOCK_EX);	
?>