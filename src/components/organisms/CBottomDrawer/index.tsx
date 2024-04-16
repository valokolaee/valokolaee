import { forwardRef, memo, useImperativeHandle, useRef, useState } from 'react';
import { Dimensions, Modal, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import ColorSystem from '../../../configs/color/ColorSystem';
import styler from '../../../utilities/styler';
import CText from '../../atoms/Ctext';
import CAllButton from '../../molecules/CAllButton';
import styleValues from '../../utils/enums/styleValues';
import DoubleButtons from '../DoubleButtons';
import { ICBottomDrawer } from './ICBottomDrawer';
import { EnumFontSize } from '../../utils/enums/EnumFontSize';
import RBSheet from 'react-native-raw-bottom-sheet';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { open } from 'realm';


export default memo(forwardRef(({ title, baseView, children, style, onOpen, onClose }: ICBottomDrawer, ref) => {
    useImperativeHandle(ref, () => { return { show, hide }; });
    const refRBSheet = useRef<any>();

    const doubleBtn = baseView?.doubleBtn!
    const singleBtn = baseView?.singleBtn!
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

    const show = () => {
        setIsBottomSheetOpen(true);
        refRBSheet.current.open()

    };

    const hide = () => {
        setIsBottomSheetOpen(false);
        refRBSheet.current.close()



    };

    return (

        <RBSheet
            animationType='fade'
            height={heightPercentageToDP(70)}
            ref={refRBSheet}
            closeOnDragDown
            closeOnPressBack
            closeOnPressMask
            onClose={onClose}
            onOpen={onOpen}
            customStyles={{ container: [defStyles.body, style], }}
        >
            {isBottomSheetOpen &&
                <>
                    {title && <CText  {...title} fontSize={EnumFontSize.h2} bold />}
                    <ScrollView>
                        {children}
                    </ScrollView>
                    <View>
                        {doubleBtn && <DoubleButtons {...doubleBtn} />}
                        {(doubleBtn && singleBtn) && <CText />}

                        {singleBtn && <CAllButton {...singleBtn} style={styler({ alignSelf: 'center', width: styleValues.centeredItemsWidth })} />}
                    </View>
                </>
            }

        </RBSheet>


    )

}))

const defStyles = StyleSheet.create({

    body: {

        borderTopEndRadius: styleValues.r25,
        borderTopStartRadius: styleValues.r25,
    }
});