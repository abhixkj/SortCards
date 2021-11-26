import React, { Component } from "react";
import { SortCards } from "../api/card";
import SideMenu from "../components/Sections/SideMenu";
import PageHeader from "../components/Sections/PageHeader";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import SortBox from "../components/SortBox/SortBox";
import Input from "../components/controls/Input";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { cardsInput: "", sortedCards: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState((prevState) => {
      return {
        cardsInput: event.target.value,
      };
    });
  }

  handleSubmit(event) {
    if (this.state.cardsInput.trim() === "") {
      return;
    }

    var arrtemp = this.state.cardsInput.split(",");
    var arrCards = [];

    for (let i of arrtemp) {
      if (i !== null && i.trim() !== "") {
        arrCards.push(i.trim());
      }
    }

    var sortedCardString = SortCards(arrCards);

    sortedCardString.then((res) => {
      console.log(res);
      if (res.data) {
        this.setState((prevState) => {
          return {
            sortedCards: res.data,
          };
        });
      } else {
        alert("Something went wrong!");
      }
    });
  }

  render() {
    return (
      <div>
        <SideMenu />
        <PageHeader
          title="Card Sorter"
          subTitle="Sort Cards.."
          icon={<ViewModuleIcon fontSize="large" />}
        />
        <div style={{ padding: "100px", maxWidth: "900px" }}>
          <div style={{ padding: "10px" }}>
            <label style={{ paddingBottom: "10px" }}>
              Please enter cards names in the form of short strings seperated
              via comma(,). Eg. Qh for Queen Of Hearts
            </label>
          </div>

          <SortBox
            sortString={this.state.cardsInput}
            onInputChange={this.handleChange}
            onSort={this.handleSubmit}
          />
          <div style={{ paddingTop: "30px" }}>
            <Input
              label="Sorted Cards"
              variant="outlined"
              size="large"
              fullWidth={true}
              value={this.state.sortedCards.join(", ")}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
