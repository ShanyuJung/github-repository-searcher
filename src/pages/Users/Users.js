const Users = (props) => {
  return (
    <>
      <h1>{`USERS:${props.username}`}</h1>

      {props.userRepos.map((repo) => {
        return (
          <div key={repo.id}>
            <h2>{repo.name}</h2>
            <h3>{repo.stargazers_count}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Users;
