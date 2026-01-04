import Counter from "../components/counter";

export default async function page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <ul>
        {data.map((users) => (
          <li key={users.id}>{users.name}</li>
        ))}
      </ul>
      <h1>this is a cabin page</h1>
      <Counter users={data} />
    </div>
  );
}
