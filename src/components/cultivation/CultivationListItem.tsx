import React from "react";
import {
    Image,
    StyleSheet, Text,
    View,
    ViewProps,
} from "react-native";
import {ICultivation} from "../../domain/ICultivation";
import {IField} from "../../domain/IField";

interface CultivationListItemProps extends ViewProps {
    cultivation: ICultivation,
    field: IField,
    meteoimage: string,
}

class CultivationListItem extends React.Component<Readonly<CultivationListItemProps>, {/* stateless */}> {
    render(): JSX.Element { return (
        <View style={styles.li}>
            <Image style={styles.image} source={{uri: "./assets/images/icon.png"}} />
            <View>
                <Text>{this.props.cultivation.name}</Text>
                <Text>{'Semina: ' + this.props.cultivation.sowingDate + ', Raccolto: ' + this.props.cultivation.harvestDate}</Text>
                <Text>{this.props.cultivation.description}</Text>
                <Image style={styles.meteoimage} source={{uri: this.props.meteoimage}} />
            </View>
        </View>);
    }
}

// css proprules fornisce typing migliore di  StyleSheet.create({
const styles = StyleSheet.create({
    li: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    image: {
        resizeMode: "stretch",
        height: '100%',
    },
    meteoimage:{

    }
});
export default CultivationListItem;
