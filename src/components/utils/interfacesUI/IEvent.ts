
export interface IEvent {
    onChange?: (value: string) => void;
    onCheck?: (value: boolean) => void;
    onPress?: () => void;
    onPressIn?: (() => void) | undefined;
    onPressOut?: (() => void) | undefined;
    onLongPress?: () => void;
    onChangeText?: ((text: string) => void) | undefined;
    onSubmitEditing?: () => void;
    onSelect?: ((item?: any, index?: number, value?: string) => void | boolean) | undefined;
    onBackButtonPress?: () => void;
}