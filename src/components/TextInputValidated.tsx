import React from "react";
import {StyleSheet, TextInput, TextInputProps, TextPropTypes} from "react-native";

/*
* utilizzo: gli si fornisce un pattern regexp tramite "props.pattern" (string array) e delle funzioni opzionali:
*  - onValidation: (validationResults: boolean[]) => void
*  - onChangeText: (text: string, validationResults: boolean[]) => void
*
* nel pattern vengono fornite N validazioni, e i risultati vengono formiti come N parametri booleani.
* il comportamento da eseguire in caso di input invalidi è gestito in quelle funzioni.
*
* */
interface ValidatingTextInputProps extends TextInputProps {
    onChangeText: ((text: string, validationResults?: boolean[]) => void) | undefined
    onValidation?: ((validationResults: boolean[]) => void) | undefined;
    pattern?: string[];
    children?: React.ReactNode;
}

class ValidatingTextInput extends React.Component<Readonly<ValidatingTextInputProps>, {/* stateless */}> {

    handleValidation(value: string): boolean[] {
        let patterns: string[] | undefined = this.props.pattern;
        if (!patterns) return [true];

        // fix nel caso venga passato una singola stringa invece di array.
        if (patterns as any === patterns + '') patterns = [patterns as any];

        const validations: boolean[] = [];
        for (const pattern of patterns) {
            let validation: boolean;
            try { validation = new RegExp(pattern, 'g').test(value); }
            catch (e) { validation = true; }
            validations.push( validation );
        }

        return validations;
    }

    onChange(value: string): void {
        let onChangeText: ((text: string, validationResults?: boolean[]) => void) | undefined = this.props.onChangeText;
        let onValidation: ((validationResults: boolean[]) => void) | undefined = (this.props).onValidation;
        const validationResults: boolean[] = this.handleValidation(value);
        if (onValidation) onValidation(validationResults);
        if (onChangeText) onChangeText(value, validationResults);
    }

    render(): JSX.Element {
        const {
            pattern,
            onChangeText,
            //children,
            style,
            ...props
        } = this.props;
        /* <TextInput style={style} onChangeText={value => this.onChange(value)} {...props}>{children}</TextInput> */
        return (<TextInput style={style} onChangeText={value => this.onChange(value)} {...props} />);
    }
}

export default ValidatingTextInput;
