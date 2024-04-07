<?php
if (isset($_POST["format"])) {
  echo date($_POST["format"]);
}

