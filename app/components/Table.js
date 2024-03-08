import { MOCK_DATA } from "./MockData";

export default function Table() {
  return (
    <table>
      <tbody>
        <tr>
          <th>Id</th>
          <th>first_name</th>
          <th>last_name</th>
          <th>gender</th>
        </tr>
        {MOCK_DATA.map((User) => (
          <tr key={User.id}>
            <td>{User.id}</td>
            <td>{User.first_name}</td>
            <td>{User.last_name}</td>
            <td>{User.gender}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
