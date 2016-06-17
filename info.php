<?php
if (isset($_GET["title"])) {
	$pageTitle = ucwords(strtolower($_GET["title"]));
}
?>

<!DOCTYPE html>
<html>
<head>
	<title><?php echo $pageTitle ?></title>
	<link rel="stylesheet" href="css/styles.css">
	<script src="https://code.jquery.com/jquery-2.2.3.js"></script>
	<script src='script.js'></script>
</head>
<body>
	<div id="pic"></div>
	<div id="info">
	</div>
</body>
</html>