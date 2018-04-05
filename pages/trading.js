import React from "react";
import {
  Container,
  Divider,
  Grid,
  Header,
  Menu,
  Message,
  Segment,
  Table,
  Label,
  Popup,
  Icon
} from "semantic-ui-react";
import Page from "../components/layout/page";
import weapons from "../data/weapons";

const styleGrid1 = { width: 130, height: 130 };
const sizeGrid1 = "big";
const thisRowClick = weapon => alert(weapon);
const Trading = () => (
  <div>
    <Page>
      <Container style={{ padding: "5em 0em" }}>
        <Grid columns={3} divided centered>
          <Grid.Row>
            <Grid.Column>
              <Segment textAlign="center" size={sizeGrid1} inverted>
                {" "}
                Trading Board
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment textAlign="center" size={sizeGrid1} inverted>
                Merchant
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Header textAlign="center" as="h2">
          Data query
        </Header>
        <Divider section />

        <Grid columns={2}>
          <Grid.Column>
            <Header textAlign="center" as="h2">
              Player Inventory
            </Header>
            <Divider section />
            <Header textAlign="center" as="h4" attached="top" block>
              Inventory
            </Header>
            <Menu attached="top" compact widths={3}>
              <Menu.Item as="a">Shuriken</Menu.Item>
              <Menu.Item as="a">Grenade</Menu.Item>
              <Menu.Item as="a">Rock</Menu.Item>
            </Menu>
            <Menu attached compact widths={3}>
              <Menu.Item as="a">Item</Menu.Item>
              <Menu.Item as="a">Item</Menu.Item>
              <Menu.Item as="a">Item</Menu.Item>
            </Menu>
            <Menu attached compact widths={3}>
              <Menu.Item as="a">Item</Menu.Item>
              <Menu.Item as="a">Item</Menu.Item>
              <Menu.Item as="a">Item</Menu.Item>
            </Menu>
            <Menu attached="bottom" compact widths={3}>
              <Menu.Item as="a">Item</Menu.Item>
              <Menu.Item as="a">Item</Menu.Item>
              <Menu.Item as="a">Item</Menu.Item>
            </Menu>
            <Header textAlign="center" as="h4" attached block>
              Utility
            </Header>
            <Menu compact widths={3}>
              <Menu.Item as="a">Potion</Menu.Item>
              <Menu.Item as="a">Trap</Menu.Item>
              <Menu.Item as="a">Rope</Menu.Item>
            </Menu>{" "}
          </Grid.Column>
          <Grid.Column>
            <Header textAlign="center" as="h2">
              Weapons ({weapons.length})
            </Header>
            <Divider section />

            <Menu attached="top" compact inverted widths={3}>
              <Menu.Item as="a">
                Swords ({weapons.filter(x => x.type === "Sword").length})
              </Menu.Item>
              <Menu.Item as="a">Shields </Menu.Item>
              <Menu.Item as="a">Armor ({weapons.length})</Menu.Item>
            </Menu>
            <Table compact attached inverted selectable>
              <Table.Header>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Type</Table.HeaderCell>
                <Table.HeaderCell>Cost (Coins)</Table.HeaderCell>
              </Table.Header>
              <Table.Body>
                {weapons.filter(x => x.type === "Sword").map(weapon => (
                  <Table.Row key={weapons.id}>
                    <Table.Cell onClick={thisRowClick.bind(this, weapon.name)}>
                      <Label color="orange" ribbon>
                        {weapon.name}
                      </Label>
                    </Table.Cell>
                    <Table.Cell>{weapon.type}</Table.Cell>
                    <Table.Cell>{weapon.cost}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
            <Segment textAlign="center" attached="bottom" inverted>
              Color should represent quality, row color represents rarity.
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </Page>
    <style jsx global>{`
      .main {
        margin: auto;
      }
      @media (max-width: 750px) {
        .main {
          padding: 0;
          width: auto;
        }
      }
    `}</style>
  </div>
);

export default Trading;
