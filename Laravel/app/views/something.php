<html>
    <body>
        <h1>Hello, <?php echo $test; ?></h1>
        <?php var_dump($client->__getFunctions()); ?>
        <?php
        $xml = simplexml_load_string($result);
        $json = json_encode($xml);
        var_dump($json);
        ?>
    </body>
</html>
