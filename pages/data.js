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
  Pagination
} from "semantic-ui-react";
import Page from "../components/layout/page";
import users from "../data/users";
import jobs from "../data/jobs";
import weapons from"../data/weapons";

const styleGrid1 = { width: 130, height: 130 };
const sizeGrid1 = "big";
const Data = () => (
  <div>
    <Page>
      <Container style={{ padding: "5em 0em" }}>
        <Grid columns={5} divided centered>
          <Grid.Row>
            <Grid.Column>
              <Segment textAlign="center" size={sizeGrid1} inverted>
                {" "}
                Add User
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment color="orange" textAlign="center" size={sizeGrid1} inverted>
                Add Weapon
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment color="grey" textAlign="center" size={sizeGrid1}inverted>
                {" "}
                Add Armor
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment color="teal" textAlign="center" size={sizeGrid1} inverted>
                Add Note
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Header textAlign="center" as="h2">
          Data query
        </Header>
        <Divider section />

        <Grid columns={3}>
          <Grid.Column>
            <Header textAlign="center" as="h2">
              Classes ({jobs.length})
            </Header>
            <Divider section />
            <Segment.Group>
              <Segment color="red" textAlign="center">
                <h3>Melee</h3>
              </Segment>
              <Segment.Group>
                <Segment>
                  <p>Warrior</p>
                </Segment>
                <Segment>
                  <p>Guardian</p>
                </Segment>
                <Segment>
                  <p>Barbarian</p>
                </Segment>
              </Segment.Group>
              <Segment color="green" textAlign="center">
                <h3>Ranged</h3>
              </Segment>
              <Segment.Group>
                <Segment>
                  <p>Hunter</p>
                </Segment>
                <Segment>
                  <p>Scout</p>
                </Segment>
                <Segment>
                  <p>Sniper</p>
                </Segment>
              </Segment.Group>
              <Segment color="blue" textAlign="center">
                <h3>Magic</h3>
              </Segment>
              <Segment.Group>
                <Segment>
                  <p>Time-Mage</p>
                </Segment>
                <Segment>
                  <p>Witch</p>
                </Segment>
                <Segment>
                  <p>Enchantress</p>
                </Segment>
              </Segment.Group>
              <Segment color="purple" textAlign="center">
                <h3>Mixed</h3>
              </Segment>
              <Segment.Group>
                <Segment>
                  <p>Kunoichi</p>
                </Segment>
                <Segment>
                  <p>Summoner</p>
                </Segment>
                <Segment>
                  <p>Soldier</p>
                </Segment>
              </Segment.Group>
              <Segment inverted textAlign="center">
                <p>Bottom</p>
              </Segment>
            </Segment.Group>
            <Message
              attached="bottom"
              header="Task"
              content="Each Class type should be paginated. Upon clicking, it opens a modal or page related to that class."
              icon="help circle"
              info
            />
          </Grid.Column>

          <Grid.Column>
            <Header textAlign="center" as="h2">
              Users ({users.length})
            </Header>
            <Divider section />

            <Menu attached="top" compact inverted widths={3}>
              <Menu.Item as="a">Users ({users.length})</Menu.Item>
              <Menu.Item as="a">Classes ({jobs.length})</Menu.Item>
              <Menu.Item as="a">Weapons ({weapons.length})</Menu.Item>
            </Menu>
            <Table compact attached inverted selectable>
              <Table.Header tableData={users}>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Characters</Table.HeaderCell>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell data={users.userName}>
                    <Label color="red" ribbon>
                      Almid
                    </Label>
                  </Table.Cell>
                  <Table.Cell>almid@example.com</Table.Cell>
                  <Table.Cell>2</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Label color="white" ribbon>
                      Cell
                    </Label>
                  </Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Label color="blue" ribbon>
                      Cell
                    </Label>
                  </Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                  <Table.Cell>Cell</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
        <Segment textAlign="center" attached="bottom" inverted>
              Active/Inactive | Level | Hours-Active | Last Log In.
            </Segment>
            <Divider section />

            <Table compact attached inverted selectable>
              <Table.Header>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Type</Table.HeaderCell>
                <Table.HeaderCell>Cost (Coins)</Table.HeaderCell>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Label color="orange" ribbon>
                      Bronzesword
                    </Label>
                  </Table.Cell>
                  <Table.Cell>Sword</Table.Cell>
                  <Table.Cell>2,100</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Label color="orange" ribbon>
                      Shortsword
                    </Label>
                  </Table.Cell>
                  <Table.Cell>Sword</Table.Cell>
                  <Table.Cell>210</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Label color="orange" ribbon>
                      Longsword
                    </Label>
                  </Table.Cell>
                  <Table.Cell>Sword</Table.Cell>
                  <Table.Cell>830</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <Segment textAlign="center" attached="bottom" inverted>
              Color should represent quality, row color represents rarity.
            </Segment>
            <Divider section />

            <Table compact attached inverted selectable>
              <Table.Header>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Role</Table.HeaderCell>
                <Table.HeaderCell>Skills</Table.HeaderCell>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Label color="red" ribbon>
                      Warrior
                    </Label>
                  </Table.Cell>
                  <Table.Cell>Melee</Table.Cell>
                  <Table.Cell>4</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Label color="green" ribbon>
                      Hunter
                    </Label>
                  </Table.Cell>
                  <Table.Cell>Ranged</Table.Cell>
                  <Table.Cell>8</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Label color="blue" ribbon>
                      Witch
                    </Label>
                  </Table.Cell>
                  <Table.Cell>Mage</Table.Cell>
                  <Table.Cell>21</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Label color="purple" ribbon>
                      Soldier
                    </Label>
                  </Table.Cell>
                  <Table.Cell>Mixed</Table.Cell>
                  <Table.Cell>16</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <Segment textAlign="center" attached="bottom" inverted>
              Add a pop-up tooltip that mentions a color represents class role.
            </Segment>
            <Message
              attached="bottom"
              header="Reminder"
              content="When you add more columns, move it outside of the grid for more space. Make the styles dynamic based on content."
              icon="help circle"
              warning
            />
          </Grid.Column>

          <Grid.Column>
            <Header textAlign="center" as="h2">Weapons ({weapons.length})</Header>
            <Divider section />
            <Segment textAlign="center" color="orange" attached="top">
              {weapons[0].name}{" "}
            </Segment>
            <Segment textAlign="center" color="orange" attached>
              {weapons[1].name}
            </Segment>
            <Segment textAlign="center" color="orange" attached>
              {weapons[2].name}
            </Segment>
            <Segment textAlign="center" color="orange" attached="bottom">
              {weapons[3].name}
            </Segment>
            <Header textAlign="center" as="h2">Misc [Non-Primary]</Header>
            <Header textAlign="center" as="h4" attached="top" block>
              Throwable
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
                        <Message
              attached="bottom"
              header="Optional"
              content="Add the items to a datagrid and give them their own separate page if they get too large to manage."
              icon="help circle"
              positive
            />
          </Grid.Column>
        </Grid>
      </Container>
    </Page>
  </div>
);

export default Data;
