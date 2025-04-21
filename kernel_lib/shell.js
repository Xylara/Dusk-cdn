/**
 * This works exactly how it does in C -> argv[0] == the file name (or symlink name)
 * argc == number of arguments (always is atleast one)
 * argv is a table of arguments 
**/
function printf() {
    // TODO
}

function mkdir(argc, argv) {
    if (argc == 1) {
        printf("Please specify an argument")
        return 1;
    }
    // declared in /js/duskLib.js
    navigator.dusk.fs.mkdir(argv[1])
}