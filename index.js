$(document).ready(function () {
    var mark ='X';
    var count = 0;
    $('.left').css({"background-color":"#26A69A" , "color" : "white"});
    console.log('ready');
    $('.block').click(function () {
        if(($(this).text() === '')&&(mark ==='X')) {
            mark ='0';
            $(this).text('0');
            check();
            count = count+1 ;
            $('.right').css({"background-color":"#26A69A" , "color" : "white"});
            $('.left').css({"background-color":"white" , "color" : "#26A69A"});
        }
        else if(($(this).text() === '')&&(mark ==='0')) {
            mark = 'X';
            $(this).text('X');
            check();
            count = count+1 ;
            $('.left').css({"background-color":"#26A69A" , "color" : "white"});
            $('.right').css({"background-color":"white" , "color" : "#26A69A"});
        }
    });
    function checkPlayer( m ) {
        if(m === '0') {
            return 1;
        }
        else if(m === 'X') {
            return 2;
        }

    }
    function disable() {
        $('.block').css({'pointer-events':'none','background-color' :'rgba(38, 166, 154,0.5)'});
    }
    function check() {
        var b = document.getElementsByClassName('block');
        var playerNo;
        if((b[0].innerHTML=== b[1].innerHTML) &&(b[1].innerHTML === b[2].innerHTML)) {
            playerNo = checkPlayer(b[0].innerHTML);
            if(playerNo !== undefined) {
                $('h1').text('Player '+ playerNo +' Wins !');
                disable();
            }
        }
        else if((b[3].innerHTML=== b[4].innerHTML) &&(b[4].innerHTML === b[5].innerHTML)) {
            playerNo = checkPlayer(b[3].innerHTML);
            if(playerNo !== undefined) {
                $('h1').text('Player '+ playerNo +' Wins !');
                disable()
            }
        }
        else if((b[6].innerHTML=== b[7].innerHTML) &&(b[7].innerHTML === b[8].innerHTML)) {
            playerNo = checkPlayer(b[6].innerHTML);
            if(playerNo !== undefined) {
                $('h1').text('Player '+ playerNo +' Wins !');
                disable()
            }
        }
        else if((b[0].innerHTML=== b[3].innerHTML) &&(b[3].innerHTML === b[6].innerHTML)) {
            playerNo = checkPlayer(b[3].innerHTML);
            if(playerNo !== undefined) {
                $('h1').text('Player '+ playerNo +' Wins !');
                disable()
            }
        }
        else if((b[1].innerHTML=== b[4].innerHTML) &&(b[4].innerHTML === b[7].innerHTML)) {
            playerNo = checkPlayer(b[1].innerHTML);
            if(playerNo !== undefined) {
                $('h1').text('Player '+ playerNo +' Wins !');
                disable()
            }
        }
        else if((b[2].innerHTML=== b[5].innerHTML) &&(b[8].innerHTML === b[5].innerHTML)) {
            playerNo = checkPlayer(b[2].innerHTML);
            if(playerNo !== undefined) {
                $('h1').text('Player '+ playerNo +' Wins !');
                disable()
            }
        }
        else if((b[0].innerHTML=== b[4].innerHTML) &&(b[4].innerHTML === b[8].innerHTML)) {
            playerNo = checkPlayer(b[0].innerHTML);
            if(playerNo !== undefined) {
                $('h1').text('Player '+ playerNo +' Wins !');
                disable()
            }
        }
        else if((b[2].innerHTML=== b[4].innerHTML) &&(b[4].innerHTML === b[6].innerHTML)) {
            playerNo = checkPlayer(b[2].innerHTML);
            if(playerNo !== undefined) {
                $('h1').text('Player '+ playerNo +' Wins !');
                disable()
            }
        }
        else if(count >= 9) {
            $('h1').text('Draw !');
            disable()
        }

    }

    $('.restart').click(function () {
        var b = document.getElementsByClassName('block');
        var i;
        count=0;
        for(i=0;i<9;i++) {
            b[i].innerHTML= '';
        }
        mark='X';
        $('h1').text('');
        $('.block').css({'pointer-events':'auto','background-color' :'rgba(38, 166, 154,1)'});
    });

});