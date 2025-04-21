/*
Interrupts pass control to the kernel until resolved. All interrupts either communicate with a serviceworker or 
a script located in the base file system
0x00 -> nop (do nothing, no operation) 
0x01 -> load UV with encoded link specified in window.dusk.cUV
0x02 -> Open application with path specified in window.dusk.app
0x03 -> Execute a script from the real FS, specified in window.dusk.execSrc
*/
function int(no) {
    if (no == 0x00) {
        return
    }
    if (no == 0x01) {
        // TODO -> Open in UV
    }
    if (no == 0x02) { 
        // TODO -> Open application 
    }
    if (no == 0x03) {
        if (!window.dusk.execSrc) {
            return;
        }
        fetch(window.dusk.Src)
        .then(response => {
            if (!response.ok) {
            throw new Error('Response not ok');
            }
            eval(response.text()) // wow so safe!
        })
        .catch(error => {
            console.error('Problem in fetching execSrc: ', error);
        });
    }
}