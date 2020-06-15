<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHOTO OF THE DAY</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <style>
        @import url("https://fonts.googleapis.com/css?family=Ek+Mukta:700|Muli:200,300,400");

        html,
        body {
            height: 100%;
            margin: 0;
            background: black;
        }

        h1,
        h2,
        h3,
        p {
            margin: 0;
            padding: 0;
        }

        figure {
            margin: 0;
            width: 100%;
            height: 100%;
            opacity: 1;
        }

        .potd {
            position: relative;
            overflow: hidden;
            margin-bottom: 0;
            padding-top: 0;
            padding-bottom: 0;
            height: inherit;
            color: #fff;
        }

        .full-container {
            position: absolute;
            z-index: 10;
            left: 30px;
            right: 60px;
            top: 200px;
            padding: 30px 30px 30px 35px;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            opacity: 0;
            width: auto;
        }

        .potdContainerBefore {
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 0px;
            background-color: #DC143C;
        }

        .potdFigure {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
        }

        .potdHeader {
            margin-bottom: 15px;
        }

        .potdCategory {
            display: block;
            position: relative;
            padding-left: 25px;
            font-family: "Muli", sans-serif;
            font-size: 14px;
            line-height: 20px;
            opacity: 0;
            left: -20px;
        }

        .potdCategory::before {
            content: "";
            display: block;
            position: absolute;
            left: 0;
            top: 9px;
            width: 15px;
            height: 2px;
            background-color: #DC143C;
        }

        .potd h1 {
            position: relative;
            margin-top: 3px;
            font-weight: 700;
            font-family: "Ek Mukta", sans-serif;
            font-size: 60px;
            line-height: 60px;
            text-transform: uppercase;
            color: white;
            left: -20px;
            opacity: 0;
        }

        .photo-legend {
            margin-top: 25px;
            position: relative;
            font-weight: 200;
            font-family: "Muli", sans-serif;
            font-size: 2em;
            line-height: 25px;
            opacity: 0;
            left: -20px;
        }

        .photo-legend h3 {
            margin: 10px 0;
            font-weight: 700;
            font-size: 1.5em;
        }

        .photo-legend p {
            margin: 10px 0;
        }

        .photo-legend small {
            font-size: 25px;
            height: 120px;
            letter-spacing: 2px;
            line-height: 70px;
        }

        .credits {
            position: fixed;
            bottom: 60px;
            left: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            opacity: 1;
            -webkit-filter: drop-shadow(0px 0px 5px rgba(0,0,0,.5));
            filter: drop-shadow(0px 0px 5px rgba(0,0,0,.5));
        }

        .credits img {
            width: 100%;
        }

    </style>

</head>

<body>

    <article class="potd">

        <figure class="photo-img" id="photo-img" style="background-image: url(https://source.unsplash.com/collection/10728712/1920x1080)"></figure>

        <!--
        <div class="full-container" id="full-container">
            <div class="potdContainerBefore" id="potdContainerBefore"></div>
            <div class="container text-container">
                <div class="row">
                    <div class="col col-info">

                        <header class="photo-annonce">
                            <small class="potdCategory" id="potdCategory">
                                PHOTO ALEATOIRE
                            </small>
                            <h1 class="photo-date" id="photo-date">
                                DATE
                            </h1>
                        </header>

                        <div class="photo-legend" id="photo-legend">
                            <h3 id="clock">
                                NOM DE LA PHOTO
                            </h3>
                            <p>
                                DESCRIPTION DE LA PHOTO
                            </p>
                            <small>
                                COPYRIGHT DE LA PHOTO
                            </small>
                        </div>

                    </div>
                </div>
            </div>

        </div>

        -->

        <h3 id="date"> DATE </h3>
        <h3 id="clock"> HEURE </h3>

        <footer class="credits" id="credits">
            <img src='unsplash_logo.png' class="logo-bing" alt="Source : Unsplash">
        </footer>
        <!-- potd - Container// -->

        <!--
        <div class="weather-full-container">
            <div class="weather-side">
                <div class="weather-gradient"></div>
                <div class="weather-container"><i class="weather-icon" data-feather="sun"></i>
                    <h1 class="weather-temp">29°C</h1>
                    <h3 class="weather-desc">Sunny</h3>
                </div>
            </div>
        </div>
        -->

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>


        <!-- potd// -->
        <script>
            //potd

            function checkTime(i) {
                if (i < 10) {
                    i = "0" + i
                }; // add zero in front of numbers < 10
                return i;
            }

            function startTime() {
                var today = new Date();
                var h = today.getHours();
                var m = today.getMinutes();
                var s = today.getSeconds();
                m = checkTime(m);
                s = checkTime(s);
                document.getElementById('clock').innerHTML =
                h + ":" + m ;
                var t = setTimeout(startTime, 500);
            }

            let credits = $('#credits');

            let potd = {
                init: function() {

                    var ladate = new Date();
                    var ladate = ladate.toLocaleDateString('fr-FR');
                    $("#date").text(ladate);

                    startTime();
                },
                footer: {
                    visible: function() {
                        credits
                            .delay(600)
                            .animate({
                                opacity: .8
                            }, {
                                duration: 600,
                                complete: function() {
                                    console.log('Credits');
                                }
                            });
                    }
                }
            };
        </script>

        <script>
            
            $(document).ready(function() {

                potd.init();
            
            });

        </script>

</body>

</html>