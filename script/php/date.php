<?php
date_default_timezone_set('Europe/Moscow');
if (isset($_POST["format"])) {
  echo date($_POST["format"]);
}

