/*
 * Component: CarerProfile
 * Desc     : an carer's photo and info
 * Params   :
 */
var contacts = require('json!./../data/contacts.json');
export default class CarerProfile extends React.Component {
    render() {
        return (

            <div className="ui segment">
                <h3 className="ui center aligned header">Carer Profile</h3>

            <div className="ui one column stackable center aligned page grid" >
                <table className="ui very basic collapsing celled table">
                    <tr>
                        <td colSpan="2">
                            <img onClick={this.props.onClick} className="ui Large image" src='images/carer.jpg' />
                        </td>
                    </tr>
                    <tr>
                        <div className="ui grid">
                            <div className="eight wide column">
                                <h3>Carer</h3>
                            </div>
                            <div className="four wide column">
                                <h3> {contacts[2].NAME} </h3>
                            </div>
                        </div>
                    </tr>
                    <tr>
                        <div className="ui grid">
                            <div className="eight wide column">
                                <p>Email: {contacts[0].EMAIL}</p>
                            </div>
                            <div className="four wide column">
                                <p>Relation: Son</p>
                            </div>
                        </div>
                    </tr>
                </table>
            </div>
                </div>
        );
    }
}
