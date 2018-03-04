<?php

date_default_timezone_set('Australia/Melbourne');
$date = date('D d/m/Y h:iA', time());

// provide credentials for the ODBC connection for UCCX. 
$UCCX_name = "DSN_Name"; 
$UCCX_username = "DSN_Username"; 
$UCCX_password = "DSN_Password"; 

// an example SQL query for the UCCX rtcsqssummary table
$sql_query = "SELECT loggedinagents, availableagents, unavailableagents, talkingagents, callswaiting, callshandled, longestwaitduration, 
				totalcalls, callsabandoned, enddatetime, avgwaitduration, convavgwaitduration FROM rtcsqssummary";

// declare an odbc_pconnect object 
$odbc_pconnect = odbc_pconnect($UCCX_name, $UCCX_username, $UCCX_password); 
if (!odbc_pconnect) { exit("Connection Failed: ".odbc_pconnect); }

// declare an odbc_exec object
$odbc_exec = odbc_exec($odbc_pconnect, $sql_query);

// initialise variables
	$totalCalls = "";
	$CallsHandled = "";

// fetch UCCX data using the ODBC connection
while($fetch = odbc_fetch_array($odbc_exec)) {
	$LoggedAgents = odbc_result($odbc_exec,"loggedInagents");
	$AvailableAgents = odbc_result($odbc_exec,"availableagents");
	$unavailableAgents = odbc_result($odbc_exec,"unavailableagents");
	$talkingAgents = odbc_result($odbc_exec,"talkingagents");
	$CallsWaiting = odbc_result($odbc_exec,"callswaiting");
	$CallsHandled += odbc_result($odbc_exec,"callsandled");
	$totalCalls += odbc_result($odbc_exec,"totalcalls");
	$callsAbandoned = odbc_result($odbc_exec,"callsabandoned");
	$convAvgWaitDuration = substr(odbc_result($odbc_exec,"convAvgWaitDuration"), -4);
}						

// Create an array and echo the array to the front end 
$advert = array(
	'unavailableAgents' => $unavailableAgents,
	'totalCalls' => $totalCalls,
	'talkingAgents' => $talkingAgents,
    'callsWaiting' => $CallsWaiting,
    'availableAgents' => $AvailableAgents,
	'convAvgWaitDuration' => $convAvgWaitDuration,
	'CallsHandled' => $CallsHandled,
    'date' => $date,
);
echo json_encode($advert);

// put data in flat file for multiple board consumption or other uses.
file_put_contents('../app/slave/uccx.txt', json_encode($advert), LOCK_EX); 
?>