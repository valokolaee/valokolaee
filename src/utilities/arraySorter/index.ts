import dayjs from "dayjs";
import TextHelper from "../TextHelper";

export default (array: any[], filed: string, isAcceding: boolean) => {
    if (array?.length < 1) return []

    array = JSON.parse(JSON.stringify(array))
    // mrvTxtTest.logArray(array, 'array')

    const acceding = isAcceding ? 1 : -1;

    array?.sort((a, b) => { return caller(a[filed], b[filed]) * acceding; })
    return array
}



function caller(a: string | number, b: string | number,) {

    if (typeof a === 'string') {
        if (dayjs(a).isValid()) {
            return date(a, b)
        } else {
            return text(a, b)
        }
    } else {
        return numb(a, b)
    }
}


function text(a: string | number, b: string | number) {
    const nameA = a?.toString().toUpperCase(); // ignore upper and lowercase
    const nameB = b?.toString().toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;

}

function date(a: string | number, b: string | number) {
    if (dayjs(a).isAfter(dayjs(b))) {
        return -1;
    }
    if (dayjs(a).isBefore(dayjs(b))) {
        return 1;
    }

    return 0;
}
function numb(a: string | number, b: string | number) {

    return TextHelper.safeParsInt(a) - TextHelper.safeParsInt(b)
}



// mrvTxtTest.logArray(list.sort(
//     (b, a) => {
//         const nameA = a.date.toUpperCase(); // ignore upper and lowercase
//         const nameB = b.date.toUpperCase(); // ignore upper and lowercase
//         if (nameA < nameB) {
//             return -1;
//         }
//         if (nameA > nameB) {
//             return 1;
//         }

//         // names must be equal
//         return 0;
//     }
// ))
// mrvTxtTest.logArray(list.sort(
//     (b, a) => {

//         if (dayjs(a.date).isAfter(dayjs(b.date))) {
//             return -1;
//         }
//         if (dayjs(a.date).isBefore(dayjs(b.date))) {
//             return 1;
//         }

//         // names must be equal
//         return 0;
//     }
// ))
// mrvTxtTest.logArray(list.sort((a, b) => TextHelper.safeParsInt('a.distance') - TextHelper.safeParsInt(b.distance)))
