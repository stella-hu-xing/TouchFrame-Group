
/*
 * Component: Connection
 * Desc     : The carer management page
 * Params   : null
 */

import Request from 'superagent';

export default class Connection extends React.Component {
  constructor() {
    super();
    this.state = {
      emergency: 0,
      contacts: []
    };
  }

  componentWillMount() {
    var contacts_url = touchframeapi_url + "/" + (currentNum+1) + "/contacts";
    Request.get(contacts_url).then((response) => {
      this.setState({
        contacts: response.body
      });
    });
  }

  render() {
    var emergency_contact = {
      data: this.state.contacts.length > 0? this.state.contacts[this.state.emergency]: {},
      index: this.state.emergency
    };

    var nonemergency_contact = this.state.contacts.map((item,index) => {
        return {
          data: item,
          index: index
        };
      })
      .filter((item) => (item.index != this.state.emergency));

    console.log(emergency_contact);
    console.log(nonemergency_contact);
    return (
      <div className="ui segment">
        <h3 className="ui center aligned header">Connections</h3>
        <table className="ui celled table">
          <thead>
            <tr>
              <th colspan="3">
                Emergency Carers
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><div className="ui two column grid">
                <div className="ui column">
                  <table>
                    <tr>
                      <td>
                        <p>{ emergency_contact.data.NAME }</p>
                      </td>
                      <td>
                        <p>Relation:  { emergency_contact.data.RELATIONSHIP }</p>
                      </td>
                      <td>
                        <a href={ "tel:" + emergency_contact.data.PHONE } className="push-right"> 
                          <div className="media-body"> Call Out</div>
                        </a>
                      </td>
                    </tr>
                  </table>
                </div>
                <div className="ui column"><img src={ "images/carer" + (5 * currentNum + emergency_contact.index) + ".jpg" } width="100" height="100"/></div>
                  </div>
              </td>
            </tr>
            <tr>
              <th colspan="3">
                All Carers
              </th>
            </tr>
            {(() => {
              var nonemergency = nonemergency_contact.map((contact) => (
                <tr>
                    <td>
                      <div className="ui two column grid">
                        <div className="ui column">
                          <table>
                            <tr>
                              <td><p>{ contact.data.NAME }</p></td>
                              <td><p>Relation:  { contact.data.RELATIONSHIP }</p></td>
                              <td><a href={"tel:" + contact.data.PHONE } className="push-right">   <div className="media-body"> Call Out</div> </a></td>
                              <td>
                                <button className="ui primary button" onClick={() => this.setState({emergency: contact.index})}>Set
                                  Emergency
                                </button>
                              </td>
                            </tr>
                          </table>
                        </div>
                        <div className="ui column"><img src={ "images/carer" + (5 * currentNum + contact.index) +".jpg"} width="100" height="100"/></div>
                      </div>
                    </td>
                </tr>
              ));

              return nonemergency;
            })()}

          </tbody>
        </table>
      </div>
    );
  }
}
