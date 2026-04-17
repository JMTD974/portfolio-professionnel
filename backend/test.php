<?php

$nom = "David";
$technologies = ["HTML", "CSS", "JavaScript", "PHP"];

echo "Bonjour " . $nom . PHP_EOL;

foreach ($technologies as $tech) {
    echo "- " . $tech . PHP_EOL;
}
