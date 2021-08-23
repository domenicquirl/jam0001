const notes = new Map();
notes.set("C", [ 32.703, 65.406, 130.81, 261.63, 523.25, 1046.5, 2093.0, 4186.0, 8372.0, 16744.0 ]);
notes.set("C#", [ 34.648, 69.296, 138.59, 277.18, 554.37, 1108.7, 2217.5, 4434.9, 8869.8, 17740.0 ]);
notes.set("D", [ 36.708, 73.416, 146.83, 293.66, 587.33, 1174.7, 2349.3, 4698.6, 9397.3, 18795.0 ]);
notes.set("D#", [ 38.891, 77.782, 155.56, 311.13, 622.25, 1244.5, 2489.0, 4978.0, 9956.1, 19912.0 ]);
notes.set("E", [ 41.203, 82.407, 164.81, 329.63, 659.26, 1318.5, 2637.0, 5274.0, 10548.0, 21096.0 ]);
notes.set("F", [ 43.654, 87.307, 174.61, 349.23, 698.46, 1396.9, 2793.8, 5587.7, 11175.0, 22351.0 ]);
notes.set("F#", [ 46.249, 92.499, 185.0, 369.99, 739.99, 1480.0, 2960.0, 5919.9, 11840.0, 23680.0 ]);
notes.set("G", [ 48.999, 97.999, 196.0, 392.0, 783.99, 1568.0, 3136.0, 6271.9, 12544.0, 25088.0 ]);
notes.set("G#", [ 51.913, 103.83, 207.65, 415.3, 830.61, 1661.2, 3322.4, 6644.9, 13290.0, 26580.0 ]);
notes.set("A", [ 55.0, 110.0, 220.0, 440.0, 880.0, 1760.0, 3520.0, 7040.0, 14080.0, 28160.0 ]);
notes.set("A#", [ 58.27, 116.54, 233.08, 466.16, 932.33, 1864.7, 3729.3, 7458.6, 14917.0, 29834.0 ]);
notes.set("B", [ 61.735, 123.47, 246.94, 493.88, 987.77, 1975.5, 3951.1, 7902.1, 15804.0, 31609.0 ]);
notes.set("do", [ 32.703, 65.406, 130.81, 261.63, 523.25, 1046.5, 2093.0, 4186.0, 8372.0, 16744.0 ]);
notes.set("reB", [ 34.648, 69.296, 138.59, 277.18, 554.37, 1108.7, 2217.5, 4434.9, 8869.8, 17740.0 ]);
notes.set("re", [ 36.708, 73.416, 146.83, 293.66, 587.33, 1174.7, 2349.3, 4698.6, 9397.3, 18795.0 ]);
notes.set("miB", [ 38.891, 77.782, 155.56, 311.13, 622.25, 1244.5, 2489.0, 4978.0, 9956.1, 19912.0 ]);
notes.set("mi", [ 41.203, 82.407, 164.81, 329.63, 659.26, 1318.5, 2637.0, 5274.0, 10548.0, 21096.0 ]);
notes.set("fa", [ 43.654, 87.307, 174.61, 349.23, 698.46, 1396.9, 2793.8, 5587.7, 11175.0, 22351.0 ]);
notes.set("solB", [ 46.249, 92.499, 185.0, 369.99, 739.99, 1480.0, 2960.0, 5919.9, 11840.0, 23680.0 ]);
notes.set("sol", [ 48.999, 97.999, 196.0, 392.0, 783.99, 1568.0, 3136.0, 6271.9, 12544.0, 25088.0 ]);
notes.set("laB", [ 51.913, 103.83, 207.65, 415.3, 830.61, 1661.2, 3322.4, 6644.9, 13290.0, 26580.0 ]);
notes.set("la", [ 55.0, 110.0, 220.0, 440.0, 880.0, 1760.0, 3520.0, 7040.0, 14080.0, 28160.0 ]);
notes.set("siB", [ 58.27, 116.54, 233.08, 466.16, 932.33, 1864.7, 3729.3, 7458.6, 14917.0, 29834.0 ]);
notes.set("si", [ 61.735, 123.47, 246.94, 493.88, 987.77, 1975.5, 3951.1, 7902.1, 15804.0, 31609.0 ]);
notes.set("silence", [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]);

const types = new Map();
types.set("semibreve", 2);
types.set("minimD", 1.5);
types.set("minim", 1);
types.set("crotchet", 0.5);
types.set("quaver", 0.25);

const execSync = require('child_process').execSync;
function playNote(path, frequencies, duration, waveType) {
    let dur = types.get(duration);
    var isWin = process.platform === "win32";
    if (isWin) {
        soxCommand = `${path} -n -t waveaudio synth ${dur}`
    } else {
        soxCommand = `${path} -n -d synth ${dur}`
    }

    frequencies.forEach((frequence) => {
        if (frequence === 0) {
            soxCommand += ` sine ${frequence}`
        } else {
            soxCommand += ` ${waveType} ${frequence}`
        }
    })
    console.log(soxCommand)
    execSync(soxCommand);
}

module.exports = { notes, types, playNote }