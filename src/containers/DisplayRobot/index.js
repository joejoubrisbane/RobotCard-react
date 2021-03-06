import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CardList from "../../components/CardList";
import SearchBox from "../../components/SearchBox";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import {connect} from "react-redux";
import _ from 'lodash';
import Scroll from '../../components/Scroll';
import {
    Loader
} from "semantic-ui-react";
class DisplayRobot extends Component {
    constructor(props) {
        super(props);
        this.state = {

            searchfield: ""
        };
    }

    onSearchChange = event => {
        this.setState({ searchfield: event.target.value });
    };
    render() {

        const { clients,firestore,history } = this.props;
        const clientNames = _.map(clients, (client)=>({
           name:client.firstName +client.lastName,
            ...client
        }));
        const filteredRobots =_.filter(clientNames, (robot)=>( _.toLower(robot.name)
            .includes(_.toLower(this.state.searchfield))));
        if(clients){
            return (
                <div>
                    <h1 className='f1'>Robot Friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>

                        <CardList history={history} firestore={firestore} robots={filteredRobots} />
                    </Scroll>
                </div>
            )
        }else {
            return( <Loader active  size='large'> <h3 >Making robots</h3></Loader>)
        }

    }
}

DisplayRobot.propTypes = {
    clients:PropTypes.array,
};

export default compose(
    firestoreConnect([{ collection: "clients" }]),
    connect((state, props) => ({
        clients: state.firestore.ordered.clients,
    }))
)(DisplayRobot);
