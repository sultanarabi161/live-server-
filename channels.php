<?php
header('Content-Type: application/json');

$channels = [
    [
        "id" => 1,
        "name" => "Channel One",
        "stream_url" => "http://example.com/stream/channel1"
    ],
    [
        "id" => 2,
        "name" => "Channel Two",
        "stream_url" => "http://example.com/stream/channel2"
    ],
    [
        "id" => 3,
        "name" => "Channel Three",
        "stream_url" => "http://example.com/stream/channel3"
    ]
];

echo json_encode($channels);
?>
