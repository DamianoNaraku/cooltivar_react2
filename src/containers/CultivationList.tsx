import { connect } from "react-redux";
import { Route } from "react-router-dom";

import history from "../history";
import { ICurrent } from "../types";
import React from "react";
import {View} from "react-native";
import {ICultivation} from "../domain/ICultivation";
import axios, {AxiosResponse} from "axios";
import {API} from "../constants";
import {IField} from "../domain/IField";
import CultivationListItem from "../components/cultivation/CultivationListItem";

interface CultivationListProps extends React.ComponentProps<any> {
    exact?: boolean;
    isAuthenticated: boolean | null;
    path: string;
    component: React.ComponentType<any>;
}

interface CultivationState {
    field: IField;
    list: ICultivation[];
}

class CultivationList extends React.Component<CultivationListProps, CultivationState>{

    // todo: prof vuole service separati o container = service?


    //todo: sta cosa però la dovrei fare con redux come:
    // 1) emetto azione redux
    // 2) redux la esegue e manda ajax (intanto la pagina visualizza lo stato attuale vuoto)
    // 3) eventualmente riceverà la risposta o un timeout.
    // 4) alla ricezione cambia lo stato e causa refresh degli elementi che osservano quello stato
    // 5) la funzione map() esportata di questo componente mapperà il nuovo redux state dentro lo stato read-only interno al container

    fetchCultivations(): void {
        let promise: Promise<AxiosResponse<ICultivation[]>> = axios.get<ICultivation[]>(API.cultivations.list(this.state.field.id));
        promise.then( this.onCultivationReply )
    }
    onCultivationReply(value: AxiosResponse<ICultivation[]>): void {
        this.state.list = value.data;
    }

    getMeteoImage(): string {
        return 'todo';
    }

    render(): React.ReactNode {
        const meteoimage = this.getMeteoImage();
        todo: ricevi field dalle props
        return (
            <View>
                {
                    this.state.list.map(li =>
                        <CultivationListItem field={this.props.field} cultivation={li} key={li.id} meteoimage={meteoimage}></CultivationListItem>)
                }
            </View>)
    }
}



const mapStateToProps = (state: CultivationState) => ({
    field: state.field,
    list: state.list,
    mistkae: ' aaa',
});

export default connect(
    mapStateToProps,
)(CultivationList);
