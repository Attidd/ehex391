const users = [
  {
    id: "1",
    userName: "Almid",
    email: "almid@example.com",
    numberID: "195361",
    created_at: "2018-01-01",
    characters: 3,
    level: 1,
    active: true
  },
  {
    id: "2",
    userName: "Test",
    email: "test@example.com",
    numberID: "415622",
    created_at: "2018-04-02",
    characters: 4,
    level: 5,
    active: false
  },
  {
    id: "3",
    userName: "Admin",
    email: "admin@example.com",
    numberID: "180512",
    created_at: "2018-03-01",
    characters: 2,
    level: 10,
    active: true
  },
  {
    id: "4",
    userName: "Demo",
    email: "demo@example.com",
    numberID: "918337",
    created_at: "2018-04-03",
    characters: 1,
    level: 3,
    active: false
  }
];

export default users;
//       <Header as='h2'>Attached Content</Header>
//       <Grid columns={3}>
//         <Grid.Column >
//           {users.map(function (user) {
//             return (
//               <div>
//           <Segment attached='top'>{users[0].userName} </Segment>
//           <Segment attached>{users[1].userName}</Segment>
//           <Segment attached>{Segment 3}</Segment>
//           <Segment attached='bottom'>Segment 4</Segment>
//           </div>
//           );
// }
// )
// }
