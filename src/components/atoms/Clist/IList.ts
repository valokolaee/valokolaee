import { ReactNode } from "react";

export interface IList {
    list?: any[];
    initialNumToRender?: number | undefined;
    noSeparator?: boolean;
    customItem: (item: any, index: number) => ReactNode;
    itemHeight?: number;
    onScrollEndDrag?: () => void;
    onRefresh?: () => void;
    refreshing?: boolean;
    ListEmptyComponent?: React.ReactElement | string

    numColumns?: number | undefined;
    horizontal?: boolean | null | undefined;
    wrap?: boolean | null | undefined;

}