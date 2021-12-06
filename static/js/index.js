console.log( "working" );

let socket = io( 'http://localhost:7077' );

$('#blue').on('click', function( event ){
    socket.emit( "dodgerblue" );
});

$('#green').on('click', function( event ){
    socket.emit( "mediumseagreen" );
});

$('#pink').on('click', function( event ){
    socket.emit( "hotpink" );
});

socket.on( 'blueColor', function(){
    console.log("getting blueColor")
    $('body').css("background-color", "dodgerblue" );
});

socket.on( 'greenColor', function(){
    console.log("getting greenColor")
    $('body').css("background-color", "mediumseagreen" );
});

socket.on( 'pinkColor', function(){
    console.log("getting pinkColor")
    $('body').css("background-color", "hotpink" );
});
