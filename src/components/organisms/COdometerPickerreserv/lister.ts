

export default (max: maxType, selectedIndex?: number) => {
    var list: string[] = [];
    if (selectedIndex) {
        list = minMaxLister(max, selectedIndex)
    } else {

        list = simpleLister(max)
    }

    return list;
}


export type maxType = 10 | 100 | 1000 | 10000 | 100000





function simpleLister(max: number) {
    var list: string[] = [];
    for (let index: number = 0; index < max; index++) {
        const o = max.toString()?.length - index.toString()?.length - 1
        const os = '0'.repeat(o)
        list.push(os + index)
    }
    return list;
}


function minMaxLister(max: maxType, selectedIndex: number) {
    const thisMax = selectedIndex + 20 > max ? max : selectedIndex + 20
    const thisMin = selectedIndex - 20 < 0 ? 0 : selectedIndex - 20

    var list: string[] = [''];
    for (let index: number = thisMin; index < thisMax; index++) {
        // const o = max.toString()?.length - index.toString()?.length - 1
        // const os = '0'.repeat(o)
        list.push('' + index)
    }
    return list;
}