export const _safe_charAt = (index: number, _bigNumS: string) => index > _bigNumS?.length - 1 ? 0 : parseInt(_bigNumS.charAt(index))


export function replaceAt(original: string, index: number, replacement: string) {
    return original.substring(0, index) + replacement + original.substring(index + replacement?.length);
}

