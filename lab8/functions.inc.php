<?php

    function outputOrderRow($file, $title, $quantity, $price) {
        echo "<tr>";
        echo "<td><img src='images/books/tinysquare/$file'</td>";
        echo "<td>$title</td>";
        echo "<td>$quantity</td>";
        $price = number_format($price,2,".","");
        echo "<td>\$$price</td>";
        $amount = $quantity * $price;
        $amount = number_format($amount,2,".","");
        echo "<td>\$$amount</td>";
        echo "</tr>";
    }
?>