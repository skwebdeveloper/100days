<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Console Tricks!</title>
</head>

<body>

    <p onClick="makeGreen()">×BREAK×DOWN×</p>

    <script>
        const dogs = [{
            name: 'Snickers',
            age: 2
        }, {
            name: 'hugo',
            age: 8
        }];

        function makeGreen() {
            const para = document.querySelector('p');
            para.style.color = '#BADA55';
            para.style.fontSize = '50px';
        }
        // Inspect -> DOM -> Break on -> Attr. modification


        // Regular
        console.log("Stuffing");

        // Interpolated
        console.log("I am a %s guys.", '😁');
        // Abnocous
        // Styled
        console.log('%c I am cool text', 'font-size: 10rem');

        // warning!
        console.warn("Read all conditions");

        // Error :|
        console.error("Read all papers");

        // Info
        console.info("Information regarding your current account.");

        // Testing
        console.assert(1 === 1, "That's is correct");

        // clearing

        // Viewing DOM Elements
        const allocated = document.querySelector("p");
        allocated.style.color = "red";

        console.dir(allocated);

        // Grouping together
        dogs.forEach((dog) => {
            console.group(`${dog.name}`);
            console.log(`My dog name is ${dog.name}`);
            console.log(`My dog age is ${dog.age}`);
            console.groupEnd(`${dog.name}`);
            console.groupCollapsed(`${dog.name}`);
            console.log(`My dog name is ${dog.name} and he is ${dog.age} old`);
            console.groupEnd(`${dog.name}`);
        });

        // counting
        console.count(12312 + 12321);

        // timing
        console.time("Fetching time");
        fetch("https://api.github.com/users/skwebdeveloper")
            .then((res) => res.json())
            .then((data) => {
                console.timeEnd("Fetching time");
                console.log(data);
            });
    </script>
</body>

</html>