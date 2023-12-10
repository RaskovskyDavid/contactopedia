import React from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import AddContact from "./AddContact";
import AddRandomContact from "./AddRandomContact";
import FavoriteContacts from "./FavoriteContact";
import GeneralContacts from "./GeneralContact";
import RemoveAllContact from "./RemoveAllContact";
class ContactIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          contactList: [
            {
              id: 1,
              name: "Ben Parker",
              phone: "666-666-7770",
              email: "ben@dotnetmastery.com",
              isFavorite: false,
            },
            {
              id: 2,
              name: "Kathy Patrick",
              phone: "111-222-0000",
              email: "kathy@dotnetmastery.com",
              isFavorite: true,
            },
            {
              id: 3,
              name: "Paul Show",
              phone: "999-222-1111",
              email: "paul@dotnetmastery.com",
              isFavorite: true,
            },
          ],
        };
      }
    render() {
        return (
            <div>
                <Header />
                <div className="container" style={{ minHeight: "85vh" }}>
                <div className="row py-3">
                    <div className="col-4 offset-2">
                        <AddRandomContact />
                    </div>
                    <div className="col-4">
                        <RemoveAllContact />
                    </div>
                    <div className="row py-2">
                        <AddContact />
                    </div>
                    <div className="row py-2">
                    <FavoriteContacts
                            contacts={this.state.contactList.filter(
                            (u) => u.isFavorite === true
                            )}
                        />
                    </div>
                    <div className="row py-2">
                    <GeneralContacts
                            contacts={this.state.contactList.filter(
                            (u) => u.isFavorite === false
                            )}
                        />
                    </div>
                </div>
                </div>
                <Footer />
            </div>
            );
        }
    }
    
    export default ContactIndex;