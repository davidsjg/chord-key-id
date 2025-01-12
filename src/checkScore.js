export default function compare(note1, note2){

    const scoreMap = new Map([
        ["F", 'C7'],
        ["C", 'G7'],
        ["G", 'D7'],
        ["D", 'A7'],
        ["A", 'E7'],
        ["E", 'B7'],
        ["B", 'F#7']
      ]);

    let testNote = scoreMap.get(note1);

    if(testNote === note2){
        return true
    } else {
        return false
    }
}