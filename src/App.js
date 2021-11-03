import { Component } from "react";
import shortid from "shortid";

import "./App.css";
import { ContactList } from "./components/ContactList/ContactList";
import { Section } from "./components/Section/Section";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = (e) => {
    const { name, number, contacts } = this.state;

    e.preventDefault();

    this.setState({
      contacts: contacts.concat({ id: shortid.generate(), name, number }),
    });
  };

  render() {
    return (
      <div className="App">
        <Section text="Phonebook">
          <form action="submit" className="form">
            <label>
              Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={this.handleChange}
              />
            </label>
            <label>
              Number
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                onChange={this.handleChange}
              />
            </label>

            <button type="submit" onClick={this.handleClick}>
              Add contact
            </button>
          </form>
        </Section>
        <Section text="Contacts">
          <ContactList contacts={this.state.contacts} />
        </Section>
      </div>
    );
  }
}

export default App;
