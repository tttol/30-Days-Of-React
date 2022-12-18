function PropsSample(props) {
  console.log(props);
  return (
      <div>
          <h1>Props sample</h1>
          <p>Name: {props.person.name}</p>
          <p>Age: {props.person.age}</p>
          <p>Sex: {props.person.sex}</p>
      </div>
  )
}

export default PropsSample;